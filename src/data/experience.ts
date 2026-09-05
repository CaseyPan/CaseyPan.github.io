// Professional experience — sourced directly from résumé content.

export type Role = {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  context: string;
  bullets: string[];
  technologies: string[];
};

export const roles: Role[] = [
  {
    id: "mediatek",
    company: "MediaTek",
    title: "Software Development Engineer",
    location: "San Diego, CA",
    startDate: "Mar 2024",
    endDate: "Mar 2026",
    context:
      "Worked on DUT (device-under-test) control systems and CI/CD automation for RF calibration — the software that drives and validates hardware on the factory production line.",
    bullets: [
      "Enhanced a multi-threaded DUT control system for 4 concurrent devices by optimizing mutex synchronization and shared memory handling, reducing RF calibration instrument ping time 60× (120s → 2s).",
      "Diagnosed I/O bottlenecks in production calibration pipelines and replaced IPC file transfers with a usbfs kernel-level interface, reducing per-unit transfer time by 1.5s and improving factory throughput.",
      "Built and deployed a Jenkins CI/CD pipeline by provisioning a virtualized Jenkins master node, automating RF calibration across 4 concurrent DUTs with custom per-device test configurations.",
      "Owned reliability for customer-facing RF calibration software as technical DRI, leading root-cause analysis and resolution of 50+ critical regressions.",
      "Integrated LLM-based code review into the Jenkins CI/CD pipeline, catching code quality issues before human review and reducing PR iteration cycles.",
    ],
    technologies: ["C++", "Multithreading", "Jenkins", "CI/CD", "Linux", "CMake", "Git"],
  },
  {
    id: "zillow",
    company: "Zillow Group",
    title: "Software Development Engineer Intern",
    location: "Remote",
    startDate: "May 2023",
    endDate: "Aug 2023",
    context:
      "Contributed to the Shopper Platform team, building shared frontend infrastructure used across multiple product surfaces.",
    bullets: [
      "Built a reusable React.js micro-frontend archetype with integrated GitLab CI/CD, web configuration, and registration APIs, accelerating frontend service setup within the Shopper Platform.",
      "Implemented automated end-to-end Cypress testing in a scheduled GitLab CI/CD pipeline, catching regressions in the platform stub application before deployment.",
    ],
    technologies: ["React.js", "TypeScript", "GitLab CI/CD", "Cypress"],
  },
  {
    id: "aws",
    company: "Amazon Web Services (AWS)",
    title: "Cloud Support Intern",
    location: "Taipei, Taiwan",
    startDate: "May 2021",
    endDate: "Apr 2022",
    context: "Supported internal engineering operations tooling on the cloud support team.",
    bullets: [
      "Built an AWS Lambda and DynamoDB-based on-call scheduling system with Slack API notifications, automating assignments and preventing scheduling conflicts for engineers.",
    ],
    technologies: ["AWS Lambda", "DynamoDB", "Slack API"],
  },
];
