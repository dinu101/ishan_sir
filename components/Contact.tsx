'use client'

import { useState } from 'react'

// ===========================================
// CONTACT SECTION COMPONENT
// Contact form and information
// ===========================================

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)

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

  const handleDisabledClick = () => {
    alert('Please contact through social media. This option is currently not working.')
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have a project in mind? Let&apos;s work together!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
              >
                <div className="flex items-center">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-full flex items-center justify-center mr-4`}
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
          <div className="bg-white p-8 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            <form className="space-y-6">
              <input disabled className="w-full px-4 py-3 border rounded-lg" placeholder="Your Name" />
              <input disabled className="w-full px-4 py-3 border rounded-lg" placeholder="Your Email" />
              <input disabled className="w-full px-4 py-3 border rounded-lg" placeholder="Subject" />
              <textarea disabled className="w-full px-4 py-3 border rounded-lg" placeholder="Message"></textarea>

              <button
                type="button"
                onClick={handleDisabledClick}
                className="w-full bg-gray-400 text-white px-8 py-4 rounded-lg cursor-not-allowed shadow-lg flex items-center justify-center text-lg font-semibold"
              >
                <i className="las la-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
