# Setup Instructions

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher) - Download from [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js)

### Installing Node.js

#### Windows
1. Visit [nodejs.org](https://nodejs.org)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the installation wizard
4. **Important**: Check the boxes for:
   - ✅ Add to PATH
   - ✅ Automatically install necessary tools
5. Complete the installation
6. Restart your computer or terminal

#### macOS
```bash
# Using Homebrew (recommended)
brew install node

# Or download from nodejs.org
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# Fedora
sudo dnf install nodejs npm
```

### Verify Installation

Open a terminal/command prompt and run:

```bash
node --version
npm --version
```

Both commands should display version numbers.

---

## Setup Instructions

### 1. Navigate to Project Directory

```bash
cd c:\portfolio
# or your project path
```

### 2. Run Setup Script

**Windows (Command Prompt):**
```bash
setup.bat
```

**macOS/Linux (Terminal):**
```bash
bash setup.sh
```

**Or manually:**
```bash
npm install
```

This will install all dependencies including:
- React & React Router
- Framer Motion
- Three.js & React Three Fiber
- Tsparticles
- And other required packages

### 3. Start Development Server

```bash
npm start
```

The application will:
- Build the project
- Start a development server
- Automatically open http://localhost:3000 in your browser
- Enable hot-reload (changes auto-refresh)

### 4. View in Browser

- Navigate to [http://localhost:3000](http://localhost:3000)
- You should see the animated portfolio website
- Use the navigation menu to explore all pages

---

## Available Scripts

### `npm start`
- Starts development server with hot-reload
- Open [http://localhost:3000](http://localhost:3000) to view

### `npm run build`
- Builds production-optimized bundle
- Output folder: `build/`

### `npm test`
- Runs test suite (if configured)

### `npm run eject`
- ⚠️ **One-way operation** - Exposes all configuration
- Not recommended unless you need deep customization

---

## Customization Guide

### 1. Update Personal Information

**File**: `src/pages/HeroAbout.js`
- Change "Your Name" to your actual name
- Update profession and intro text

**File**: `src/pages/Contact.js`
- Update email address
- Update phone number
- Update location

### 2. Update Social Links

**File**: `src/components/SocialLinks.js`
- Replace placeholder URLs with your actual social profiles
- Supports: LinkedIn, GitHub, Instagram, YouTube, Twitter, Email

### 3. Add Your Projects

**File**: `src/pages/Projects.js`
- Edit the `projects` array
- Add project title, description, technologies, images, and links

Example:
```javascript
{
  title: 'My Awesome Project',
  description: 'Description of what the project does',
  tech: ['React', 'Node.js', 'MongoDB'],
  image: 'placeholder',
  link: 'https://project-url.com',
  github: 'https://github.com/yourname/project',
}
```

### 4. Update Skills

**File**: `src/pages/Skills.js`
- Edit the `skills` array to include your technical skills
- Adjust proficiency levels (0-100)

### 5. Add Your Resume

**File**: `src/pages/Resume.js`
- Update experience, education, and achievements
- Add PDF file to `public/resume.pdf`

### 6. Add Articles

**File**: `src/pages/Articles.js`
- Edit the `articles` array
- Add blog posts with title, excerpt, date, and link

### 7. Update Coding Profiles

**File**: `src/pages/CodingProfiles.js`
- Update your actual profile URLs for LeetCode, GitHub, Skill Rack, etc.

---

## Troubleshooting

### "npm: command not found"
- **Solution**: Node.js not properly installed or PATH not updated
- Restart terminal/IDE and try again
- Reinstall Node.js ensuring PATH is added

### Port 3000 already in use
- **Solution**: Use a different port
  ```bash
  PORT=3001 npm start
  ```

### Dependencies installation fails
- **Solution**: Clear npm cache and reinstall
  ```bash
  npm cache clean --force
  npm install
  ```

### Hot-reload not working
- **Solution**: Restart development server
  ```bash
  # Stop server with Ctrl+C
  npm start
  ```

### Browser shows blank page
- **Solution**: Check browser console for errors
  - Open DevTools (F12)
  - Check Console tab for error messages
  - Check Network tab for failed requests

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## Performance Optimization Tips

1. **Images**: Optimize and compress all images before adding
2. **Code Splitting**: Use React.lazy() for large components
3. **Lazy Loading**: Implement lazy loading for images and components
4. **Minification**: Run `npm run build` for production
5. **Cache**: Configure browser caching headers on your server

---

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deploy Options

1. **Netlify** (Recommended for ease)
   - Connect GitHub repo
   - Deploy automatically

2. **Vercel**
   - Similar to Netlify
   - Great performance

3. **GitHub Pages**
   - Free hosting
   - Good for portfolio

4. **Traditional Hosting**
   - Upload `build/` folder to your server

---

## Need Help?

- Check React documentation: [reactjs.org](https://reactjs.org)
- Framer Motion docs: [framer.com/motion](https://www.framer.com/motion/)
- Three.js docs: [threejs.org](https://threejs.org)

---

## Project Structure

```
portfolio/
├── public/
│   └── index.html           # Main HTML file
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation.js
│   │   ├── ParticlesBackground.js
│   │   ├── GradientBlur.js
│   │   ├── AnimatedButton.js
│   │   └── SocialLinks.js
│   ├── pages/               # Page components
│   │   ├── HeroAbout.js
│   │   ├── CTA.js
│   │   ├── Resume.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Contact.js
│   │   ├── Articles.js
│   │   └── CodingProfiles.js
│   ├── utils/               # Utility functions
│   ├── assets/              # Images, fonts, etc.
│   ├── App.js               # Main component with routing
│   ├── App.css
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
├── package.json             # Dependencies and scripts
├── README.md                # Project documentation
└── .gitignore              # Git ignore file
```

---

## Tips for Best Results

1. **Performance**: Use Chrome DevTools to monitor performance
2. **Mobile Testing**: Test on real devices for best experience
3. **Customization**: Explore CSS files to customize colors and animations
4. **Optimization**: Compress images and minimize bundle size
5. **Testing**: Test all pages and functionality before deployment

---

Happy coding! 🚀
