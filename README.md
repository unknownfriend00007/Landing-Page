# Raghav's Portfolio Website

🚀 **Professional portfolio showcasing AI/ML projects and live production systems**

![Status](https://img.shields.io/badge/status-live-success)
![Projects](https://img.shields.io/badge/projects-7-blue)
![Tech](https://img.shields.io/badge/tech-AI%2FML-purple)

## 🌟 Overview

A modern, multi-page portfolio website built with pure HTML, CSS, and JavaScript. Features a clean navigation structure, responsive design, and showcases production-grade AI/ML projects.

## 📁 Structure

```
Landing-Page/
├── index.html          # Home page with intro & contact
├── projects.html       # Detailed projects showcase
├── styles.css          # Complete styling (dark theme)
├── script.js           # Interactive functionality
└── README.md          # Documentation
```

## 🎨 Features

### Home Page (`index.html`)
- **Hero Section** - Introduction with animated background
- **Stats Display** - Active projects, live instances, uptime
- **Tech Stack** - Categorized technologies and tools
- **Contact Section** - Social links and availability status

### Projects Page (`projects.html`)
- **7 Major Projects**:
  1. 📱 YouTube Shorts Factory - Automated video generation
  2. 💰 Tarang Crypto Analyzer - ML-based crypto predictions
  3. 🎬 DIRECTOR - YouTube clip cutter for Shorts
  4. ⚡ Hybrid Ultrafast Flowise Instances - LLM infrastructure
  5. 🛡️ Backend Protection Proxy - Security layer
  6. 🌍 Telegram Geopolitics Bot - Unbiased news aggregator
  7. 🗣️ Indian English Speaker - TTS with Indian accents

### Design Features
- ✨ Modern dark theme with purple/indigo gradients
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎭 Smooth animations and hover effects
- 🔄 Intersection Observer for scroll animations
- 🍔 Mobile burger menu
- ⚡ Fast loading (no frameworks)

## 🛠️ Tech Stack

- **Pure HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Custom Properties, Animations
- **Vanilla JavaScript** - No dependencies
- **Font Awesome** - Icons (CDN)

## 🚀 Deployment

### Option 1: GitHub Pages (Free, Easiest)

1. Go to repository **Settings** → **Pages**
2. Select `main` branch → **Save**
3. Site will be live at: `https://unknownfriend00007.github.io/Landing-Page/`

### Option 2: Vercel

```bash
npm i -g vercel
cd Landing-Page
vercel
```

### Option 3: Netlify

1. Drag & drop the folder to [Netlify](https://app.netlify.com/drop)
2. Or connect your GitHub repository

### Option 4: Render

1. Create new **Static Site**
2. Connect GitHub repo
3. Build command: (leave empty)
4. Publish directory: `/`

## ✏️ Customization

### Update Your Information

1. **Contact Links** (in `index.html`):
```html
<!-- Update these URLs -->
<a href="mailto:YOUR_EMAIL@example.com">
<a href="https://t.me/YOUR_USERNAME">
<a href="https://linkedin.com/in/YOUR_PROFILE">
```

2. **Project URLs** (in `projects.html`):
```html
<!-- Replace # with actual URLs -->
<a href="YOUR_LIVE_APP_URL" class="btn btn-primary">
<a href="YOUR_GITHUB_REPO" class="btn btn-secondary">
```

3. **Personal Info** (in `index.html`):
- Update name, tagline, description
- Modify stats (projects count, instances, etc.)

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main purple */
    --secondary-color: #8b5cf6;    /* Secondary purple */
    --accent-green: #10b981;       /* Success green */
    --accent-orange: #f59e0b;      /* Warning orange */
}
```

### Add New Projects

Copy a project card in `projects.html` and modify:

```html
<div class="project-card-large">
    <!-- Update icon, title, description, features, tech stack -->
</div>
```

## 📊 Performance

- **Load Time**: < 2 seconds
- **Lighthouse Score**: 95+
- **Mobile Friendly**: Yes
- **SEO Optimized**: Yes

## 🔧 Local Development

1. Clone the repository:
```bash
git clone https://github.com/unknownfriend00007/Landing-Page.git
cd Landing-Page
```

2. Open with live server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Or just open index.html in browser
```

3. Edit files and refresh browser

## 📝 Todo / Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add project filtering by technology
- [ ] Create detailed case studies for each project
- [ ] Add analytics integration
- [ ] Implement contact form backend

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 👤 Author

**Raghav**
- GitHub: [@unknownfriend00007](https://github.com/unknownfriend00007)
- Student: Class 12 CBSE
- Focus: AI/ML Development, System Architecture

---

⭐ **Star this repo if you found it helpful!**

💡 **Built with passion while balancing board exams and production systems** 🚀
