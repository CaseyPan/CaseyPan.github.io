// Central profile content. Edit this file to update personal details
// site-wide — no component code needs to change.

export const profile = {
  name: "Casey",
  fullName: "Yi-Chun (Casey) Pan",
  role: "Software Engineer",
  roleSubtitle: "Systems, Infrastructure & Applied ML",
  location: "Bay Area, CA",
  email: "caseyyc.pan@gmail.com",
  tagline: "Building reliable systems and collecting what I learn along the way.",
  heroLead:
    "I build reliable, performance-conscious software and document what I learn along the way.",
  heroBody:
    "My background includes concurrent systems, automation, CI/CD, and hardware–software integration — two years spent making RF calibration systems faster and more reliable at MediaTek. Alongside that, I've built and shipped applied ML projects, and I'm currently expanding further into AI infrastructure and MLOps.",
  yearsExperience: 2,
  social: {
    github: "https://github.com/CaseyPan",
    linkedin: "https://linkedin.com/in/casey-yichunpan",
    email: "mailto:caseyyc.pan@gmail.com",
  },
  resumeHref: "/resume.pdf",
} as const;

export const narrative = {
  done: "Performance, concurrency, automation, and reliable systems.",
  next: "General software engineering, backend, systems, and infrastructure work.",
  growing: "Applied ML, AI infrastructure, and MLOps.",
} as const;
