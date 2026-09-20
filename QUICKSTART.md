# 🚀 Quick Start Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn

## Installation & Running

```bash
# 1. Navigate to project
cd gpdi-agape-redesign

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open browser: **http://localhost:5173**

---

## 🎯 What You'll See

### Hero Section
- Immersive full-screen hero with gradient overlays
- Animated background orbs
- Dual CTA buttons
- Stats showcase

### Schedule Section
- Featured "Ibadah Raya" card
- Grid of weekly services
- Modern card design with icons

### About Section
- Image + content layout
- Core values with icons
- Floating stats card

### Team Section
- 6 members preview (expandable)
- Leader badges for senior pastors
- Bible verse overlays on hover

### Gallery
- Masonry grid layout
- Gradient overlays
- Smooth hover animations

### Location
- Embedded Google Maps
- Interactive info card
- Quick info cards

### Contact
- Modern form design
- Icon-enhanced inputs
- Social media links

---

## 🎨 Customization

### Change Primary Color
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#3b82f6', // Your color here
  }
}
```

### Update Content
All text/data is in component files:
- Hero: `src/components/Hero.jsx`
- Schedule: `src/components/Schedule.jsx`
- Team: `src/components/Team.jsx`

### Replace Images
Update image URLs in respective components with actual church photos.

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

---

## 🌐 Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag `dist/` folder to Netlify

---

## ✅ Checklist Before Launch

- [ ] Replace all placeholder images
- [ ] Update Google Maps coordinates
- [ ] Add real WhatsApp number
- [ ] Update Instagram handle
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Optimize images (WebP format)

---

**Need help?** Check README.md for full documentation.
