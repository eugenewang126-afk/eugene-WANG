# Mars Base Alpha · 火星基地阿尔法

> An Open-Source Engineering Design Platform for Mars Permanent Base
> 火星永久基地工程设计平台 — 基于第一性原理的模块化技术框架

## 🔗 Live Demo

[https://yourusername.github.io/mars-base-alpha/](https://yourusername.github.io/mars-base-alpha/)

## 📋 Overview

This project presents a modular engineering design framework for a permanent Mars base, built from first principles. It covers four core modules:

1. **Energy Supply (3.1)** — Triple-track power generation: Fission Surface Power + In-Situ CO₂ Thermoelectric + Solar PV
2. **Communication System (3.2)** — MarsLink constellation based on Starlink底层逻辑: 3-layer orbit architecture + Laser ISL + SDN
3. **Materials & Structure (3.3)** — Five-track ISRU materials: Regolith Fiber + Sulfur Concrete + StarCrete + Geopolymer + Cold Sintering
4. **Auxiliary Systems & Network (3.4)** — Four-layer autonomous pyramid: Execution → Coordination → Planning → Decision

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/mars-base-alpha.git
cd mars-base-alpha

# Open in browser (any static server works)
# Python
python -m http.server 8080

# Node.js
npx serve .

# Or simply open index.html in your browser
```

### Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select `main` branch, root directory
4. Your site will be live at `https://yourusername.github.io/mars-base-alpha/`

## 📁 Project Structure

```
mars-base-alpha/
├── index.html          # Main page (semantic HTML5 + ARIA)
├── css/
│   └── styles.css      # Complete design system (Mars theme)
├── js/
│   └── main.js         # Interactivity + accessibility features
├── images/             # Static assets
├── docs/               # Technical documentation (Chinese)
│   ├── framework.md    # Framework overview
│   ├── ch2-environment.md    # Mars environment parameters
│   ├── ch3.1-energy.md       # Energy supply module
│   ├── ch3.2-communication.md # Communication system
│   ├── ch3.3-materials.md    # Materials & structure
│   └── ch3.4-network.md      # Auxiliary systems
├── README.md           # This file
├── LICENSE             # MIT License
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages auto-deploy
```

## ♿ Accessibility

This website follows WCAG 2.1 AA guidelines:

- ✅ Semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, `<section>`)
- ✅ Skip navigation link
- ✅ ARIA labels and roles throughout
- ✅ Keyboard-navigable tab panels (Arrow keys)
- ✅ Color contrast ratio ≥ 4.5:1 for all text
- ✅ `aria-live` regions for dynamic content
- ✅ Focus indicators on all interactive elements
- ✅ Language toggle with `aria-pressed` states
- ✅ Responsive design (mobile-first)

### Testing Tools

- **Lighthouse** — Built into Chrome DevTools
- **axe DevTools** — Browser extension for WCAG checking
- **WAVE** — [wave.webaim.org](https://wave.webaim.org)
- **NVDA / VoiceOver** — Screen reader testing

## 🛠️ Tech Stack

- **HTML5** — Semantic markup with ARIA accessibility
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — No frameworks, progressive enhancement
- **Static site** — No build tools required

## 🤝 Contributing

We welcome contributions from researchers, engineers, and designers!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Contribution Guidelines

- All HTML must pass W3C validation
- All interactive elements must be keyboard-accessible
- Maintain the existing code style
- Test with Lighthouse accessibility audit (score ≥ 90)

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

This means you are free to:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Use privately

## 📧 Contact

- **GitHub Issues**: [https://github.com/yourusername/mars-base-alpha/issues](https://github.com/yourusername/mars-base-alpha/issues)
- **Email**: contact@marsbasealpha.org

## 🙏 Acknowledgments

- NASA/DOE Fission Surface Power project data
- USTC CO₂ thermoelectric conversion research
- BUPT Mars base wireless networking simulation
- SpaceX Starlink technical specifications
- Manchester University StarCrete research

---

*Mars Base Alpha · From Earth to Mars · 基于第一性原理，构建火星文明*
