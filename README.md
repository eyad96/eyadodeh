# Eyad Odeh | Premium Frontend Engineer Portfolio

A state-of-the-art, highly immersive personal portfolio designed to showcase modern web engineering, fluid micro-interactions, and premium frontend case studies. Inspired by high-end developer aesthetics and minimalist dark-mode interfaces.

## 🚀 Live Showcase

Explore the live portfolio and interactive projects showcase:
- **Official Portfolio**: [eyad96.github.io/eyad-portfolio](https://eyad96.github.io/eyad-portfolio/)

---

## 📂 Detailed Project Case Studies

### 1. Al-Hewwari Salon Booking 📅
*An elegant, interactive appointment scheduling application built with React and TypeScript for modern barber salons.*
- **Live Demo**: [alhewwari-salon.vercel.app](https://alhewwari-salon.vercel.app/)
- **Repository**: [github.com/eyad96/alhewwari-salon](https://github.com/eyad96/alhewwari-salon)
- **Tech Stack**: React, TypeScript, Tailwind CSS, Framer Motion, `date-fns`
- **Core Features**:
  - Fluid interactive calendar dashboard for date & slot selections.
  - Dynamic service list with real-time total price calculators.
  - Responsive profile registration and contact detailing panels.
  - Rich state-managed active slot availability checking loops.
- **Strategic Challenge**: Ensuring consistent slot availability checks on client-side grids without double-booking or state drift.
- **Engineering Solution**: Created a centralized React state manager using custom Hooks to sync appointments and normalized date strings to prevent time-zone overlap.

### 2. Enterprise Analytics Dashboard 📊
*A premium data intelligence and analytics monitoring panel showcasing high-fidelity dynamic layouts and stateful widgets.*
- **Live Demo**: [dashboard-coral-seven-24.vercel.app](https://dashboard-coral-seven-24.vercel.app/)
- **Repository**: [github.com/eyad96/dashboard](https://github.com/eyad96/dashboard)
- **Tech Stack**: React, TypeScript, Tailwind CSS, Recharts, Framer Motion
- **Core Features**:
  - Dynamic grid layout adjusting seamlessly to any device size.
  - High-fidelity visual representations utilizing SVGs and canvas plotting.
  - Comprehensive filtering inputs and real-time query updates.
  - Clean typescript interface mapping securing complete type safety.
- **Strategic Challenge**: Managing frequent chart updates and heavy re-renders of SVG items on low-powered mobile browsers.
- **Engineering Solution**: Decoupled interactive components using performance-optimized React memo structures and decoupled data queries from the layout thread.

### 3. Eyad Developer Portfolio 💻
*The high-end, responsive developer portfolio showcasing premium CSS animations, state management, and custom glassmorphic aesthetics.*
- **Live Demo**: [eyad96.github.io/eyad-portfolio](https://eyad96.github.io/eyad-portfolio/)
- **Repository**: [github.com/eyad96/eyad-portfolio](https://github.com/eyad96/eyad-portfolio)
- **Tech Stack**: Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, Lucide Icons, Convex Backend
- **Core Features**:
  - Interactive mouse-tracking glow components enhancing interactivity.
  - Terminal simulator widget built with animated bash mock inputs.
  - Fluid page routing and spring-driven layout animations.
  - Dynamic contact form and project showcase synchronized with Convex database in real time.
- **Strategic Challenge**: Preventing visual lag during complex card animations and tracking glows on heavy viewports.
- **Engineering Solution**: Optimized CSS layouts to leverage GPU acceleration via transform/opacity properties, achieving an optimal 60 FPS profile.

### 4. Edusity E-Learning Platform 🎓
*An immersive academic portal showcasing interactive courses, dynamic sliders, and high-conversion landing assets.*
- **Live Demo**: [eyad96.github.io/edusity-react-app](https://eyad96.github.io/edusity-react-app/)
- **Repository**: [github.com/eyad96/edusity-react-app](https://github.com/eyad96/edusity-react-app)
- **Tech Stack**: React, JavaScript, Tailwind CSS, CSS Modules, Lucide Icons
- **Core Features**:
  - Custom course visual navigation selectors and maps.
  - Smooth dynamic reviews showcase slider with touch support.
  - Fully styled admission inquiry forms with real-time feedback loops.
  - Fluid CSS keyframe hover graphics for interactive elements.
- **Strategic Challenge**: Synchronizing slider transition states across different layout aspect ratios and mobile sizes.
- **Engineering Solution**: Engineered active touch listeners and custom CSS transition hooks that dynamically calculate item heights.

---

## 🛠️ Technical Arsenal

The architecture is built using a modern, performant, and fully type-safe frontend stack:

- **Core**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack) & [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict compilation, custom schemas)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Hardware-accelerated layouts, CSS container queries)
- **Interactions**: [Framer Motion](https://www.framer.com/motion/) (Spring-driven layout animations, staggering lists)
- **Icons**: [Lucide Icons](https://lucide.dev/) & custom responsive SVG components

---

## ✨ Immersive Features

1. **Interactive Mouse Glow**: Dynamic, hardware-accelerated ambient glowing background orbs that track cursor movement for enhanced tactile feedback.
2. **Terminal Simulator Widget**: A custom terminal mock screen loading stack diagnostics and system compilation updates.
3. **Responsive Visual Showcase**: Widescreen card frames featuring high-resolution snapshots of your actual projects, optimized to prevent Layout Shifting (CLS).
4. **Adaptive Card Displays**: Responsive container-query elements (`@container`) that dynamically adapt screenshot scaling across all device viewports.
5. **Static Parameter Optimization**: Uses `generateStaticParams` to pre-render project case study pages statically at build time, achieving near-instantaneous page load times and 100/100 Lighthouse SEO metrics.

---

## 💻 Getting Started

To run this portfolio locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/eyad96/eyad-portfolio.git
   cd eyad-portfolio
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📄 License & Attribution

Designed and engineered with care by [Eyad Odeh](https://github.com/eyad96). Open for B2B contracts, frontend roles, and full-stack partnerships.
