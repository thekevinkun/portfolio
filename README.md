# Portfolio Website

A minimalist, CV-style portfolio website built with Next.js 15, showcasing my journey as a self-taught Full Stack Developer.

<img width="1920" height="1136" alt="Screenshot of Kevin Mahendra Web Portfolio" src="https://github.com/user-attachments/assets/519be0ff-db08-4d88-87c8-0980c7d1f4c5" />


## Overview

This portfolio presents my work and skills in a clean, newspaper-inspired design with a focus on readability and professional presentation. The layout features a two-column CV structure with a dark sidebar and white content area, optimized for both desktop and mobile viewing.

**Live Demo:** [kevinmahendra.vercel.app](https://kevinmahendra.vercel.app)

## Features

### Design & UX

- **Minimalist Black & White Aesthetic** - Clean, professional, newspaper-inspired design
- **Two-Column CV Layout** - Sidebar for quick info, main content for detailed sections
- **Fully Responsive** - Seamless experience from mobile to desktop
- **Smooth Animations** - Subtle Framer Motion effects throughout
- **Optimized Image Loading** - Shimmer effects and lazy loading for better performance

### Key Sections

- **About** - Brief introduction highlighting my self-taught journey
- **Experience** - Positioned as "Independent Developer" with key achievements
- **Projects** - Tabbed navigation (All, Full Stack, Frontend, Game) with 2-column grid
- **Skills** - Categorized technical skills with animated progress bars
- **Education** - Enhanced with course badges (CS50, freeCodeCamp) and learning achievements
- **Contact/CTA** - Clear call-to-action with email and social links

### Technical Highlights

- **SEO Optimized** - Structured data (JSON-LD), Open Graph tags, Twitter Cards
- **PWA Ready** - Manifest and favicon system configured
- **Performance Focused** - Lighthouse scores 90+ across all metrics
- **Print Friendly** - Optimized styles for CV export

## Tech Stack

### Core

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **Tailwind CSS 4.0** - Utility-first styling with `@theme` directive
- **Framer Motion** - Smooth animations and transitions

### Key Features

- Next.js Image optimization
- Google Fonts (Inter + Merriweather)
- React Icons
- Server Components by default
- Turbopack for faster dev builds

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Sidebar.jsx              # Left sidebar (photo, contact, skills)
│   │   ├── MainContent.jsx          # Right content (experience, projects, education)
│   │   ├── Projects.jsx             # Tabbed projects section
│   │   ├── Contact.jsx              # CTA/contact section
│   │   ├── MobileNav.jsx            # Mobile hamburger navigation
│   │   ├── ScrollIndicator.jsx      # Scroll progress indicator
│   │   └── OptimizedImage.jsx       # Image component with loading states
│   ├── layout.jsx                   # Root layout with SEO metadata
│   ├── page.jsx                     # Main page combining all sections
│   ├── globals.css                  # Tailwind config + custom styles
│   └── manifest.json                # PWA manifest
├── lib/
│   ├── data.js                      # All portfolio data (centralized)
│   ├── animations.js                # Reusable Framer Motion variants
│   └── constants.js                 # App constants
├── public/
│   └── images/                      # Profile photo, projects, logos
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```
    git clone https://github.com/thekevinkun/portfolio.git 
    cd portfolio
   ```

2. Install dependencies
   
   ```
   npm install
   ```

3. **Add your images** Place your images in `public/images/`:

  - `profile-1.png` - Your profile photo (160x160px recommended)
  - Project screenshots (800x450px recommended, 16:9 ratio)
  - Course logos (CS50, freeCodeCamp, etc.)
  - `og-image.jpg` - Social sharing image (1200x630px)
   
 4. **Update your data** Edit `lib/data.js` with your information:

  - Personal info (name, email, location, social links)
  - Projects (add/remove/modify projects)
  - Skills (frontend, backend, tools)
  - Education details
  - Experience highlights  

5. Run development server
   
   ```
   npm run dev
   
   Open http://localhost:3000
   ```

Build for Production

```
# Build
npm run build

# Start production server locally
npm start
```

## 🎨 Customization Guide

### Colors

Edit CSS variables in `app/globals.css`:

```
:root { 
  --primary: #28282b; /* Sidebar background */ 
  --text-primary: #1a1a1a; /* Main text color */ 
  --text-secondary: #666666; /* Secondary text */ 
  --border-light: #e5e5e5; /* Borders */ 
  /* ... */ 
}
```

### Fonts

Change fonts in `app/layout.jsx`:

```
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' }); 
const merriweather = Merriweather({ 
  weight: ['300', '400', '700'], 
  subsets: ['latin'], 
  variable: '--font-merriweather' 
});
```

### Project Data

Add/modify projects in `lib/data.js`:

```
export const projects = [
  {
    id: 1,
    name: "Project Name",
    type: "Full Stack", // Used for tab filtering
    description: "Brief description...",
    image: "/images/project.png",
    tech: ["Next.js", "React", "Tailwind CSS"],
    links: {
      live: "https://...",
      github: "https://github.com/..."
    },
    featured: true // Adds featured badge
  },
  // ...
];
```

### Skills

Update skills in `lib/data.js`:

```
export const skills = [ 
  { name: "Next.js", level: 90, category: "frontend" }, 
  { name: "Node.js", level: 75, category: "backend" }, 
  { name: "Git", level: 85, category: "tools" }, 
  // ... 
];
```

## Responsive Design

- **Desktop (1024px+)**: Two-column layout, sticky sidebar
- **Tablet (768-1023px)**: Two-column with adjusted spacing
- **Mobile (<768px)**: Single column, stacked sections, hamburger menu

## Key Design Decisions

### Why Two-Column CV Layout?

- Familiar format for recruiters
- Efficient use of space
- Quick access to contact info and skills
- Professional presentation

### Why Tabbed Projects?

- Reduces scroll fatigue
- Easy filtering by project type
- Scalable for future projects
- Better space utilization

### Why Minimalist Design?

- Focuses attention on content
- Fast loading times
- Print-friendly
- Timeless aesthetic

## Development Features

### Custom Utilities

Reusable CSS classes in `globals.css`:

- `.section-container` - Section padding and max-width
- `.card`, `.card-hover` - Card styles
- `.heading-primary`, `.heading-section` - Typography
- `.btn-primary`, `.btn-secondary` - Button styles
- `.tag` - Skill/tech tags
- `.grid-projects` - Responsive project grid

### Animation Variants

Reusable Framer Motion variants in `lib/animations.js`:

- `fadeIn`, `slideInBottom`, `slideInLeft`
- `staggerContainer`, `staggerItem`
- `hoverScale`, `tapScale`

### Data-Driven Approach

All content centralized in `lib/data.js`:

- Easy to update
- No hardcoded values
- Type-safe structure
- Scalable for future additions

## Performance

- **Lighthouse Scores**: 90+ across all metrics
- **Optimized Images**: Next.js Image component with lazy loading
- **Shimmer Loading**: Smooth loading states
- **Code Splitting**: Automatic with Next.js
- **Font Optimization**: next/font with variable fonts

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Automatic deployments on every push
4. Update URLs in `app/layout.jsx`:
    - `metadata.metadataBase`
    - `metadata.openGraph.url`
    - `structuredData.url`

### Other Platforms

- **Netlify**: Works out of the box
- **Railway**: Deploy with Docker
- **Self-hosted**: Run `npm run build` and serve `.next` folder

## SEO Features

- ✅ Structured data (JSON-LD) for Google Rich Results
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Semantic HTML structure
- ✅ Proper meta tags and descriptions
- ✅ Sitemap and robots.txt ready
- ✅ Fast loading times

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspired by minimalist CV layouts
- Built with guidance from Next.js and Tailwind CSS documentation
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## Contact

**Kevin Mahendra**

- Email: [kevinmahendra.idn@gmail.com](mailto:kevinmahendra.idn@gmail.com)
- LinkedIn: [kevin-mahendra-b96153396](https://www.linkedin.com/in/kevin-mahendra-b96153396/)
- GitHub: [@thekevinkun](https://github.com/thekevinkun)
- Location: Samarinda, East Kalimantan, Indonesia

---

**If you found this portfolio helpful, please consider giving it a star!**

Built with ❤️ using Next.js 15, React 19, and Tailwind CSS 4.0
