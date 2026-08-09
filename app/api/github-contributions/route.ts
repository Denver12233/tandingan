import { NextResponse } from "next/server";

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

const RANGE_START = "2026-02-01";
const RANGE_END = "2026-05-31";

const QUERY = `
  query Contributions($from: DateTime!, $to: DateTime!) {
    viewer {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GithubContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

const LEVEL_TO_INT: Record<GithubContributionLevel, 0 | 1 | 2 | 3 | 4> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

type GraphqlResponse = {
  data?: {
    viewer?: {
      contributionsCollection?: {
        contributionCalendar?: {
          weeks?: Array<{
            contributionDays?: Array<{
              date: string;
              contributionCount: number;
              contributionLevel: string;
            }>;
          }>;
        };
      };
    };
  };
  errors?: Array<{ message: string }>;
  message?: string;
};

export const dynamic = "force-dynamic";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      {
        error:
          "GITHUB_TOKEN is not configured on the server. Add a GitHub personal access token (classic, scope: read:user) to .env.local as GITHUB_TOKEN=ghp_xxxxx and restart the dev server.",
      },
      { status: 500 }
    );
  }

  let response: Response;
  try {
    response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: {
          from: "2026-02-01T00:00:00Z",
          to: "2026-05-31T23:59:59Z",
        },
      }),
      cache: "no-store",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to reach the GitHub GraphQL API." },
      { status: 502 }
    );
  }

  let json: GraphqlResponse | null = null;
  try {
    json = (await response.json()) as GraphqlResponse;
  } catch {
    return NextResponse.json(
      { error: "Invalid response from the GitHub GraphQL API." },
      { status: 502 }
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      {
        error:
          json?.message ??
          `GitHub GraphQL request failed (status ${response.status}).`,
      },
      { status: 502 }
    );
  }

  if (json?.errors?.length) {
    return NextResponse.json(
      {
        error: json.errors.map((error) => error.message).join(" "),
      },
      { status: 502 }
    );
  }

  const weeks =
    json?.data?.viewer?.contributionsCollection?.contributionCalendar?.weeks ?? [];

  const contributions: ContributionDay[] = [];
  for (const week of weeks) {
    for (const day of week.contributionDays ?? []) {
      if (day.date >= RANGE_START && day.date <= RANGE_END) {
        contributions.push({
          date: day.date,
          count: day.contributionCount,
          level: LEVEL_TO_INT[day.contributionLevel as GithubContributionLevel] ?? 0,
        });
      }
    }
  }

  const total = contributions.reduce((sum, day) => sum + day.count, 0);

  return NextResponse.json({ total, contributions });
}
