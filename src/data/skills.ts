// Skills grouped honestly by maturity. No percentage ratings —
// grouping communicates depth instead.

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Professional experience",
    description: "Used regularly in production or shipped work.",
    skills: [
      "C/C++",
      "Python",
      "Concurrency & Multithreading",
      "Performance Optimization",
      "CI/CD (Jenkins)",
      "Debugging & Reliability",
      "Hardware–Software Integration",
    ],
  },
  {
    title: "Systems & project experience",
    description: "Applied hands-on in real projects, professional or academic.",
    skills: [
      "Linux",
      "Distributed Systems",
      "CUDA / GPU Computing",
      "NLP (Hugging Face Transformers, T5)",
      "Adversarial ML",
      "Docker",
      "CMake",
      "REST APIs",
      "SQL, MongoDB, DynamoDB, Neo4j",
      "AWS (EC2, S3, Lambda)",
      "React.js / Node.js / TypeScript",
    ],
  },
  {
    title: "Currently exploring",
    description: "Actively learning — not claiming expertise here yet.",
    skills: ["Model Serving", "Inference Optimization", "MLOps", "Kubernetes", "ML Observability"],
  },
];
