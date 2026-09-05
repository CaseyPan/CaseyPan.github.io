// "Currently exploring" section — keep this fresh as your learning focus
// shifts. Edit freely; it's meant to change over time.

export const exploration = {
  intro:
    "I'm learning how machine-learning systems move from experimentation to reliable production — from containerized model serving and observability to scaling, batching, and inference performance.",
  currentFocus: "Model serving fundamentals: batching, latency, and throughput trade-offs",
  currentlyBuilding:
    "Planning to extend my CUDA/CNN inference work into a small benchmarking harness for served-model latency and throughput", // TODO: update as this moves from planned to in-progress
  nextLearningGoal: "Deploying a served model on Kubernetes with basic observability in place",
} as const;
