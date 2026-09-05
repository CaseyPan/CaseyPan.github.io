// Selected engineering impact stories shown on the homepage.
// Sourced directly from verified work at MediaTek (Mar 2024 – Mar 2026).

export type ImpactStory = {
  metric: string;
  metricLabel: string;
  title: string;
  problem: string;
  contribution: string;
  result: string;
  technologies: string[];
};

export const impactStories: ImpactStory[] = [
  {
    metric: "60×",
    metricLabel: "faster",
    title: "Concurrent DUT control system",
    problem:
      "The multi-threaded control system driving RF calibration instruments across 4 concurrent devices was bottlenecked by mutex contention and inefficient shared-memory handling — instrument ping time ran ~120 seconds.",
    contribution:
      "Optimized mutex synchronization and shared memory handling in the DUT control system to remove the contention that was serializing work across devices.",
    result:
      "Cut instrument ping time from ~120s to ~2s — a 60× improvement — for calibration running across 4 concurrent devices.",
    technologies: ["C++", "Multithreading", "Mutex Synchronization", "Shared Memory"],
  },
  {
    metric: "50+",
    metricLabel: "regressions resolved",
    title: "Reliability ownership as technical DRI",
    problem:
      "Customer-facing RF calibration software needed a dedicated reliability owner — critical regressions were surfacing across both internal and customer environments.",
    contribution:
      "Owned reliability as the technical DRI (directly responsible individual), leading root-cause analysis and driving each issue to resolution.",
    result: "Resolved 50+ critical regressions, improving stability for internal teams and customers.",
    technologies: ["C++", "Debugging", "Root-Cause Analysis", "Reliability Engineering"],
  },
  {
    metric: "4",
    metricLabel: "concurrent DUTs",
    title: "Jenkins CI/CD for RF calibration",
    problem:
      "RF calibration across the device-under-test (DUT) lab required manual, per-device configuration, limiting throughput and making runs hard to reproduce consistently.",
    contribution:
      "Built and deployed a Jenkins CI/CD pipeline, provisioning a virtualized Jenkins master node to automate RF calibration across 4 concurrent DUTs with custom per-device test configurations.",
    result:
      "Standardized and automated calibration runs across 4 devices at once, improving throughput and run-to-run consistency.",
    technologies: ["Jenkins", "CI/CD", "Automation", "Python"],
  },
];
