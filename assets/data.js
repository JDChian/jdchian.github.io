// =============================================================
//  網站所有內容都在這個檔案，改這裡就好
//  每個 project 的 id 會變成網址：project.html?id=<id>
//  image：放截圖路徑（例如 "images/smpl.png"），留空會顯示漸層色塊
// =============================================================

const PROFILE = {
  name: "Duen-Chian Jheng",
  title: "M.S. Student in Computer Science @ NTHU",
  intro:
    "I work on computer graphics, robot learning, and immersive systems — from multi-view 3D avatar texturing to reinforcement learning for cooperative robot transportation in NVIDIA Isaac Sim.",
  location: "New Taipei City, Taiwan",
  email: "lll29604@gmail.com",
  github: "https://github.com/JDChian",
  linkedin: "https://www.linkedin.com/in/duen-chian-jheng-2ab5b7346",
};

const PROJECTS = [
  {
    id: "humanoid-stairs",
    title: "Object Transportation on Stairs Using Humanoid Robots",
    short: "Hierarchical RL for two humanoid robots carrying objects up stairs together.",
    category: "Research",
    period: "Sep. 2026 – Present",
    context: "Master's Thesis · Industry–Academy Cooperation with Aurotek",
    tags: ["Python", "NVIDIA Isaac Sim", "Reinforcement Learning"],
    image: "",
    overview:
      "My master's thesis project, in cooperation with Aurotek. The goal is to let two humanoid robots cooperatively transport an object up a staircase.",
    highlights: [
      "Developing a hierarchical reinforcement learning framework for two-robot cooperative transportation.",
      "Supports both front–back and side-by-side carrying formations on stairs.",
      "Trained and evaluated in NVIDIA Isaac Sim.",
    ],
    links: [],
  },
  {
    id: "amr-corridor",
    title: "Object Transportation in Narrow Corridors Using AMRs",
    short: "RL-based cooperation for two AMRs moving a long object through narrow corridors.",
    category: "Research",
    period: "Jun. 2026 – Present",
    context: "Industry–Academy Cooperation with ITRI",
    tags: ["Python", "NVIDIA Isaac Sim", "Reinforcement Learning"],
    image: "",
    overview:
      "An industry–academy project with ITRI on cooperative transportation with autonomous mobile robots (AMRs).",
    highlights: [
      "Developing a reinforcement learning-based approach for two AMRs to cooperatively carry a long object.",
      "Handles navigation through narrow corridors and executing turns while holding the object.",
      "Simulated in NVIDIA Isaac Sim.",
    ],
    links: [],
  },
  {
    id: "smpl-texture",
    title: "SMPL Texture Generation from Uncalibrated Multi-View Images",
    short: "Multi-view texture pipeline that turns photos into realistic, animatable SMPL avatars.",
    category: "Research",
    period: "Feb. 2024 – Dec. 2024",
    context: "Undergraduate Research Project · Honorable Mention",
    tags: ["Python", "Computer Graphics", "3D Avatars"],
    image: "",
    overview:
      "An undergraduate research project (Honorable Mention) that generates UV textures for SMPL human meshes from uncalibrated multi-view images.",
    highlights: [
      "Built a multi-view texture generation pipeline using camera projection, visibility determination, and UV texture mapping.",
      "Designed a normal-based blending algorithm to merge textures across viewpoints.",
      "Reduced color discontinuities between views, producing realistic, animatable 3D avatars.",
    ],
    links: [],
  },
  {
    id: "injoy-ios",
    title: "inJOY — Native iOS App",
    short: "Ported inJOY from a PWA to a native Swift iOS app published on the App Store.",
    category: "Industry",
    period: "Sep. 2025 – Jan. 2026",
    context: "iOS Software Engineer · NeuinX",
    tags: ["Swift", "iOS"],
    image: "",
    overview:
      "As an iOS Software Engineer at NeuinX, I rebuilt the inJOY app as a native iOS application.",
    highlights: [
      "Ported inJOY from a Progressive Web App (PWA) to native iOS using Swift.",
      "Successfully published the app on the App Store.",
    ],
    links: [{ label: "App Store", url: "https://apps.apple.com/tw/app/injoy/id6746472193" }],
  },
  {
    id: "repsync",
    title: "RepSync: Real-Time Form Correction in Virtual Benchpress Training",
    short: "Real-time form correction and feedback for bench press training in VR.",
    category: "Publication",
    period: "IEEE VR 2026 (Poster) · Mar. 2026",
    context: "Sheng-Chi Hsu, Le-Ying Chen, Yi-Jie Du, Duen-Chian Jheng, et al.",
    tags: ["Virtual Reality", "Sports Training"],
    image: "",
    overview:
      "A virtual reality system that provides real-time form correction and feedback during bench press training. Presented as a poster at IEEE VR 2026.",
    highlights: [],
    links: [{ label: "DOI", url: "https://doi.org/10.1109/VRW70859.2026.00262" }],
  },
  {
    id: "atdt-table-tennis",
    title: "Fine-grained Stroke Recognition in Broadcast Table Tennis Videos with ATDT",
    short: "Fine-grained stroke recognition from broadcast table tennis footage.",
    category: "Publication",
    period: "ACM TOMM (Journal) · Nov. 2025",
    context: "Tang-Chen Chang, Duen-Chian Jheng, et al.",
    tags: ["Computer Vision", "Sports Analytics"],
    image: "",
    overview:
      "A journal paper in ACM Transactions on Multimedia Computing, Communications, and Applications (TOMM) on recognizing fine-grained table tennis strokes in broadcast videos using ATDT.",
    highlights: [],
    links: [{ label: "DOI", url: "https://doi.org/10.1145/3769299" }],
  },
  {
    id: "badminton-vr",
    title: "Badminton Footwork Practice via an Immersive VR System",
    short: "An immersive virtual reality system for practicing badminton footwork.",
    category: "Publication",
    period: "MMM 2025 (Demo Paper) · Jan. 2025",
    context: "Duen-Chian Jheng et al. (first author)",
    tags: ["Virtual Reality", "Unity", "Sports Training"],
    image: "",
    overview:
      "A first-author demo paper at MMM 2025 presenting an immersive virtual reality system for badminton footwork practice.",
    highlights: [],
    links: [{ label: "DOI", url: "https://doi.org/10.1007/978-981-96-2074-6_9" }],
  },
];

