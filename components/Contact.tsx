'use client'

import { useState } from 'react'

// ===========================================
// CONTACT SECTION COMPONENT
// Contact form and information
// ===========================================

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)

  // Contact information data
  const contactInfo = [
    {
      icon: 'fa-phone-alt',
      title: 'Phone',
      content: '+91 8239239249',
      href: 'tel:+918239239249',
      gradient: 'from-green-400 to-blue-500',
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      content: 'mm8239239249@gmail.com',
      href: 'mailto:mm8239239249@gmail.com',
      gradient: 'from-red-400 to-pink-500',
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Address',
      content: 'Dadabari, Kota, Rajasthan',
      href: '#',
      gradient: 'from-purple-400 to-indigo-500',
    },
  ]

  // Social media links
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/sohan-bbb64b233',
      icon: 'fa-linkedin',
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
    },
    {
      href: 'https://github.com/SohanBheel',
      icon: 'fa-github',
      bgColor: 'bg-gray-800',
      hoverColor: 'hover:bg-gray-900',
    },
    {
      href: 'https://www.instagram.com/ishan_kumar178',
      icon: 'fa-instagram',
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
      hoverColor: 'hover:opacity-90',
    },
    {
      href: '#',
      icon: 'fa-whatsapp',
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
    },
  ]

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    // Create mailto link
    const mailtoLink = `mailto:mm8239239249@gmail.com?subject=${encodeURIComponent(
      subject as string
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`

    // Open email client
    window.location.href = mailtoLink

    // Show success message
    setShowSuccess(true)

    // Reset form
    e.currentTarget.reset()

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          data-aos="fade-up"
        >
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p
          className="text-center text-gray-600 mb-12"
          data-aos="fade-up"
        >
          Have a project in mind? Let&apos;s work together!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-full flex items-center justify-center mr-4 animate-pulse-glow`}
                  >
                    <i className={`fas ${info.icon} text-2xl text-white`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{info.title}</h4>
                    <p className="text-gray-600">
                      {info.href.startsWith('#') ? (
                        info.content
                      ) : (
                        <a
                          href={info.href}
                          className="hover:text-primary transition break-all"
                        >
                          {info.content}
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${link.bgColor} rounded-full flex items-center justify-center text-white ${link.hoverColor} transition transform hover:scale-110`}
                  >
                    <i className={`fab ${link.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-white p-8 rounded-lg shadow-2xl"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <i className="las la-user text-primary mr-2"></i>Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <i className="las la-envelope text-primary mr-2"></i>Your
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <i className="las la-tag text-primary mr-2"></i>Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Project Discussion"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <i className="las la-comment text-primary mr-2"></i>Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center text-lg font-semibold"
              >
                <i className="las la-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <i className="las la-check-circle mr-2"></i>
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
