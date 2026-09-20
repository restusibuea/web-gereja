# 🏛️ GPdI Agape — Modern Church Website Redesign

> **Premium, modern, dan portfolio-ready church website built with React + Tailwind CSS**

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3-61dafb.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)

## 🎯 Design Philosophy

**Modern Spiritual Hub** — Menggabungkan kehangatan rohani dengan visual premium modern SaaS-style.

### Key Features:
- ✨ **Dark Elegant Theme** dengan blue accent & subtle gradients
- 🎨 **Strong Visual Hierarchy** — setiap section punya personality yang jelas
- 💫 **Micro-interactions** — smooth animations & hover effects
- 🔥 **Impactful Hero** — bukan sekadar banner generic
- 📱 **Fully Responsive** — mobile-first design
- ⚡ **Performance Optimized** — fast loading & smooth experience

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Navigate to project directory
cd gpdi-agape-redesign

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# Visit: http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📦 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **Tailwind CSS** | Utility-first styling |
| **Vite** | Build tool & dev server |
| **Lucide React** | Icon library |

---

## 🏗️ Project Structure

```
gpdi-agape-redesign/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed navbar with scroll effect
│   │   ├── Hero.jsx          # Hero section with gradient overlay
│   │   ├── Schedule.jsx      # Weekly schedule cards
│   │   ├── About.jsx         # Vision & mission section
│   │   ├── Team.jsx          # Team members with expand/collapse
│   │   ├── Gallery.jsx       # Image gallery with hover effects
│   │   ├── Location.jsx      # Google Maps integration
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer with links
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles + Tailwind
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Design Improvements

### Before → After

| Aspect | Old Design | New Design |
|--------|-----------|------------|
| **Hero** | Generic text + basic image | Immersive gradient overlay + stats + dual CTA |
| **Typography** | Inconsistent sizing | Strong hierarchy with display fonts |
| **Cards** | Flat borders | Glassmorphism + soft shadows |
| **Colors** | Generic blue | Gradient system + dark elegance |
| **Spacing** | Cramped | Breathable whitespace |
| **Interactions** | Static | Micro-animations on every touchpoint |
| **Team Section** | All visible (cluttered) | Preview 6 + expand functionality |

---

## 🎭 Components Breakdown

### 1. **Navbar** 
- Fixed position with backdrop blur
- Scroll-triggered background
- Mobile hamburger menu
- Smooth anchor links

### 2. **Hero**
- Full-screen immersive background
- Animated gradient orbs
- Badge component
- Dual CTA buttons
- Stats section
- Scroll indicator

### 3. **Schedule**
- Featured card for main service
- Grid layout for weekly schedule
- Icon system for each day
- Hover effects with scale transform

### 4. **About**
- Two-column layout (image + content)
- Floating stats card
- Value propositions with icons
- CTA to team section

### 5. **Team**
- Grid layout (3 columns)
- Leader badge for senior pastors
- Hover overlay with Bible verses
- Expand/collapse functionality (6 → all)

### 6. **Gallery**
- Masonry-style grid
- Gradient overlay on hover
- Title animation
- Border glow effect

### 7. **Location**
- Embedded Google Maps
- Interactive info card on hover
- Quick info cards (address, service time, contact)

### 8. **Contact**
- Modern form design
- Icon inputs
- Gradient submit button
- Social media links

---

## 🎯 Key Design Patterns

### Glassmorphism Cards
```jsx
className="card-glass" // bg-white/5 backdrop-blur-xl border border-white/10
```

### Gradient Buttons
```jsx
className="btn-primary" // Gradient with hover scale + glow shadow
className="btn-secondary" // Border style with backdrop blur
```

### Text Gradient
```jsx
className="text-gradient" // Blue gradient text effect
```

---

## 🔧 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#3b82f6', // Change this
    600: '#2563eb',
    // ...
  },
}
```

### Change Content
All content is in component files — easy to edit:
- **Hero headline**: `Hero.jsx` line 27
- **Schedule data**: `Schedule.jsx` line 5
- **Team members**: `Team.jsx` line 6

### Change Images
Replace image URLs in:
- Hero background: `Hero.jsx`
- Team photos: `Team.jsx`
- Gallery images: `Gallery.jsx`

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile | < 768px | Single column |
| Tablet | 768px - 1024px | 2 columns |
| Desktop | > 1024px | 3+ columns |

---

## ⚡ Performance Tips

- **Images**: Use optimized WebP format
- **Lazy Loading**: Already implemented with `loading="lazy"`
- **Code Splitting**: Vite handles automatically
- **Font Loading**: Preconnect to Google Fonts

---

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag & drop 'dist' folder to Netlify
```

---

## 📄 License

MIT License — Free to use for personal and commercial projects.

---

## 🙏 Credits

**Design & Development**: Created as a premium portfolio-level redesign  
**Icons**: Lucide React  
**Images**: Unsplash (placeholder, replace with actual church photos)  
**Fonts**: Inter (Google Fonts)

---

## 💡 Tips for Portfolio Presentation

1. **Replace placeholder images** with real church photos
2. **Add your name** in footer credits
3. **Screenshot the live site** for case study
4. **Document the "before/after"** transformation
5. **Highlight the design decisions** you made

---

## 🎓 What Makes This Portfolio-Ready?

✅ **Production-quality code** — clean, organized, reusable  
✅ **Modern design trends** — glassmorphism, gradients, micro-interactions  
✅ **Strong visual hierarchy** — clear information architecture  
✅ **Attention to detail** — hover states, animations, spacing  
✅ **Real-world use case** — actual church website needs  
✅ **Performance-conscious** — optimized assets, lazy loading  

---

## 📞 Support

Issues or questions? Feel free to reach out or open an issue.

---

**Made with ❤️ for the Kingdom**