const EXPERIENCE = [
  {
    role: "iOS Software Engineer",
    org: "NeuinX",
    place: "Hsinchu, Taiwan",
    period: "Sep. 2025 – Jan. 2026",
    detail: "Ported inJOY from PWA to native iOS using Swift and published it on the App Store.",
  },
  {
    role: "Teaching Assistant",
    org: "National Tsing Hua University",
    place: "Hsinchu, Taiwan",
    period: "Sep. 2023 – Present",
    detail: "Assisted with coding and debugging in Introduction to Programming (I) and Robotic Navigation and Exploration.",
  },
];

const EDUCATION = [
  {
    school: "National Tsing Hua University",
    degree: "M.S. in Computer Science",
    period: "Sep. 2025 – Jun. 2027 (Expected)",
    detail: "Advisor: Prof. Min-Chun Hu · GPA 4.3 / 4.3",
  },
  {
    school: "National Tsing Hua University",
    degree: "B.S. in Computer Science",
    period: "Sep. 2021 – Jun. 2025",
    detail: "GPA 3.52 / 4.3",
  },
];

const SKILLS = {
  "Programming Languages": ["C", "C++", "Python", "JavaScript", "Swift"],
  Graphics: ["OpenGL", "GLSL"],
  "GPU & Parallel Computing": ["CUDA", "HIP", "OpenACC", "ROCm", "MPI", "Pthreads", "OpenMP"],
  Simulation: ["Unity", "NVIDIA Isaac Sim"],
  Languages: ["Mandarin (Native)", "English (GEPT High-Intermediate)", "Korean (Beginner)"],
};
