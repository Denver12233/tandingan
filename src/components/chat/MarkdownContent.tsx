"use client";

import ReactMarkdown, { type Components } from "react-markdown";
import remarkBreaks from "remark-breaks";

const markdownComponents: Components = {
  p: ({ children }) => <p className="my-1 first:mt-0 last:mb-0">{children}</p>,
  strong: ({ children }) => (
    <strong className="font-bold text-[var(--text-primary)]">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  ul: ({ children }) => (
    <ul className="my-1 list-disc space-y-0.5 pl-4 marker:text-[var(--accent)]">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-1 list-decimal space-y-0.5 pl-4">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  h1: ({ children }) => (
    <h1 className="mb-1 mt-2 font-[var(--font-space-grotesk)] text-sm font-bold text-[var(--text-primary)] first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-1 mt-2 font-[var(--font-space-grotesk)] text-[13px] font-bold text-[var(--text-primary)] first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-0.5 mt-1.5 font-bold text-[var(--text-primary)] first:mt-0">
      {children}
    </h3>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-1 border-l-2 border-[var(--accent)] pl-2.5 text-[var(--text-secondary)]">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-[var(--btn-secondary-bg)] px-1 py-0.5 font-[var(--font-geist-mono)] text-[12px] text-[var(--text-primary)]">
      {children}
    </code>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="break-all font-medium text-[var(--accent)] underline underline-offset-2"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="my-2 border-[var(--surface-border)]" />,
};

type MarkdownContentProps = {
  content: string;
};

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkBreaks]} components={markdownComponents}>
      {content}
    </ReactMarkdown>
  );
}
