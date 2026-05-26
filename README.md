# Joseph Eton — Personal Portfolio

> **Live Site:** [https://etonjoe.github.io/personal-portfolio/](https://etonjoe.github.io/personal-portfolio/)

A personal portfolio website built with React, Vite, and Tailwind CSS, deployed automatically to GitHub Pages via GitHub Actions.

---

## 👤 About

**Joseph Sunday Eton** — Data Scientist and Public Health Researcher based in Abuja, Nigeria. With over a decade of experience in health systems strengthening, monitoring and evaluation, and data science, Joseph builds data-driven tools and platforms that solve real-world problems across global health and civic technology.

- 📧 [eton.joseph@gmail.com](mailto:eton.joseph@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/joseph-eton/)
- 🐙 [GitHub](https://github.com/etonjoe)

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 5 |
| Styling | Tailwind CSS 3 |
| Icons | react-icons |
| Deployment | GitHub Actions + GitHub Pages |

---

## 📂 Project Structure

```
personal-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD: auto-build and deploy on push to main
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js           # base: '/personal-portfolio/' for GitHub Pages
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ⚙️ Local Development

### Prerequisites
- Node.js 18+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/etonjoe/personal-portfolio.git
cd personal-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The compiled output is in the `dist/` folder.

---

## 🚢 Deployment

Deployment is fully automated. Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which:

1. Checks out the code
2. Installs Node.js 20
3. Runs `npm install`
4. Runs `npm run build` (Vite compiles to `dist/`)
5. Pushes the `dist/` folder to the `gh-pages` branch
6. GitHub Pages serves the site from `gh-pages`

> **Note:** `vite.config.js` includes `base: '/personal-portfolio/'` so all asset paths resolve correctly under the GitHub Pages subdirectory.

---

## 🛠️ Key Fixes Applied

The following issues were diagnosed and resolved to get the site working on GitHub Pages:

| Issue | Root Cause | Fix Applied |
|---|---|---|
| Blank page | Pages was serving raw source (`main` branch) instead of a compiled build | Added GitHub Actions deploy workflow |
| Asset 404s | Vite built assets with absolute `/` paths, not the `/personal-portfolio/` subdirectory | Added `base: '/personal-portfolio/'` to `vite.config.js` |
| No CI/CD | No `.github/workflows/` existed | Created `deploy.yml` with build and deploy steps |
| Wrong Pages source | Pages pointed at `main` (source code), not `gh-pages` (built output) | Switched Pages source to `gh-pages` branch |

---

## 📄 License

MIT — free to use and adapt.
