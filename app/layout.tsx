import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

// ===========================================
// FONT CONFIGURATIONS
// ===========================================

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

// ===========================================
// METADATA CONFIGURATION
// ===========================================

export const metadata: Metadata = {
  title: 'Sohan Bheel - Full Stack Developer',
  description: 'Portfolio of Ishan Thakur - Passionate MERN Stack & React Native Developer with 2 years of experience building scalable, user-friendly applications',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React Native', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Sohan Bheel' }],
  creator: 'Sohan Bheel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sohanbheel.com',
    title: 'Sohan Bheel - Full Stack Developer',
    description: 'Portfolio of Sohan BHeel - MERN Stack & Django Developer',
    siteName: 'Sohan Bheel Portfolio',
  },
}

// ===========================================
// ROOT LAYOUT COMPONENT
// ===========================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        {/* Icons8 Line Awesome - Better alternative to Font Awesome */}
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />


        {/* AOS Animation Library */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  )
}
