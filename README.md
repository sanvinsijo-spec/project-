# AuraStyle — AI Face Shape & Hairstyle Advisor

> **Haute Coiffure & Biometric Precision Architecture for Upscale Salons & Grooming Studios**  
> Built with React 19, TypeScript, Vite, and Modern Minimalist Luxury Aesthetics (Deep Slate, Dark Charcoal, Warm Sand & Golden Ratio Geometry).

---

## ✨ Overview

**AuraStyle** is a modern, responsive web application designed for luxury salons and executive grooming ateliers. It analyzes client facial geometry in real-time, detecting facial thirds, cheekbone apex lines, forehead breadth, and jawline angles to recommend proportion-balanced hairstyles.

### Key Highlights
- **Interactive Biometric Landmark Overlay**: Real-time SVG landmark mesh mapping facial symmetry, forehead width, cheekbone prominence, and jaw contours with an animated laser scanner.
- **6 Core Face Shapes Analyzed**: Tailored morphological blueprints for **Oval**, **Square**, **Round**, **Diamond**, **Heart**, and **Oblong** facial structures.
- **Dynamic Compatibility Scoring**: Live percentage match ratings (e.g., `98% Best Match`) and facial balance rationale (*"Why It Works"*) for every cut.
- **Morphology Breakdown & Styling "Don'ts"**: Visual guide to flattering lengths, volumizing textures, and specific cuts to avoid (e.g., harsh blunt bobs on square jaws).
- **Side-by-Side Lookbook Modal**: Front and 3/4 profile angle comparisons, maintenance meters, daily styling times, and recommended grooming products.
- **Salon Consultation Docket Drawer**: Slide-out docket for client face shape records, reference cut notes, appointment time slot picker, and Indian Rupee (**₹ INR**) pricing.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visual FX**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography**: Google Fonts (*Cormorant Garamond*, *Outfit*, *Plus Jakarta Sans*)
- **Styling**: Modern Vanilla CSS Design System with glassmorphism, responsive grid architecture, and custom micro-animations

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sanvinsijo-spec/project-.git
   cd project-
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173/` (or your configured port).

### Building for Production
```bash
npm run build
npm run preview
```

---

## 📐 Facial Morphology & Proportion Matrix

| Face Shape | Key Geometry & Proportions | Aesthetic Objective | Recommended Cuts | Styles to Avoid |
| :--- | :--- | :--- | :--- | :--- |
| **Oval** | Length ~1.5x width, soft contours | Preserve architectural harmony | French Bob, Textured Quiff, Butterfly Cut, Tapered Side Part | Heavy flat horizontal bangs |
| **Square** | Equal width at temples and jaw, 90° corners | Soften angular corners, add crown height | Modern Wolf Shag, Layered Curtain Bangs, Spiral Curl Shag | Chin-length sharp blunt bobs |
| **Round** | Equal length & width, circular jawline | Visually elongate face, add vertical crown height | Textured Crop with Mid Fade, Brush-Up Quiff, Long Layers | Rounded bubble bobs with wide sides |
| **Diamond** | Widest at high cheekbones, narrow temples/chin | Add width at forehead & jaw, celebrate cheekbones | Feathered Butterfly Cut, Layered Curtain Bangs, Chin Shag | Slick backs with bare temples |
| **Heart** | Broad forehead tapering to pointed chin | Balance upper third by adding volume at jaw | Chic Parisian French Bob, Layered Waves, Classic Side Part | Sky-high pompadours without width |
| **Oblong** | Vertical length exceeds width significantly | Shorten vertical length, build side body | Spiral Curl Shag, French Bob with Fringe, Horizontal Waves | Extreme high top fades & sky-quiffs |

---

## 📁 Project Architecture

```
aurastyle-ai/
├── public/                 # Static assets & SVG icons
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                   # Sticky luxury header & docket trigger
│   │   ├── FaceShapeDetector.tsx        # Interactive SVG landmark mesh & photo dropzone
│   │   ├── StyleAnalysisPanel.tsx       # Morphology breakdown & styling don'ts
│   │   ├── HairstyleCatalog.tsx         # Filterable haircut grid & match score badges
│   │   ├── StyleComparisonModal.tsx     # Side-by-side face vs. cut lookbook modal
│   │   └── ConsultationDocketDrawer.tsx # Slide-out consultation booking & INR docket
│   ├── data/
│   │   └── styleAdvisorData.ts          # Biometric database, sample portraits & haircuts
│   ├── types/
│   │   └── index.ts                     # TypeScript definitions & data models
│   ├── App.tsx                          # Root application container & state orchestration
│   ├── index.css                        # Design system tokens, variables & animations
│   └── main.tsx                         # React 19 application entry point
├── index.html                           # HTML template with Google Fonts & favicon
├── package.json                         # Project dependencies & scripts
├── tsconfig.json                        # TypeScript configuration
└── vite.config.ts                       # Vite configuration
```

---

## 💎 Pricing & Atelier Services

All services in AuraStyle are configured with **Indian Rupee (₹ INR)** pricing and include studio amenities, scalp treatments, and complimentary biometric facial consultations:
- **Textured Barber Cuts & Fades**: ₹1,499 – ₹1,699
- **Parisian & Artisan Dimensional Cuts**: ₹2,499 – ₹2,899
- **Bespoke Volumizing & Curl Architecture**: ₹3,200 – ₹3,499
- **AI Biometric Face Consultation**: Complimentary with Atelier Cut

---

## 📄 License
This project is licensed under the MIT License.
