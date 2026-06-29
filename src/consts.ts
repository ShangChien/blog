import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "ShangChien",
  DESCRIPTION:
    "ShangChien 的个人主页，记录 AI 药物研发平台、计算化学、分子信息学、RDKit 与 PostgreSQL 工程实践。",
  EMAIL: "hi@emm.sh",
  AUTHOR: "ShangChien",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "主页",
  DESCRIPTION:
    "ShangChien 的个人介绍、AI 药物研发平台项目、计算化学工程经验与在线简历。",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "Notes on RDKit, PostgreSQL, cheminformatics data systems, AI platform engineering, and production research workflows.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Selected tools, prototypes, and platform engineering projects.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/ShangChien",
  },
  {
    NAME: "RSS",
    HREF: "/rss.xml",
  },
];
