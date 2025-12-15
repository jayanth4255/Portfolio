# 🌌 Cosmic Portfolio - Premium Universe-Themed React Portfolio

A stunning, futuristic, galaxy-themed portfolio website built with React, featuring immersive 3D elements, smooth animations, and breathtaking cosmic aesthetics.

![Portfolio Preview](https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&h=600&fit=crop)

## ✨ Features

### 🌠 Cosmic Welcome Screen
- Personalized greeting with your name
- Animated nebula clouds and cosmic particles
- Cinematic fade + zoom animations
- Click-anywhere-to-enter functionality

### 🏠 Premium Hero Section
- Professional profile photo with cosmic glow effect
- Animated starfield background
- Floating planet particles
- Social icons (GitHub, LinkedIn, LeetCode, Email)
- Universe-inspired quote display

### 💼 Advanced Projects Showcase
- **Three View Modes:**
  - 📽️ Slideshow Mode - Elegant side-by-side layout
  - 📖 Book/Story Mode - Page-turn animations
  - 🎯 Grid View - Responsive card layout
- Galaxy fade-in transitions
- Tech stack badges with hover effects
- Live demo and GitHub links

### 🧠 Skills & Expertise
- Icon-based skill cards
- Cosmic glow-on-hover animations
- Animated progress bars
- Categorized by Frontend, Backend, and Tools

### 🎓 Academic Timeline
- Alternating left-right layout
- Animated gradient timeline
- Pulsing star-dot markers
- Smooth scroll animations

### 📞 Contact Section
- Animated starfield background
- Floating cosmic icons
- Form with cosmic glow on focus
- Social media integration

## 🚀 Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Three.js (React Three Fiber)
- **Icons:** Lucide React
- **Routing:** React Router DOM

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your configuration if needed.

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   ```
   The optimized build will be in the `dist` folder.

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information
Edit `src/data/personal.js` to update:
- Name, title, and quote
- Email and location
- Social media links
- Quick facts and counters

### Projects
Edit `src/data/projects.js` to add/modify your projects:
```javascript
{
  id: 1,
  title: "Your Project",
  description: "Project description",
  tech: ["React", "Node.js"],
  image: "image-url",
  links: {
    demo: "demo-url",
    github: "github-url"
  }
}
```

### Skills
Edit `src/data/skills.jsx` to update your skills:
```javascript
{
  name: "Skill Name",
  icon: <IconComponent />,
  level: 90
}
```

### Academic History
Edit `src/data/academics.js` to update your education:
```javascript
{
  id: 1,
  year: "2020 - 2024",
  title: "Degree Name",
  institution: "Institution Name",
  description: "Description"
}
```

### Profile Photo
Replace `src/assets/profile-hero.png` with your own professional photo.

## 🎨 Color Scheme

The cosmic theme uses the following color palette:
- **Deep Space:** `#0a0e27` - Main background
- **Nebula Purple:** `#6366f1` - Primary accent
- **Orbit Glow:** `#8b5cf6` - Secondary accent
- **Nebula Pink:** `#ec4899` - Tertiary accent
- **Star White:** `#f8fafc` - Text color

You can customize these in `tailwind.config.js`.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (375px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1920px+)

## ⚡ Performance Optimizations

- Lazy loading for images
- Optimized animations with `will-change`
- GPU-accelerated transformations
- Efficient Three.js scene rendering
- Code splitting with React Router

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Cosmic imagery from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📧 Contact

For any questions or feedback, feel free to reach out:
- Email: jayanthmothukuri799@gmail.com
- LinkedIn: [Jayanth Mothukuri](https://linkedin.com/in/jayanth799)
- GitHub: [Your GitHub](https://github.com/jayanth4255)

---

**Made with 💜 and cosmic energy**
