# SriLin Electronics — Classic Revamp Platform

Next-generation Aerospace & Defense EMS portal with JLCPCB-style high-velocity instant quoting, multi-layer stackup inspection, and interactive PCB visualizer.

---

## Technical Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS 3.4 + PostCSS + Autoprefixer
- **Icons**: Lucide React
- **Animation**: Canvas Confetti

---

## Directory Structure

```
srilin-classic-revamp/
├── public/                 # Static assets, diagrams, images, and brand marks
├── src/
│   ├── components/         # Modular UI components (Navbar, Hero, Configurator, etc.)
│   ├── App.jsx             # Main application layout and view composition
│   ├── index.css           # Global typography, color tokens, and custom scrollbars
│   └── main.jsx            # React root mount entry point
├── index.html              # HTML shell
├── package.json            # Project dependencies & scripts
├── tailwind.config.js      # Tailwind theme configuration
└── vite.config.js          # Vite build & development server config
```

---

## Getting Started

### 1. Installation

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

Runs the local development server with Hot Module Replacement (HMR).

### 3. Production Build

```bash
npm run build
```

Compiles optimized production assets to `dist/`.

### 4. Preview Production Build

```bash
npm run preview
```

Serves the production build locally (default port 4173).
