export const projects = [
    {
    name: "Agentic AMD Hardware Debugger",
    description: [
    "LLM-powered full-stack agentic web app that automatically debugs hardware test failures.",
    "Agent loop that autonomously runs debug tools on downloaded files, iterating until it declares a root cause or reaches its token/loop limit.",
    "Adopted by 250+ AMD engineers across multiple teams worldwide.",
    ],
    skills: ["Python", "TypeScript", "FastAPI", "React", "PostgreSQL", "Claude", "Azure", "Redis", "TailwindCSS"],
    github: undefined,
    },
  {
    name: "Live Video Feed Emotion Detector",
    description: [
    "Real-time webcam emotion detection with a Streamlit GUI, mapping expressions to a representative emoji.",
    "Custom CUDA (CuPy) CNN trained to classify faces as positive, neutral, or negative.",
    ],
    skills: ["Python", "CUDA", "Jupyter", "NumPy", "Streamlit"],
    github: "https://github.com/gkuchar/expression-detection-cv",
  },
  {
  name: "ML Pediatric Decompensation Predictor",
  description: [
    "Research ML model predicting pediatric decompensation early in collaboration with Children's Health Dallas and TCU Nursing.",
    "Trained on 15,000+ patients using vitals, PEWS scores, labs, sepsis indicators, and clinical notes across 8 evaluated classifier models.",
  ],
  skills: ["Python", "scikit-learn", "Jupyter", "pandas", "NumPy", "matplotlib"],
},
{
  name: "Extreme Tank Video Game",
  description: [
    "2D action game in Java/JavaFX built around clean OOP architecture and four core design patterns (Factory, Strategy, Singleton, Observer).",
    "Real-time game loop with AI-driven enemies, collision detection, and event-driven HUD updates.",
  ],
  skills: ["Java", "OOP", "JavaFX", "Design Patterns", "Traditional AI"],
  github: "https://github.com/gkuchar/extreme-tank-game",
},
{
  name: "Big Tech Stock Classifier",
  description: [
    "ML pipeline predicting the best-performing of 8 major tech stocks each trading day, framed as an 8-class problem over 6 years of OHLCV data.",
    "XGBoost achieved a ~52% lift over random using leakage-free expanding-window validation and 120 engineered features (RSI, MACD, Bollinger Bands).",
  ],
  skills: ["Python", "scikit-learn", "pandas", "Jupyter", "matplotlib", "yfinance"],
  github: "https://github.com/gkuchar/big-tech-stock-classifier",
},
{
  name: "TCU Sports Broadcasting Event Scheduler",
  description: [
    "Full-stack web app automating crew scheduling for TCU Sports Broadcasting, replacing manual availability tracking and scattered communication.",
    "Vue.js frontend and Spring Boot (Java) backend supporting scheduling, crew-list generation, and reporting for athletic events.",
  ],
  skills: ["Java", "JavaScript", "Spring Boot", "Vue.js", "Docker", "Azure"],
  github: "https://github.com/gkuchar/FrogCrew-Event-Scheduler",
},
{
  name: "GPU Image Processing Library",
  description: [
    "C++/CUDA library of 8 GPU-accelerated image filters (convolution edge detection, blur, color transforms) with 2D thread/block pixel-parallel kernels.",
    "Benchmarked H2D/kernel/D2H timing via CUDA events and validated GPU output against CPU references, pixel-for-pixel, on an NVIDIA A100.",
  ],
  skills: ["CUDA", "C++", "GPU Programming", "Parallel Computing"],
  github: "https://github.com/gkuchar/imgcuda",
},
{
  name: "Agentic Learning Claude Skills",
  description: [
    "A suite of custom Claude agent skills for technical learning, including an interactive quiz generator, a LeetCode tutor, and a Socratic tutor, built on Anthropic's Skills framework.",
    "Engineered around Socratic grading loops and interactive widgets that coach reasoning instead of handing over answers.",
  ],
  skills: ["Claude", "LLMs", "Agent Design"],
  github: "https://github.com/gkuchar/agent-skills",
},
{
  name: "Modern Unix Shell",
  description: [
    "A functional Unix shell in C++ implementing command execution, I/O redirection, and parallel processing from scratch via raw POSIX system calls.",
    "Built on the fork-exec model with custom tokenization, path resolution, and file-descriptor management; verified leak-free with valgrind.",
  ],
  skills: ["C++", "Operating Systems", "POSIX", "Systems Programming", "Linux"],
  github: "https://github.com/gkuchar/modern-unix-shell"
},
];