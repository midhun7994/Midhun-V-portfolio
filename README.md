# Midhun V — Professional Portfolio Website

A modern, production-ready, recruiter-friendly developer portfolio website for **Midhun V (Python Full Stack Developer)** built with **React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion (`motion/react`) + Lucide Icons**.

## 🚀 Features

- **Personalized Branding & Photo**: Prominent presentation of Midhun V's professional photo (`midhun.jpeg`).
- **Dark / Light Mode**: Interactive theme switcher with persistent local storage and system preference detection.
- **Sticky Navigation**: Smooth-scrolling sticky navbar with active section pill indicator and mobile responsive menu.
- **Micro-Interactions & Custom Cursor**: Spring-animated custom cursor follower (automatically disabled on mobile/touch devices).
- **Projects Showcase**: Interactive cards for **Calorie-Tracker Management System** and **AI Air Bag Detection & Emergency Alert** with modal views and direct GitHub repository links.
- **Experience Timeline**: Career history covering full-stack internship at Quest Innovative Solutions Pvt Ltd.
- **Categorized Skills**: Organized technical badges across Languages, Databases, Frameworks, Tools, and Soft Skills.
- **Certifications & Education**: Academic background (BCA, Higher Secondary, SSLC) and verified credentials (Microsoft Azure AI Essentials, Oracle Agentic AI Associate).
- **Working Contact Options**: Email copy-to-clipboard button, phone call link, WhatsApp instant chat link, and a deployment-ready Netlify form.
- **Netlify Ready**: Includes `public/_redirects` for single-page app (SPA) routing.

## 🛠️ Local Setup & Running

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

The site will run at `http://localhost:5173/`.

## 📦 Production Build

```bash
npm run build
```

This compiles TypeScript and builds production assets into the `dist/` directory.

## 🌐 Netlify Deployment

1. Push this repository to GitHub/GitLab.
2. Connect the repository to Netlify.
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Deploy! The included `public/_redirects` file ensures SPA routes function without 404 errors.
