'use client'

import { useState, useEffect } from 'react'

// ===========================================
// SCROLL TO TOP COMPONENT
// Button to scroll back to top of page
// ===========================================

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <i className="las la-arrow-up text-xl"></i>
        </button>
      )}
    </>
  )
}
