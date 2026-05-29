# ⚡ Quick Start Guide

## 3-Step Setup

### 1️⃣ Install Node.js
- Download: https://nodejs.org (LTS version)
- Run installer with admin rights
- Verify: Open terminal and run `node --version`

### 2️⃣ Install Dependencies
```bash
cd c:\portfolio
npm install
```

### 3️⃣ Start Development Server
```bash
npm start
```

Done! Your portfolio will open at http://localhost:3000 🎉

---

## 📝 Quick Customization

### Change Your Name
**File**: `src/pages/HeroAbout.js`
```javascript
<motion.span className="name-gradient">
  Your Name  // ← Change this
</motion.span>
```

### Update Social Links
**File**: `src/components/SocialLinks.js`
- Change URLs in the `socialLinks` array

### Add Your Projects
**File**: `src/pages/Projects.js`
- Edit the `projects` array with your projects

### Update Skills
**File**: `src/pages/Skills.js`
- Edit the `skills` array with your technologies

### Update Contact Info
**File**: `src/pages/Contact.js`
- Change email, phone, location

---

## 📚 Full Documentation

- **Setup Guide**: See `SETUP.md`
- **Project Overview**: See `PROJECT_OVERVIEW.md`
- **Documentation**: See `README.md`

---

## 🔧 Useful Commands

```bash
npm start                # Start dev server
npm run build           # Build for production
npm test                # Run tests
```

---

## 🌐 Deployment

Build for production:
```bash
npm run build
```

Deploy the `build/` folder to:
- Netlify
- Vercel
- GitHub Pages
- Your server

---

## ❓ Common Issues

**"npm: command not found"**
→ Restart terminal after installing Node.js

**"Port 3000 already in use"**
→ `PORT=3001 npm start`

**"Dependencies installation fails"**
→ `npm cache clean --force` then `npm install`

---

Enjoy your animated portfolio! 🚀
