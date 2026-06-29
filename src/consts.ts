import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Deep Platform Notes",
  DESCRIPTION:
    "A long-running engineering blog on AI drug discovery platforms, RDKit, PostgreSQL, and practical research tooling.",
  EMAIL: "hello@example.com",
  AUTHOR: "Your Name",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Technical writing, project notes, and resume for AI drug discovery platform engineering.",
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
    HREF: "https://github.com/yourname",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/yourname",
  },
  {
    NAME: "RSS",
    HREF: "/rss.xml",
  },
];
