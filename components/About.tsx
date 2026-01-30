'use client'

import Image from 'next/image'

// ===========================================
// ABOUT SECTION COMPONENT
// Personal information and statistics
// ===========================================

export default function About() {
  // Statistics data
  const stats = [
    { icon: 'fa-clock', value: '2+', label: 'Years Experience', color: 'bg-blue-50', iconColor: 'text-primary' },
    { icon: 'fa-project-diagram', value: '15+', label: 'Projects Done', color: 'bg-green-50', iconColor: 'text-green-600' },
    { icon: 'fa-smile', value: '10+', label: 'Happy Clients', color: 'bg-purple-50', iconColor: 'text-purple-600' },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="order-2 md:order-1" data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
              <i className="las la-code text-primary mr-3"></i>
              Full Stack Web Developer
            </h3>

            {/* About Description */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              Hi, I&apos;m Ishan Thakur, a passionate and detail-oriented MERN Stack
              and React Native Developer with 2 years of experience in building
              scalable, user-friendly, and high-performance mobile and web
              applications.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I specialize in creating seamless cross-platform mobile apps using
              React Native and developing robust backend systems with MERN Stack
              (MongoDB, Express.js, React, Node.js).
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              <i className="las la-lightbulb text-yellow-500 mr-2"></i>I thrive
              on solving complex problems and turning ideas into reality through
              clean, efficient, and maintainable code.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 ${stat.color} rounded-lg`}
                >
                  <i
                    className={`fas ${stat.icon} text-3xl ${stat.iconColor} mb-2`}
                  ></i>
                  <h4 className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Download Resume Button */}
            <a
              href="#"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="las la-download mr-2"></i>
              Download Resume
            </a>
          </div>

          {/* About Image */}
          <div
            className="order-1 md:order-2 flex justify-center"
            data-aos="fade-left"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary relative z-10">
                <Image
                  src="/ishan22.jpg (1).jpeg"
                  alt="Ishan Thakur"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://ui-avatars.com/api/?name=Ishan+Thakur&size=400&background=3b82f6&color=fff&bold=true'
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
