// Selected projects — a mix of professional work (MediaTek) and graduate
// coursework projects (UIUC). Status reflects reality: all of these are
// completed for their stated scope.
//
// Work accomplishments that are already fully covered by resume-style
// bullets on the Experience page (Jenkins CI/CD + LLM code review, the
// Zillow React micro-frontend archetype) intentionally aren't duplicated
// here — this page is for projects that show independent technical depth
// beyond day-to-day role bullets.

export type ProjectStatus = "SHIPPED" | "BUILDING" | "EXPLORING";

export type ProjectCategory =
  | "Systems"
  | "Infrastructure"
  | "AI Infrastructure"
  | "Machine Learning"
  | "Developer Tools"
  | "Performance";

export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  contribution: string;
  keyDecisions: string[];
  technologies: string[];
  status: ProjectStatus;
  categories: ProjectCategory[];
  githubHref?: string;
  githubNote?: string; // shown instead of "repo TODO" when there deliberately isn't a repo (e.g. proprietary work)
  demoHref?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "concurrent-dut-control",
    name: "Concurrent DUT Control & Calibration Automation",
    oneLiner:
      "A multi-threaded control system that drives RF calibration instruments across 4 concurrent devices on MediaTek's factory production line.",
    contribution:
      "Enhanced the multi-threaded DUT control system by optimizing mutex synchronization and shared memory handling, and diagnosed an I/O bottleneck in the calibration pipeline that was replaced with a kernel-level usbfs interface.",
    keyDecisions: [
      "Traced instrument ping latency to mutex contention across concurrent device threads rather than assuming it was I/O-bound — fixing the actual bottleneck cut ping time 60× (120s → 2s).",
      "Replaced a IPC-based file transfer path with a usbfs kernel-level interface after profiling showed it was the dominant cost in per-unit transfer time.",
    ],
    technologies: ["C++", "Multithreading", "Mutex Synchronization", "Shared Memory", "Linux"],
    status: "SHIPPED",
    categories: ["Systems", "Performance"],
    githubHref: undefined,
    githubNote: "Proprietary — MediaTek internal project",
    demoHref: undefined,
    featured: true,
  },
  {
    slug: "distributed-ml-cluster",
    name: "Fault-Tolerant Distributed Cluster for ML Workloads",
    oneLiner:
      "A fault-tolerant distributed system in C++ that coordinates ML training/inference workloads across a cluster of nodes.",
    contribution:
      "Designed and implemented the system for CS 425 (Distributed Systems) at UIUC, using raw TCP/UDP socket programming for ring-based membership, SWIM-style failure detection, and a distributed job scheduling algorithm.",
    keyDecisions: [
      "Used SWIM-style failure detection instead of simple heartbeats to keep failure detection scalable as the ring grew, avoiding an all-to-all heartbeat storm.",
      "Built the job scheduler to actively rebalance work across nodes, keeping query processing load within 20% across the cluster instead of letting it drift under uneven load.",
    ],
    technologies: ["C++", "TCP/UDP Sockets", "Distributed Systems", "SWIM Protocol"],
    status: "SHIPPED",
    categories: ["Systems", "Infrastructure", "AI Infrastructure", "Machine Learning"],
    githubHref: undefined, // TODO: add repo link if public
    demoHref: undefined,
    featured: true,
  },
  {
    slug: "cuda-cnn-inference",
    name: "CUDA Kernel Optimization for CNN Inference",
    oneLiner:
      "Hand-written and profiled CUDA convolution kernels for LeNet-5 inference, tuned for a 1.3× speedup over the baseline.",
    contribution:
      "Built and profiled CUDA convolution kernels for CS 483 (Applied Parallel Programming) at UIUC, applying constant/shared memory usage and loop unrolling, and used Nsight Compute to diagnose why further optimizations underperformed.",
    keyDecisions: [
      "Used Nsight Compute to actually measure why tiling and FP16 optimizations underperformed instead of assuming they'd help — a couple of the 'obvious' optimizations didn't pay off on this workload, which shaped which changes were kept.",
      "Prioritized constant/shared memory placement and loop unrolling, which were the changes that produced the measured 1.3× speedup.",
    ],
    technologies: ["CUDA", "C++", "Nsight Compute", "GPU Computing"],
    status: "SHIPPED",
    categories: ["Performance", "AI Infrastructure", "Machine Learning"],
    githubHref: undefined, // TODO: add repo link if public
    demoHref: undefined,
    featured: true,
  },
  {
    slug: "nlp-knowledge-chatroom",
    name: "Real-Time Knowledge Management Chatroom",
    oneLiner:
      "A React-based chatroom that integrates a T5 model to dynamically structure and summarize conversation content in real time.",
    contribution:
      "Developed the application for CS 546 (Advanced Natural Language Processing) at UIUC, integrating a T5 model for dynamic content structuring and summarization to support user information management and cognitive flow.",
    keyDecisions: [],
    technologies: ["React.js", "T5", "NLP", "Hugging Face Transformers"],
    status: "SHIPPED",
    categories: ["Machine Learning", "Developer Tools"],
    githubHref: "https://github.com/weiyu0824/Chopia",
    demoHref: undefined,
    featured: true,
  },
  {
    slug: "transfer-attack-retail",
    name: "Transfer Attack toward Model Training on Retail Dataset",
    oneLiner:
      "An evaluation of transfer-based adversarial attacks against image classifiers in a retail visual-perception setting.",
    contribution:
      "Implemented and evaluated transfer-based adversarial attacks (PGD, FGSM, C&W) for CS 598 (Transfer Learning) at UIUC, testing transferability against ResNet-18, ResNet-50, and ViT models.",
    keyDecisions: [
      "Tested the same attacks across three architectures (two CNNs and a ViT) to see how well adversarial examples transferred across very different model families rather than assuming attacks generalize.",
    ],
    technologies: ["PGD", "FGSM", "C&W", "ResNet", "ViT", "Adversarial ML"],
    status: "SHIPPED",
    categories: ["Machine Learning"],
    githubHref: undefined, // TODO: add repo link
    demoHref: undefined,
    featured: false,
  },
];
