export const profile = {
  name: "M. Muralidharan",
  shortName: "M.M",
  tagline: "Open to full-time roles · Chennai, India",
  role:
    "I build systems that see, decide, and act — from multi-object tracking research published at IEEE CVMI, to reinforcement-learning pipelines and the full-stack apps that put them in front of people.",
  meta: ["B.Tech CSE · VIT Chennai · 2026", "github.com/Murali1316", "muralimohan1316@gmail.com"],
  email: "muralimohan1316@gmail.com",
  phone: "+91 89253 66609",
  phoneHref: "tel:+918925366609",
  github: "https://github.com/Murali1316",
  resumeHref: "/Muralidharan_Resume_Sept_2026.pdf",
  location: "Chennai, Tamil Nadu, India",
};

export const stats = [
  { value: "80%", label: "MOTA · ByteTrack, KITTI" },
  { value: "32.5", label: "FPS at best accuracy" },
  { value: "−31%", label: "Carbon cut, MARL supply chain" },
  { value: "40k+", label: "ECG records processed" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const about = `I'm a Computer Science Engineering graduate from VIT Chennai, working across the stack — React and FastAPI on the outside, computer vision and reinforcement learning underneath. I like projects where a model's output has to survive contact with a dashboard, an API, and a real user, not just a notebook. Alongside coursework, I was lead author on a comparative study of multi-object tracking algorithms, presented at IEEE CVMI 2025, and spent a summer at Ramco Cements building ML-backed sales dashboards used by the business team.`;

export const research = {
  venue: "IEEE CVMI 2025",
  role: "Lead Author",
  date: "Oct 12–13, 2025",
  title:
    "Comparative Study of Object Tracking Algorithms for Urban Intersection Risk Analysis",
  abstract:
    "A benchmark of four multi-object trackers — CSRT, FairMOT, DeepSORT, and ByteTrack — run through one shared YOLOv8 detection pipeline, so every tracker is compared on equal footing rather than against mismatched setups. Tested across MOT17, KITTI, and Cityscapes footage and scored on tracking accuracy, identity switches, and frame rate, with the results read specifically through the lens of intersection safety monitoring rather than generic benchmarking.",
  findings: [
    "ByteTrack gave the strongest accuracy-to-speed trade-off, making it the best fit for real-time deployment.",
    "FairMOT stayed most stable when pedestrian density was high, preserving identities through occlusion.",
    "CSRT remained dependable only in lighter scenes — its single-object design couldn't scale to busy intersections.",
  ],
  doi: "10.1109/CVMI66673.2025.11337862",
  doiHref: "https://ieeexplore.ieee.org/document/11337862",
};

export const projects = [
  {
    title: "Object Tracking for Urban Intersection Risk Analysis",
    stack: "Python · PyTorch · OpenCV · YOLOv8 · CSRT · DeepSORT · FairMOT · ByteTrack",
    points: [
      "Built a modular YOLOv8-based detection pipeline so all four trackers could be compared fairly on identical input.",
      "Benchmarked trackers across MOT17, KITTI, and Cityscapes using MOTA, MOTP, ID switches, and FPS.",
      "Ran qualitative failure-case and confusion-matrix analysis to turn raw metrics into deployment guidance.",
      "Published and presented the work as lead author at IEEE CVMI 2025.",
    ],
  },
  {
    title: "MARL Supply Chain Optimization",
    stack: "Python · Reinforcement Learning · FastAPI · Streamlit · Constrained MDP · Graph Attention Networks",
    points: [
      "Modeled a 12-node South Indian logistics network with MAPPO agents plus Graph Attention Networks, learning policy under disruption scenarios.",
      "Cut carbon emissions by 31% while holding service levels steady, using constrained reward shaping.",
      "Shipped a FastAPI backend with a Streamlit dashboard for real-time policy visualization and comparison.",
    ],
  },
  {
    title: "Sales Prophet — AI Sales Forecasting System",
    stack: "Python · Flask · Facebook Prophet · MySQL · MongoDB · REST API",
    points: [
      "Built a full-stack forecasting app with a Flask backend and Facebook Prophet for time-series sales prediction.",
      "Split storage across MySQL for transactional data and MongoDB for forecast outputs — a real polyglot-persistence setup.",
      "Exposed forecasts through REST APIs and visualized trends on a connected dashboard.",
    ],
  },
];

export const experience = [
  {
    company: "The Ramco Cements Limited",
    dates: "Jun 2025 – Jul 2025",
    role: "IT Intern · On-site, Chennai",
    points: [
      "Built a full-stack application integrating ML-based sales prediction with a web frontend and database backend.",
      "Deployed interactive Power BI dashboards tracking sales volume, regional revenue, and customer demand KPIs against live data.",
      "Designed a Tableau logistics dashboard from real-time Excel data, covering dispatch frequency and delivery timelines.",
      "Worked with cross-functional stakeholders to gather requirements and present data-driven recommendations to management.",
    ],
  },
];

export const skillGroups: { category: string; items: string[]; accent?: "ml" }[] = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "Streamlit"],
  },
  { category: "Backend", items: ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs"] },
  { category: "Mobile", items: ["Android (Java)"] },
  { category: "Databases", items: ["MySQL", "MongoDB"] },
  { category: "Cloud & Tools", items: ["AWS", "Firebase", "Git", "GitHub"] },
  {
    category: "ML / AI",
    items: ["Python", "Reinforcement Learning", "Qiskit", "Facebook Prophet", "HDF5", "PCA", "Random Forest", "SVM"],
    accent: "ml",
  },
  { category: "Data Viz", items: ["Power BI", "Tableau"] },
  { category: "Languages", items: ["Python", "Java", "JavaScript", "C++"] },
];

export const education = {
  degree: "B.Tech — Computer Science Engineering",
  school: "Vellore Institute of Technology, Chennai · 2022 – 2026 (Graduated) · CGPA 7.71",
  languages: "Languages: English · Tamil · Telugu",
};
