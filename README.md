# Ishan Thakur - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Fully Responsive**: Works seamlessly on all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **AOS Animations**: Beautiful scroll animations
- **SEO Friendly**: Optimized for search engines

## 📂 Project Structure

```
nextjs-portfolio/
├── app/
│   ├── globals.css          # Global styles and custom animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact form and information
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero/landing section
│   ├── Navbar.tsx            # Navigation bar
│   ├── Projects.tsx          # Projects showcase
│   ├── ScrollToTop.tsx       # Scroll to top button
│   └── Skills.tsx            # Skills and technology stack
├── public/
│   ├── img/                  # Project images
│   │   ├── p1.png
│   │   ├── p2.png
│   │   ├── p3.png
│   │   └── p4.png
│   └── ishan22.jpg (1).jpeg  # Profile image
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🛠️ Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Typed JavaScript for better code quality
- **Tailwind CSS**: Utility-first CSS framework
- **AOS**: Animate On Scroll library
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins and Inter fonts

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your images**
   - Place your profile image in the `public/` directory as `ishan22.jpg (1).jpeg`
   - Place your project screenshots in `public/img/` as `p1.png`, `p2.png`, `p3.png`, `p4.png`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

1. **Navbar.tsx**: Update name and navigation links
2. **Hero.tsx**: Update name, title, description, and social links
3. **About.tsx**: Update bio, experience, and statistics
4. **Skills.tsx**: Add/remove skills and technologies
5. **Projects.tsx**: Update project details and images
6. **Contact.tsx**: Update contact information
7. **Footer.tsx**: Update footer text

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#3b82f6',    // Change primary color
  secondary: '#1e40af',  // Change secondary color
}
```

### Update Fonts

Edit `app/layout.tsx` to change fonts or add new ones.

## 📱 Sections

1. **Navigation**: Fixed navbar with smooth scroll links
2. **Hero**: Landing section with profile image and CTA buttons
3. **About**: Personal information and statistics
4. **Skills**: Technical skills and technology stack
5. **Projects**: Portfolio projects showcase
6. **Contact**: Contact form and information
7. **Footer**: Social links and copyright

## 🎨 Animations

- **AOS**: Scroll-triggered animations
- **Custom animations**: Float, gradient, pulse-glow effects
- **Hover effects**: Scale, translate, and color transitions

## 📧 Contact Form

The contact form uses `mailto:` to open the user's default email client. To integrate with a backend service:

1. Create an API route in `app/api/contact/route.ts`
2. Update the form submission in `Contact.tsx`
3. Add email service (SendGrid, Nodemailer, etc.)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

### Deploy to other platforms

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Ishan Thakur**
- LinkedIn: [Profile](https://www.linkedin.com/in/sohan-bbb64b233)
- GitHub: [SohanBheel](https://github.com/SohanBheel)
- Instagram: [@ishan_kumar178](https://www.instagram.com/ishan_kumar178)
- Email: mm8239239249@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Font Awesome for the icon library
- AOS library for scroll animations
