# Animated Portfolio Website

A heavily animated, dark-themed portfolio website built with React.js, Framer Motion, Three.js, and Particles.js. Features fullpage seamless transitions with unique animation styles per page, optimized for both mobile and desktop.

## Features

- **Hero + About Me Page**: 3D animated icons, interactive particles background, animated gradient blurs
- **Call to Action Page**: Animated buttons with glowing effects and motion blur
- **Downloadable Resume**: Stylish PDF resume link with hover animations
- **Projects Page**: Grid/carousel of projects with 3D hover animations and lazy loading
- **Skills Page**: Animated skill icons with proficiency counters/bars
- **Contact Page**: Interactive email form with validation and success animation
- **Featured Articles**: Blog/article list with smooth load-in and fade effects
- **Coding Profiles**: Showcase cards linking to LeetCode, GitHub, Skill Rack
- **Social Links**: LinkedIn, Instagram, GitHub, YouTube, Twitter with hover animations

## Visual Features

- Animated gradient blur backgrounds
- Particles that interact with mouse movement
- Each section/page feels like a mini experience
- Cinematic and fluid transitions (no jank)
- Full responsiveness for mobile/tablets
- Dark theme with gradient accents

## Technologies Used

- **React.js**: UI framework
- **Framer Motion**: Advanced animations
- **Three.js**: 3D graphics
- **React Three Fiber**: Three.js in React
- **Particles.js**: Interactive particle effects
- **React Router**: Page navigation
- **CSS3**: Styling and animations

## Installation

```bash
npm install
```

## Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.js
│   ├── ParticlesBackground.js
│   ├── GradientBlur.js
│   ├── AnimatedButton.js
│   └── SocialLinks.js
├── pages/              # Page components
│   ├── HeroAbout.js
│   ├── CTA.js
│   ├── Resume.js
│   ├── Projects.js
│   ├── Skills.js
│   ├── Contact.js
│   ├── Articles.js
│   └── CodingProfiles.js
├── utils/              # Utility functions
├── assets/             # Images and icons
├── App.js              # Main app component
└── index.js            # Entry point
```

## Customization

1. **Update Personal Information**: Edit the resume, contact, and profile data in each page component
2. **Change Colors**: Modify the gradient colors in CSS files or component styling
3. **Add Projects**: Update the projects array in `Projects.js`
4. **Add Articles**: Update the articles array in `Articles.js`
5. **Update Social Links**: Modify the social links in `SocialLinks.js`

## Performance Tips

- Use React.lazy() for code splitting
- Optimize images
- Enable compression
- Consider using CSS-in-JS for smaller bundle sizes

## License

This project is open source and available under the MIT License.
