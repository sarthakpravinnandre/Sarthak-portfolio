# Sarthak Pravin Nandre — 3D Interactive Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Theme-Futuristic%203D%20%26%20Cyberpunk-00d4ff?style=for-the-badge&logoColor=black)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-R3F%20%26%20Drei-black?style=for-the-badge&logo=three.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Building Intelligent Systems. Turning Data into Insights.**

[Explore Live Demo](https://clarivo-chi.vercel.app/) • [Download Resume](/public/resume.pdf) • [Connect on LinkedIn](https://www.linkedin.com/in/sarthak-nandre/) • [Email Sarthak](mailto:sarthaknandre2004@gmail.com)

</div>

---

## 🌟 Executive Summary

Production-grade, futuristic 3D interactive portfolio website engineered for **Sarthak Pravin Nandre** — Computer Engineering graduate from Pune Vidyarthi Griha's College of Engineering and SSDIOM, Nashik (**CGPA: 8.9 / 10**), currently serving as **Quality Lead at Ethara AI**.

Designed with cinematic dark-mode glassmorphism (`#080810`), electric cyan (`#00d4ff`), and deep violet (`#7c3aed`) atmospheric lighting, backed by real-time Three.js / React Three Fiber interactive 3D simulations.

---

## 🚀 Key Features & Architectural Highlights

### 1. 🌌 Real-Time 3D Hero Centerpiece
- **Neural Geometric Constellation**: Interactive 3D scene built with `@react-three/fiber` and Three.js featuring responsive mouse parallax, rotating orbital rings, floating data shards, an octahedral AI core, and an ambient particle field.
- **Resilient WebGL Fallbacks**: Wrapped in React `ErrorBoundary` with smooth reduced-motion support.

### 2. 📊 Flagship Engineering Projects (With Direct Live Access)
- **[Clarivo — AI-Based Data Analyzer, Visualizer & Cleaning Tool](https://clarivo-chi.vercel.app/)**:
  - Ingests raw sensor & business datasets, automates exploratory data analysis, and profiles missing records.
  - Features an **Interactive Data Pipeline Engine** demo on-page for real-time NaN imputation, Z-Score outlier capping, and duplicate elimination.
  - *Stack*: Python, Pandas, NumPy, FastAPI, Matplotlib, React.js.
- **AI-Based Generative Architectural Design (GANs & Parametric CAD)**:
  - Deep learning floor-plan synthesis bridging AI spatial generation into CAD geometries.
  - Features an embedded **Interactive 3D Building Viewer** allowing visitors to rotate models, inspect CAD wireframes, separate floor levels, and view 2D-to-3D extrusions.
  - Published research in the *International Journal of Advanced Research in Science, Communication and Technology (IJARSCT)*.
- **[Crop Doctor — Crop Disease Detection System](https://shamba-smart-scan.vercel.app/)**:
  - Real-time computer vision inference pipeline leveraging fine-tuned YOLO for agricultural crop leaf pathogen identification.
  - Interactive on-page scanner simulation displaying bounding boxes, disease diagnoses (*Early Blight*, *Bacterial Spot*, *Common Rust*), and treatment recommendations.
  - *Stack*: Python, YOLO, Computer Vision, OpenCV, NumPy.

### 3. 🏆 Documented Hackathon Records & Stage Honors
- **Smart India Hackathon (SIH 2025) Software Edition**:
  - *Grand Finale National Finalist* under the Ministry of Education's Innovation Cell at St. Joseph’s College of Engineering / Jeppiaar Nodal Center, Chennai.
  - Full-resolution on-stage award photo gallery & 36-hour hack arena documentation.
- **PVG's HackHub 2025 (National Level 24hrs Hackathon)**:
  - *Cash Prize Winner (₹11,000)* with Team Innovators at PVG COET & SSDIOM, Nashik.
  - Stage cheque ceremony & team celebration documentation.
- **NASA Space Apps Challenge 2024**: International Finalist engaging across global open-science challenges.
- **7+ Hackathon Finals**: Track record in rapid sprint prototyping, system pitching, and jury evaluation.

### 4. 📄 Published Academic Research & Verified Certification
- **Research Paper**: *"Generative Architectural Design: A Deep Learning Approach for Automated Space and Infrastructure Planning"*
  - Published in: *IJARSCT*, Volume 4, Issue 1, December 2024
  - ISSN: `2581-9429` | DOI: `10.48175/IJARSCT-22661`
  - Integrated One-Click **"View Research Paper"** button linking to the actual 11-page publication PDF.
  - Integrated One-Click **"View Certificate"** button linking to the official Certificate of Publication.

### 5. ⚡ Recruiter Executive Mode
- Accessible via the **"Recruiter View"** button in the top navigation.
- Delivers a 60-second glance of core metrics, target roles (*AI Engineer, Software Engineer, Data Engineer*), production stack, and one-click direct PDF resume download.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18, TypeScript, Vite |
| **3D Graphics & Canvas** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Styling & Effects** | Tailwind CSS, CSS Grid, Glassmorphism, Custom Glow Filters |
| **Animations & State** | Framer Motion, IntersectionObserver Hooks |
| **Icons & Media** | Lucide React, Custom SVG Monograms |
| **Backend & ML Stack** | Python, FastAPI, Pandas, NumPy, TensorFlow, YOLO, DAX, Power BI |

---

## 📁 Repository Structure

```
├── public/
│   ├── docs/
│   │   ├── research-paper.pdf         # Published IJARSCT Research Paper (11 Pages)
│   │   └── research-certificate.pdf   # Official IJARSCT Certificate of Publication
│   ├── images/
│   │   ├── profile.jpg                # Portrait of Sarthak Pravin Nandre
│   │   ├── sih-award.jpg              # SIH 2025 Grand Finale stage award
│   │   ├── hackathon-work.jpg         # Continuous 36-hr hack arena session
│   │   ├── sih-venue.jpg              # SIH Chennai Nodal Center venue
│   │   ├── pvg-hackhub-stage.jpg      # PVG HackHub 2025 stage prize ceremony
│   │   └── pvg-hackhub-team.jpg       # Team Innovators trophy & cheque celebration
│   ├── favicon.svg                    # Cyberpunk glowing 'S' favicon
│   └── resume.pdf                     # Formal downloadable PDF resume
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroCanvas.tsx         # Full-viewport R3F Canvas
│   │   │   ├── NodeNetwork.tsx        # Dynamic 3D neural nodes & AI core
│   │   │   ├── AboutOrb.tsx           # Interactive 3D gyroscope widget
│   │   │   └── ArchitecturalViewer.tsx # 3D Building model with CAD wireframe & floor separation
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx        # High-impact headline, CTAs, and socials
│   │   │   ├── AboutSection.tsx       # Editorial profile, CGPA 8.9, Ethara AI QA
│   │   │   ├── ExperienceSection.tsx  # Vertical timeline with expandable role cards
│   │   │   ├── ProjectsSection.tsx    # 3D tilt cards, Live Demo links, and case studies
│   │   │   ├── SkillsSection.tsx      # Categorized capabilities without synthetic rating bars
│   │   │   ├── AchievementsSection.tsx# Dedicated SIH, PVG HackHub, and Research Paper cards
│   │   │   ├── EducationSection.tsx   # PVG COET & SSDIOM, Nashik (CGPA 8.9 / 10)
│   │   │   ├── BlogSection.tsx        # Technical notes on AI QA & Data Engineering
│   │   │   └── ContactSection.tsx     # Client-validated contact form
│   │   └── ui/
│   │       ├── Navbar.tsx             # Active tracker, mobile menu & Recruiter Modal
│   │       ├── RecruiterModal.tsx     # 60-second executive summary for recruiters
│   │       ├── DataPipelineDemo.tsx   # Interactive data cleaning & outlier engine
│   │       ├── CropVisionDemo.tsx     # Interactive YOLO disease bounding box scanner
│   │       ├── ErrorBoundary.tsx      # Graceful WebGL / runtime crash barrier
│   │       └── Footer.tsx             # Brand signature and back-to-top control
│   ├── data/
│   │   └── portfolio.ts               # Single source of truth for text, stats, and links
│   ├── hooks/
│   │   └── useInView.ts               # Optimized viewport intersection detection
│   ├── App.tsx                        # Master layout controller
│   ├── index.css                      # Tailwind base & custom cyber utilities
│   └── main.tsx                       # React root entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18+ or v20+)
- npm or pnpm / yarn

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/sarthak-nandre/portfolio.git
cd portfolio

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start the local development server
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### Production Build
```bash
# Build production bundle with TypeScript verification
npm run build

# Preview production build locally
npm run preview
```

---

## 🚢 One-Click Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the `dist/` directory into Netlify, or link repository
```

---

## 📬 Contact & Connect

- **Engineer**: Sarthak Pravin Nandre
- **Current Position**: Quality Lead @ Ethara AI
- **Education**: B.E. Computer Engineering, PVG's COET & SSDIOM, Nashik (CGPA: 8.9)
- **Email**: [sarthaknandre2004@gmail.com](mailto:sarthaknandre2004@gmail.com)
- **LinkedIn**: [linkedin.com/in/sarthak-nandre](https://www.linkedin.com/in/sarthak-nandre/)
- **GitHub**: [github.com/sarthak-nandre](https://github.com/sarthak-nandre)

---

<div align="center">
  <sub>© 2026 Sarthak Pravin Nandre. Engineered with React, Three.js, and Tailwind CSS.</sub>
</div>
