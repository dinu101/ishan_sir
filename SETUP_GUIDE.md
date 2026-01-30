# 🚀 Quick Start Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** (optional, for version control)

## Step-by-Step Setup

### 1. Install Dependencies

Navigate to the project directory and install all required packages:

```bash
cd nextjs-portfolio
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- AOS (Animate On Scroll)
- All other dependencies

### 2. Add Your Images

**Important**: You need to add your images to the `public/` directory:

1. **Profile Image**:
   - Place your profile photo in `/public/` directory
   - Name it: `ishan22.jpg (1).jpeg`
   - Recommended size: 400x400px or larger (square)

2. **Project Images**:
   - Create a folder: `/public/img/`
   - Add your project screenshots:
     - `p1.png` - Mars Research project
     - `p2.png` - AMS project
     - `p3.png` - Legion project
     - `p4.png` - Soltronic project
   - Recommended size: 600x400px

### 3. Customize Your Information

#### Update Personal Details

**components/Hero.tsx**:
- Line 49-51: Update your name
- Line 57-59: Update your title
- Line 62-65: Update your description
- Lines 90-104: Update social media links

**components/About.tsx**:
- Lines 37-52: Update your bio and description
- Lines 17-21: Update statistics (years, projects, clients)

**components/Contact.tsx**:
- Lines 16-32: Update contact information (phone, email, address)
- Lines 35-54: Update social media links
- Line 121: Update email for form submissions

**components/Footer.tsx**:
- Line 40: Update copyright name

#### Update Projects

**components/Projects.tsx**:
- Lines 13-136: Update all project details
- For each project, update:
  - Title, subtitle, description
  - Technologies used
  - Features (if applicable)
  - Image path

#### Update Skills

**components/Skills.tsx**:
- Lines 10-68: Update skill categories
- Lines 71-86: Update technology stack

### 4. Run Development Server

Start the development server:

```bash
npm run dev
```

Open your browser and visit: [http://localhost:3000](http://localhost:3000)

You should see your portfolio running!

### 5. Testing

Test your portfolio:
- ✅ Check all sections load correctly
- ✅ Test navigation links
- ✅ Test contact form
- ✅ Test responsive design (mobile, tablet, desktop)
- ✅ Check all images load
- ✅ Test social media links

## 🎨 Customization Options

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#3b82f6',    // Your brand color
  secondary: '#1e40af',  // Secondary color
}
```

### Change Fonts

Edit `app/layout.tsx`:

```javascript
// Replace Poppins or Inter with your preferred fonts
const poppins = Poppins({ ... })
const inter = Inter({ ... })
```

### Add New Sections

1. Create a new component in `/components/`
2. Import it in `app/page.tsx`
3. Add it to the main render

## 📦 Building for Production

### Build the Project

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Run Production Build Locally

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the production version.

## 🚀 Deployment

### Deploy to Vercel (Easiest)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Detect it's a Next.js project
- Install dependencies
- Build the project
- Deploy it

You'll get a live URL like: `https://your-portfolio.vercel.app`

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Custom Domain

After deployment, you can add a custom domain:
- **Vercel**: Project Settings → Domains
- **Netlify**: Site Settings → Domain Management

## 🔧 Troubleshooting

### Images Not Loading

- Ensure images are in the `/public/` directory
- Check file names match exactly (including extensions)
- File names are case-sensitive

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### TypeScript Errors

If you see TypeScript errors:
```bash
# Check TypeScript
npm run type-check

# Or ignore and build anyway
npm run build -- --no-lint
```

### Port Already in Use

If port 3000 is busy:
```bash
# Use a different port
npm run dev -- -p 3001
```

## 📝 Common Tasks

### Add a New Project

1. Open `components/Projects.tsx`
2. Add a new object to the `projects` array
3. Add the project image to `/public/img/`

### Update Social Links

1. Open the component (Hero, Contact, or Footer)
2. Find the `socialLinks` array
3. Update URLs

### Change Email

1. Open `components/Contact.tsx`
2. Update line 121: `mailto:your-email@example.com`
3. Update line 31: email display

## 🆘 Getting Help

If you encounter issues:

1. Check the console for errors (F12 in browser)
2. Read the error message carefully
3. Search for the error on Google or Stack Overflow
4. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

## ✅ Checklist Before Deployment

- [ ] All personal information updated
- [ ] All images added and loading
- [ ] Contact form working
- [ ] Social media links correct
- [ ] All sections tested
- [ ] Mobile responsive checked
- [ ] No console errors
- [ ] Build completes successfully
- [ ] Custom domain configured (optional)
- [ ] Analytics added (optional)

Good luck with your portfolio! 🎉
