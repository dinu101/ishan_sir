# 📁 Complete File Structure

```
nextjs-portfolio/
│
├── 📁 app/                          # Next.js App Router directory
│   ├── 📄 globals.css               # Global styles and custom animations
│   ├── 📄 layout.tsx                # Root layout with metadata and fonts
│   └── 📄 page.tsx                  # Main page (home page)
│
├── 📁 components/                   # React components
│   ├── 📄 About.tsx                 # About section component
│   ├── 📄 Contact.tsx               # Contact form and info component
│   ├── 📄 Footer.tsx                # Footer component
│   ├── 📄 Hero.tsx                  # Hero/landing section component
│   ├── 📄 Navbar.tsx                # Navigation bar component
│   ├── 📄 Projects.tsx              # Projects showcase component
│   ├── 📄 ScrollToTop.tsx           # Scroll to top button component
│   └── 📄 Skills.tsx                # Skills and tech stack component
│
├── 📁 public/                       # Static assets (accessible via URL)
│   ├── 📁 img/                      # Project images folder
│   │   ├── 🖼️ p1.png                # Mars Research project image
│   │   ├── 🖼️ p2.png                # AMS project image
│   │   ├── 🖼️ p3.png                # Legion project image
│   │   └── 🖼️ p4.png                # Soltronic project image
│   └── 🖼️ ishan22.jpg (1).jpeg      # Your profile image
│
├── 📄 .eslintrc.json                # ESLint configuration
├── 📄 .gitignore                    # Git ignore file
├── 📄 next.config.js                # Next.js configuration
├── 📄 package.json                  # Project dependencies and scripts
├── 📄 postcss.config.js             # PostCSS configuration for Tailwind
├── 📄 README.md                     # Project documentation
├── 📄 SETUP_GUIDE.md                # Detailed setup instructions
├── 📄 tailwind.config.js            # Tailwind CSS configuration
└── 📄 tsconfig.json                 # TypeScript configuration

```

## 📋 File Descriptions

### Core Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Lists all project dependencies and npm scripts |
| `next.config.js` | Configuration for Next.js (image domains, etc.) |
| `tailwind.config.js` | Tailwind CSS theme, colors, fonts, animations |
| `tsconfig.json` | TypeScript compiler options |
| `postcss.config.js` | PostCSS plugins for Tailwind |
| `.eslintrc.json` | Code linting rules |
| `.gitignore` | Files to ignore in git repository |

### App Directory (`/app`)

| File | Purpose |
|------|---------|
| `layout.tsx` | Root layout wrapper, includes fonts and metadata |
| `page.tsx` | Main home page, imports all sections |
| `globals.css` | Global CSS styles, animations, custom classes |

### Components Directory (`/components`)

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `Navbar.tsx` | Navigation bar | Fixed position, mobile menu, smooth scroll |
| `Hero.tsx` | Landing section | Animated particles, profile image, CTA buttons |
| `About.tsx` | About section | Bio, statistics, download resume button |
| `Skills.tsx` | Skills showcase | Skill categories, tech stack icons |
| `Projects.tsx` | Projects gallery | Project cards with images and details |
| `Contact.tsx` | Contact section | Contact form, contact info, social links |
| `Footer.tsx` | Footer | Social links, copyright |
| `ScrollToTop.tsx` | Scroll button | Appears on scroll, smooth scroll to top |

### Public Directory (`/public`)

Contains all static assets that are publicly accessible:

- **Profile Image**: Your main profile photo
- **Project Images**: Screenshots of your projects
- Any other static assets (favicons, etc.)

## 🎯 Component Relationships

```
page.tsx (Main Entry Point)
│
├─→ Navbar.tsx (Fixed at top)
│
├─→ Hero.tsx (Section 1)
│
├─→ About.tsx (Section 2)
│
├─→ Skills.tsx (Section 3)
│
├─→ Projects.tsx (Section 4)
│
├─→ Contact.tsx (Section 5)
│
├─→ Footer.tsx (Bottom)
│
└─→ ScrollToTop.tsx (Floating button)
```

## 🔄 Data Flow

```
User Opens Website
       ↓
   layout.tsx (Loads fonts, metadata, global styles)
       ↓
   page.tsx (Renders all sections)
       ↓
   Individual Components (Render their content)
       ↓
   User Interacts (Navigation, forms, buttons)
```

## 📦 After `npm install`, Additional Folders:

```
nextjs-portfolio/
├── 📁 node_modules/        # Installed dependencies (auto-generated)
├── 📁 .next/               # Build output (auto-generated)
└── 📄 package-lock.json    # Locked dependency versions (auto-generated)
```

**Note**: These folders are auto-generated and should not be edited manually. They are included in `.gitignore`.

## 🎨 Styling Architecture

```
Tailwind CSS (utility classes)
       ↓
Custom Animations (defined in tailwind.config.js and globals.css)
       ↓
Component-level styles (inline Tailwind classes)
       ↓
Global styles (globals.css for app-wide styles)
```

## 🚀 Build Process

```
Source Code (.tsx, .css files)
       ↓
TypeScript Compilation
       ↓
Tailwind CSS Processing
       ↓
Next.js Optimization
       ↓
Production Build (.next folder)
```

## 📝 Customization Priority

When customizing, modify files in this order:

1. **Personal Info**: `Hero.tsx`, `About.tsx`, `Contact.tsx`, `Footer.tsx`
2. **Projects**: `Projects.tsx` + add images to `/public/img/`
3. **Skills**: `Skills.tsx`
4. **Styling**: `tailwind.config.js`, `globals.css`
5. **Configuration**: `next.config.js`, `package.json`

## 🔍 Finding Specific Content

| What to Update | File Location |
|----------------|---------------|
| Your name | `Hero.tsx`, `Navbar.tsx`, `Footer.tsx` |
| Your title/role | `Hero.tsx` |
| Your bio | `About.tsx` |
| Your skills | `Skills.tsx` |
| Your projects | `Projects.tsx` |
| Contact info | `Contact.tsx` |
| Social links | `Hero.tsx`, `Contact.tsx`, `Footer.tsx` |
| Colors | `tailwind.config.js` |
| Fonts | `layout.tsx`, `tailwind.config.js` |
| Metadata (SEO) | `layout.tsx` |
| Images | `/public/` directory |
