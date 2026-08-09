import type { IconType } from "react-icons";
import {
  SiCss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
} from "react-icons/si";

export const techIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Laravel: SiLaravel,
  PHP: SiPhp,
  JavaScript: SiJavascript,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  HTML: SiHtml5,
  CSS: SiCss,
  Firebase: SiFirebase,
};
