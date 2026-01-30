'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ===========================================
// NAVBAR COMPONENT
// Responsive navigation bar with mobile menu
// ===========================================

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation links data
  const navLinks = [
    { href: '#home', icon: 'fa-home', label: 'Home' },
    { href: '#about', icon: 'fa-user', label: 'About' },
    { href: '#skills', icon: 'fa-tools', label: 'Skills' },
    { href: '#projects', icon: 'fa-project-diagram', label: 'Projects' },
    { href: '#contact', icon: 'fa-envelope', label: 'Contact' },
  ]

  return (
    <nav
      className={`bg-white fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-xl' : 'shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary flex items-center">
              <i className="las la-code mr-2"></i>
              Ishan Thakur
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition duration-300 flex items-center"
                >
                  <i className={`fas ${link.icon} mr-1`}></i> {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <i className="las la-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-white`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded"
            >
              <i className={`fas ${link.icon} mr-2`}></i>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
