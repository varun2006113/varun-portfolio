# Varun Venkatesh — Professional Portfolio Website

Modern, responsive, production-ready personal portfolio website for **Varun Venkatesh**, a B.Tech Biotechnology student at Lovely Professional University from Kovilpatti, Tamil Nadu focusing on **Computational Biology**, **Bioinformatics**, **Artificial Intelligence**, and **Software Engineering**.

![Varun Venkatesh Portfolio](/public/assets/profile.png)

---

## 🧬 Overview

This portfolio website highlights an interdisciplinary technical profile bridging biological sciences, laboratory QA/QC protocols, computational algorithms, and AI literature processing. Built with React.js, Vite, Tailwind CSS v4, Lucide Icons, and Framer Motion.

---

## 🚀 Tech Stack

- **Core**: React.js 19, JavaScript (ES6+)
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4, Custom CSS Glassmorphism
- **Animations**: Framer Motion, HTML5 Interactive Canvas
- **Icons**: Lucide Icons & Custom SVG Social Badges
- **Deployment Support**: Vercel (`vercel.json`) & Netlify (`_redirects`)

---

## 📁 Project Structure

```
varun-portfolio/
├── public/
│   ├── _redirects              # Netlify SPA routing fallback
│   ├── assets/
│   │   ├── profile.jpg         # Profile avatar photo
│   │   └── Varun-V-CV.pdf      # Curriculum Vitae PDF asset
│   └── certificates/           # PDF certificate documents
│       ├── general-chemistry.pdf
│       ├── developer-foundations.pdf
│       ├── css-flexbox-tailwind.pdf
│       ├── javascript-essentials.pdf
│       ├── programming-foundations.pdf
│       ├── intro-databases.pdf
│       └── internship-certificate.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed glass navigation bar & mobile drawer
│   │   ├── Hero.jsx            # Hero introduction & action CTAs
│   │   ├── About.jsx           # Bio & CGPA statistics cards
│   │   ├── Roadmap.jsx         # Career milestone timeline (2024–Future)
│   │   ├── Skills.jsx          # Categorized competency matrix (NO fake bars)
│   │   ├── Internship.jsx      # Triveni Formulations QC/QA experience card
│   │   ├── Projects.jsx        # AI Research Summariser & feature cards
│   │   ├── Certifications.jsx  # Filterable certification gallery
│   │   ├── Accomplishments.jsx # Hackathons & workshop activities
│   │   ├── Achievements.jsx    # Key distinctions & badges
│   │   ├── Contact.jsx         # Let's Connect section & mailto form
│   │   ├── Footer.jsx          # Brand links, social icons & copyright
│   │   ├── CertificateModal.jsx# Reusable PDF modal previewer
│   │   ├── MolecularCanvas.jsx # Interactive node background animation
│   │   ├── BackToTop.jsx       # Floating scroll-to-top button
│   │   └── SocialIcons.jsx     # Custom SVG LinkedIn & GitHub icons
│   ├── data/                   # Modular content data sources
│   │   ├── personal.js
│   │   ├── roadmap.js
│   │   ├── skills.js
│   │   ├── internship.js
│   │   ├── projects.js
│   │   ├── certifications.js
│   │   ├── accomplishments.js
│   │   └── achievements.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

## 🛠️ Quick Start & Local Setup

### 1. Clone & Install Dependencies

```bash
cd varun-portfolio
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The application will be live at `http://localhost:5173`.

### 3. Build for Production

```bash
npm run build
```

The compiled output will be generated inside the `dist/` directory.

---

## 📝 Customization Guide

### 1. Replacing Your Profile Photo
Replace the image file at `public/assets/profile.jpg` with your original portrait image.

### 2. Replacing Your CV PDF
Replace `public/assets/Varun-V-CV.pdf` with your updated resume PDF.

### 3. Adding New Certificates
1. Drop your PDF file inside `public/certificates/your-certificate-file.pdf`.
2. Open `src/data/certifications.js` and add a new entry:

```js
{
  id: "your-cert-id",
  title: "Certificate Title",
  issuer: "Issuing Academy / University",
  date: "Month Year",
  category: "Biotechnology", // or Chemistry, Programming, Web Development, AI, Databases
  fileUrl: "/certificates/your-certificate-file.pdf",
  icon: "Award",
  credentialId: "CERT-ID-123"
}
```

### 4. Updating Social Links & Contact Details
Open `src/data/personal.js` and update your email, LinkedIn URL, or GitHub URL:

```js
export const personalData = {
  contact: {
    email: "varun2006113v@gmail.com",
    linkedin: "https://linkedin.com/in/your-linkedin-username",
    github: "https://github.com/your-github-username",
    location: "Punjab / India"
  }
};
```

---

## 🌐 Deployment Instructions

### Vercel Deployment
1. Push your repository to GitHub.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `varun-portfolio` repository.
4. Keep the build framework as **Vite**.
5. Click **Deploy**. Vercel will automatically use `vercel.json` for client routing.

### Netlify Deployment
1. Log into [Netlify](https://netlify.com) and select **"Add new site" -> "Import an existing project"**.
2. Connect your GitHub repository.
3. Set **Build Command**: `npm run build`
4. Set **Publish Directory**: `dist`
5. Click **Deploy Site**. The `public/_redirects` file ensures SPA routes function without 404 errors.

---

## 📄 License
© 2026 Varun Venkatesh. All rights reserved.
