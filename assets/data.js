// =============================================================
//  網站所有內容都在這個檔案，改這裡就好
//  每個 project 的 id 會變成網址：project.html?id=<id>
//  image：放截圖路徑（例如 "images/smpl.png"），留空會顯示漸層色塊
//  sections（選填）：詳細頁的段落，每段可有 title / subtitle / body / media
//    body 的每一項是一個段落，可以用 <b>、<code> 等簡單 HTML
//    media 的 src 是 .mp4 會自動播放影片（同名 .poster.jpg 當預覽圖），其他當圖片
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
    id: "humanpro",
    title: "HumanPro: An Integrated System for 3D Human Reconstruction",
    short:
      "Reconstructs people as point clouds or animatable SMPL-X avatars with strand-based hair. I built Texturify, the multi-view texture pipeline.",
    category: "Research",
    period: "Feb. 2024 – Dec. 2024",
    context: "Undergraduate Research Project · Honorable Mention",
    team: "李品萱, 鄭敦謙 (Duen-Chian Jheng), 蔡承翰",
    tags: ["Python", "SMPL-X", "Computer Graphics", "Azure Kinect", "Unity", "Blender"],
    image: "images/humanpro/cover.jpg",
    overview:
      "HumanPro reconstructs real people as 3D characters for immersive applications. It supports three representations: colored point clouds for realistic detail, SMPL-X meshes with texture maps that game engines can animate, and strand-based hair models with realistic physics.",
    // 「My Contribution」區塊
    highlights: [
      "Built Texturify, the pipeline that turns a phone video of a person in T-pose into a complete SMPL-X texture map.",
      "Fitted SMPL-X to each frame with SMPLify-X, projected the mesh onto the image, resolved visibility with the painter's algorithm, and sampled colors through UV texture mapping.",
      "Designed a normal-based blending algorithm to merge textures from multiple viewpoints, which reduced color seams between views.",
      "Filled holes in the texture map with BFS-based inpainting and refined skin regions toward an average skin color for consistent lighting.",
    ],
    sections: [
      {
        title: "Motivation",
        body: [
          "3D human reconstruction is a core problem in both computer vision and computer graphics. Imagine recreating a boxing match in VR that viewers can watch from a first- or third-person view. Athletes rendered with generic models look artificial, while avatars built from their real appearance make the experience much more immersive.",
        ],
        media: [
          { src: "images/humanpro/s02_background_vr_boxing.jpg", caption: "Example application: a boxing match recreated in VR" },
          { src: "images/humanpro/s03_three_representations.jpg", caption: "Three representations: 3D point cloud, SMPL-X mesh with texture map, and strand-based hair" },
        ],
      },
      {
        title: "System Overview",
        body: [
          "HumanPro offers two modeling pipelines for different scenarios. <b>Method I (Studio Photography)</b> captures a person with 8 calibrated RGB-D cameras and reconstructs a colored point cloud. <b>Method II (Lightweight Modeling)</b> needs only a phone video of the user in T-pose turning in place. Texturify generates the SMPL-X texture map and HairStep generates the hair model, so every user can quickly get a personalized avatar.",
        ],
        media: [{ src: "images/humanpro/s04_system_overview.jpg", caption: "HumanPro pipeline: Studio Photography (left) and Lightweight Modeling (right)" }],
      },
      {
        title: "Method I · Studio Photography",
        subtitle: "Camera Calibration",
        body: [
          "The studio uses 8 Azure Kinect cameras arranged in a circle. An ArUco cube placed at the center defines the world origin, and each camera estimates its extrinsic parameters by detecting the cube in its RGB image.",
          "Errors in building the cube and detecting it make these initial extrinsics imprecise. To refine them, adjacent camera pairs capture a chessboard, collect depth at the corner points, and align the two point sets with ICP. This produces much more accurate extrinsics.",
        ],
        media: [
          { src: "images/humanpro/s16_studio_hardware_setup.jpg", caption: "Hardware setup: 8 Azure Kinect cameras" },
          { src: "images/humanpro/s06_calibration_pipeline.jpg", caption: "Calibration: ArUco cube for initial camera poses, then chessboard + ICP refinement" },
        ],
      },
      {
        subtitle: "Chessboard ICP",
        media: [
          { src: "images/humanpro/s17_chessboard_photo.jpg", caption: "Chessboard capture" },
          { src: "images/humanpro/s17_icp_initial_extrinsic.jpg", caption: "Initial extrinsic result" },
          { src: "images/humanpro/s17_icp_align_point0.jpg", caption: "Align point 0" },
          { src: "images/humanpro/s17_icp_result.jpg", caption: "ICP result" },
        ],
      },
      {
        subtitle: "Reconstruction Results",
        body: [
          "With calibrated extrinsics and known intrinsics, color and depth from all cameras are fused into a colored point cloud. Second-pass ICP calibration clearly fixes the misalignment between views.",
        ],
        media: [
          { src: "images/humanpro/s07_pointcloud_multiview.jpg", caption: "Colored point cloud rendered from three viewpoints, next to the color image" },
          { src: "images/humanpro/s08_icp_before_after.jpg", caption: "Before vs. after ICP refinement" },
        ],
      },
      {
        title: "Method II · Lightweight Modeling",
        body: [
          "The lightweight pipeline has two parts: <b>Texturify</b> builds the body texture, and the <b>Hair Editing System</b> builds an editable hair model.",
        ],
      },
      {
        subtitle: "Texturify: Single-View Texture Extraction",
        mine: true,
        body: [
          "Starting from frames of a T-pose video, SMPLify-X estimates the SMPL-X vertex positions and camera extrinsics so the body model fits the person in the photo. The fitted mesh is projected onto the image, the painter's algorithm keeps only frontal surfaces, and texture mapping samples the person's colors into UV space.",
        ],
        media: [
          { src: "images/humanpro/s10_input_tpose_front.jpg", caption: "Input frame" },
          { src: "images/humanpro/s10_smplifyx_fitting.mp4", caption: "SMPLify-X fitting" },
          { src: "images/humanpro/s10_texture_mapping_projection.jpg", caption: "Projection and texture mapping into UV space" },
        ],
      },
      {
        subtitle: "Texturify: Multi-View Normal-Based Blending",
        mine: true,
        body: [
          "A single view covers only part of the body, so Texturify repeats the extraction for frames from multiple viewpoints and merges them. Each face is weighted by <code>max(cos(N · V), 0)</code>, where N is the face normal and V is the camera's view direction. Pixels that face the camera directly therefore get the most weight.",
          "After blending, holes left in the texture map are filled with a BFS-based inpainting step. Skin regions often look different under different lighting, so they are segmented and blended with the average skin color. The result is a complete, high-fidelity texture map.",
        ],
        media: [
          { src: "images/humanpro/s18_normal_blending_formula.jpg", caption: "Normal-based blending: per-view textures weighted by normalized normal maps" },
          { src: "images/humanpro/s19_inpainting_skin_refine.jpg", caption: "Inpainting → skin color refining" },
          { src: "images/humanpro/s20_average_blending.jpg", caption: "Average blending" },
          { src: "images/humanpro/s20_normal_based_blending.jpg", caption: "Normal-based blending (sharper, fewer seams)" },
        ],
      },
      {
        subtitle: "Hair Editing System",
        body: [
          "Hair is generated with HairStep (CVPR 2023), a deep-learning model that predicts strand-based 3D hair from a single image. The output strands are converted into a hair particle system that Unity and Blender can use directly. A custom UI lets users change hair color and cut the hair to the length they want.",
        ],
        media: [
          { src: "images/humanpro/s12_hair_editing_ui.mp4", caption: "Hair editing UI: color selection" },
          { src: "images/humanpro/s12_hair_cutting.mp4", caption: "Hair cutting" },
          { src: "images/humanpro/s23_hair_particles_unity.jpg", caption: "Hair particle system in Unity" },
          { src: "images/humanpro/s23_hair_particles_blender.jpg", caption: "Hair particle system in Blender" },
        ],
      },
      {
        title: "Results",
        body: [
          "The final avatars combine the SMPL-X mesh, the Texturify texture map and the hair model, animated with a dance sequence in Unity. The hair moves with realistic physics, which makes the characters look more lively.",
        ],
        media: [
          { src: "images/humanpro/s13_result_dance_male.mp4", caption: "Demo 1 in Unity" },
          { src: "images/humanpro/s13_result_dance_female.mp4", caption: "Demo 2 in Unity" },
        ],
      },
      {
        subtitle: "Demo Case 1",
        media: [
          { src: "images/humanpro/s10_input_tpose_front.jpg", caption: "Input (front)" },
          { src: "images/humanpro/s21_demo1_input_back.jpg", caption: "Input (back)" },
          { src: "images/humanpro/s21_demo1_texture_map.jpg", caption: "Generated texture map" },
          { src: "images/humanpro/s21_demo1_model_front.jpg", caption: "Textured model (front)" },
          { src: "images/humanpro/s21_demo1_model_back.jpg", caption: "Textured model (back)" },
        ],
      },
      {
        subtitle: "Demo Case 2",
        media: [
          { src: "images/humanpro/s22_demo2_input_front.jpg", caption: "Input (front)" },
          { src: "images/humanpro/s22_demo2_input_back.jpg", caption: "Input (back)" },
          { src: "images/humanpro/s22_demo2_texture_map.jpg", caption: "Generated texture map" },
          { src: "images/humanpro/s22_demo2_model_front.jpg", caption: "Textured model (front)" },
          { src: "images/humanpro/s22_demo2_model_back.jpg", caption: "Textured model (back)" },
        ],
      },
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
