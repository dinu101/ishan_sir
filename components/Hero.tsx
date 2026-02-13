'use client'

import { useEffect } from 'react'
import Image from 'next/image'

// ===========================================
// HERO SECTION COMPONENT
// Landing section with animated background
// ===========================================

export default function Hero() {

  // Create animated particles in the background
  useEffect(() => {
    const particlesContainer = document.getElementById('particles')
    if (!particlesContainer) return

    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 20 + 's'
      particle.style.animationDuration = Math.random() * 10 + 10 + 's'
      particlesContainer.appendChild(particle)
    }
  }, [])

  // ==============================
  // WhatsApp Configuration
  // ==============================
  const phoneNumber = "918239239249" // Replace with your number (no +)
  const whatsappMessage = encodeURIComponent(
    "Hello Sohan, I visited your portfolio and would like to discuss a project with you."
  )

  // Social media links
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/sohan-bbb64b233',
      icon: 'fa-linkedin',
      color: 'hover:text-blue-600',
    },
    {
      href: 'https://github.com/SohanBheel',
      icon: 'fa-github',
      color: 'hover:text-gray-900',
    },
    {
      href: 'https://www.instagram.com/ishan_kumar178',
      icon: 'fa-instagram',
      color: 'hover:text-pink-600',
    },
    {
      href: `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      icon: 'fa-whatsapp',
      color: 'hover:text-green-600',
    },
  ]

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
    >

      {/* Animated particles */}
      <div className="particles" id="particles"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-float-random-1"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400 rounded-full opacity-15 animate-float-random-2"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-pink-400 rounded-full opacity-20 animate-float-random-3"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-indigo-400 rounded-full opacity-25 animate-float-random-1"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-cyan-400 rounded-full opacity-15 animate-float-random-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">

          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary animate-pulse-glow animate-float">
              <Image
                src="/hero1.jpeg"
                alt="Sohan Bheel"
                width={200}
                height={200}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://ui-avatars.com/api/?name=Sohan+Bheel&size=200&background=3b82f6&color=fff&bold=true'
                }}
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hello, I'm{" "}
            <span className="text-primary bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Sohan Bheel
            </span>
          </h1>

          {/* Subtitle */}
          <div className="flex items-center justify-center mb-6">
            <i className="las la-laptop-code text-3xl text-primary mr-3"></i>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold">
              Full Stack Web Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Django | MERN | App Development — Turning Ideas Into Scalable,
            High-Impact Digital Products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              <i className="las la-briefcase mr-2"></i>
              View Portfolio
            </a>

            <a
              href="#contact"
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg border-2 border-primary hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              <i className="las la-paper-plane mr-2"></i>
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 ${link.color} transition duration-300 transform hover:scale-125`}
              >
                <i className={`fab ${link.icon} text-3xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary">
          <i className="las la-chevron-down text-3xl"></i>
        </a>
      </div>

    </section>
  )
}
