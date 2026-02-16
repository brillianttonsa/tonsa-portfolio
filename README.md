# Tonsa Portfolio

A modern personal portfolio showcasing skills, resume, and project deployments. Built with React 19 and Vite for a fast, responsive experience.

## Tech Stack

- **React 19** — UI library
- **Vite 7** — Build tool and dev server
- **Tailwind CSS v4** — Styling
- **Recharts** — Skill charts and data visualization
- **jsPDF** — Resume PDF export
- **lucide-react** — Icons

## Features

- **Hero** — Typing effect, profile image, scroll indicator
- **About** — Bio and details grid
- **Skills** — Service cards and skill categories
- **Resume** — Education, experience, skill stack with Recharts, and PDF download
- **Projects** — Project cards, modal details, and future vision section
- **FAQ** — Expandable FAQ items
- **Contact** — Form and contact info
- **Responsive** — Mobile menu, backdrop blur header, polished layouts

## Project Structure

```
tonsa-portfolio/
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── FAQ/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Projects/
│   │   ├── Resume/
│   │   ├── SkillsSection/
│   │   └── ui/
│   ├── features/
│   │   └── ProjectFeatures.js   # Project & future project data
│   ├── assets/
│   ├── data/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Scripts

| Command       | Description                |
|---------------|----------------------------|
| `npm run dev` | Start dev server (Vite)    |
| `npm run build` | Build for production    |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint                |

## License

Private — Tonsa Portfolio
