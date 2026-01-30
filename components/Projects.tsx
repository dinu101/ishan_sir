'use client'

import Image from 'next/image'

// ===========================================
// PROJECTS SECTION COMPONENT
// Showcase portfolio projects
// ===========================================

export default function Projects() {
  // Projects data array
  const projects = [
    {
      title: 'Mars Research',
      subtitle: 'Recruitment & Survey Web App',
      icon: 'fa-rocket',
      gradient: 'from-red-500 to-orange-500',
      location: 'US-based project',
      techStack: 'React.js (Frontend), Ruby on Rails (Backend)',
      description:
        'The Mars Research Project is a recruitment and survey platform designed for data collection and candidate evaluation. The platform enables seamless user interactions for recruitment processes and research-based surveys.',
      technologies: [
        { name: 'React.js', icon: 'fa-react', color: 'bg-blue-100 text-blue-800' },
        { name: 'Ruby on Rails', icon: 'fa-gem', color: 'bg-red-100 text-red-800' },
        { name: 'Survey System', icon: 'fa-poll', color: 'bg-purple-100 text-purple-800' },
      ],
      features: [],
      image: '/img/p1.png',
      borderColor: 'hover:border-primary',
      aos: 'fade-right',
    },
    {
      title: 'AMS',
      subtitle: 'Attendance Management System',
      icon: 'fa-user-clock',
      gradient: 'from-green-500 to-teal-500',
      location: '',
      techStack: '',
      description:
        'The MERN Stack Attendance Management System tracks employee attendance with real-time check-in/check-out functionality. Features Auth0 authentication, role-based access control, and responsive Bootstrap UI.',
      technologies: [
        { name: 'MongoDB', icon: 'fa-leaf', color: 'bg-green-100 text-green-800' },
        { name: 'Express.js', icon: 'fa-code', color: 'bg-yellow-100 text-yellow-800' },
        { name: 'React.js', icon: 'fa-react', color: 'bg-blue-100 text-blue-800' },
        { name: 'Node.js', icon: 'fa-node-js', color: 'bg-green-100 text-green-800' },
        { name: 'PostgreSQL', icon: 'fa-database', color: 'bg-indigo-100 text-indigo-800' },
      ],
      features: [
        { icon: 'fa-check-circle', label: 'Real-time Tracking', color: 'text-green-500' },
        { icon: 'fa-shield-alt', label: 'Auth0 Security', color: 'text-blue-500' },
        { icon: 'fa-users-cog', label: 'Role-based Access', color: 'text-purple-500' },
        { icon: 'fa-mobile-alt', label: 'Responsive UI', color: 'text-orange-500' },
      ],
      image: '/img/p2.png',
      borderColor: 'hover:border-green-500',
      aos: 'fade-left',
    },
    {
      title: 'Legion',
      subtitle: 'E-commerce Tender Web App',
      icon: 'fa-shopping-cart',
      gradient: 'from-purple-500 to-pink-500',
      location: '',
      techStack: '',
      description:
        'Full-stack MERN e-commerce application with PostgreSQL. Features Auth0 authentication, product browsing, cart management, and secure checkout with admin dashboard.',
      technologies: [
        { name: 'MERN Stack', icon: 'fa-layer-group', color: 'bg-green-100 text-green-800' },
        { name: 'PostgreSQL', icon: 'fa-database', color: 'bg-indigo-100 text-indigo-800' },
        { name: 'Auth0', icon: 'fa-shield-alt', color: 'bg-purple-100 text-purple-800' },
      ],
      features: [
        { icon: 'fa-box', label: 'Inventory Management', color: 'text-blue-500' },
        { icon: 'fa-credit-card', label: 'Secure Payments', color: 'text-green-500' },
        { icon: 'fa-shipping-fast', label: 'Order Tracking', color: 'text-orange-500' },
        { icon: 'fa-tachometer-alt', label: 'Admin Dashboard', color: 'text-purple-500' },
      ],
      image: '/img/p3.png',
      borderColor: 'hover:border-purple-500',
      aos: 'fade-right',
    },
    {
      title: 'Soltronic',
      subtitle: 'Service Provider Web App',
      icon: 'fa-bolt',
      gradient: 'from-yellow-500 to-orange-500',
      location: '',
      techStack: '',
      description:
        'Modern Next.js application for installers, shops, and service providers. Features authentication, role-based access, service booking, and analytics dashboard.',
      technologies: [
        { name: 'Next.js', icon: 'fa-bolt', color: 'bg-black text-white' },
        { name: 'PostgreSQL', icon: 'fa-database', color: 'bg-indigo-100 text-indigo-800' },
        { name: 'React', icon: 'fa-react', color: 'bg-blue-100 text-blue-800' },
      ],
      features: [
        { icon: 'fa-calendar-alt', label: 'Service Booking', color: 'text-blue-500' },
        { icon: 'fa-user-shield', label: 'Role Management', color: 'text-green-500' },
        { icon: 'fa-chart-bar', label: 'Analytics', color: 'text-purple-500' },
        { icon: 'fa-clock', label: 'Real-time Updates', color: 'text-orange-500' },
      ],
      image: '/img/p4.png',
      borderColor: 'hover:border-yellow-500',
      aos: 'fade-left',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Random floating shapes for projects section */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-red-300 rounded-full opacity-10 animate-float-random-1"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-green-300 rounded-full opacity-10 animate-float-random-2"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-purple-300 rounded-full opacity-15 animate-float-random-3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Recent <span className="text-primary">Projects</span>
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center`}
              data-aos={project.aos}
            >
              {/* Project Content */}
              <div className={index % 2 === 0 ? 'order-2 md:order-1' : 'order-2'}>
                {/* Project Header */}
                <div className="flex items-center mb-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center mr-3 shadow-lg`}
                  >
                    <i className={`fas ${project.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>

                {/* Project Subtitle */}
                <h4 className="text-lg text-primary mb-4 flex items-center">
                  <i className="las la-briefcase mr-2"></i>
                  {project.subtitle}
                </h4>

                {/* Project Details */}
                <div className="mb-4">
                  {project.location && (
                    <p className="text-gray-600 leading-relaxed mb-2">
                      <i className="las la-map-marker-alt text-red-500 mr-2"></i>
                      <strong>Location:</strong> {project.location}
                    </p>
                  )}
                  {project.techStack && (
                    <p className="text-gray-600 leading-relaxed mb-2">
                      <i className="las la-code text-blue-500 mr-2"></i>
                      <strong>Tech Stack:</strong> {project.techStack}
                    </p>
                  )}
                  <p className="text-gray-600 leading-relaxed">
                    {project.features.length === 0 && (
                      <i className="las la-info-circle text-green-500 mr-2"></i>
                    )}
                    {project.description}
                  </p>
                </div>

                {/* Project Features (if any) */}
                {project.features.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                    {project.features.map((feature, featIndex) => (
                      <div key={featIndex} className="flex items-center">
                        <i className={`fas ${feature.icon} ${feature.color} mr-2`}></i>
                        {feature.label}
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`${tech.color} px-4 py-2 rounded-lg text-sm flex items-center shadow-sm hover:shadow-md transition`}
                    >
                      <i className={`fas ${tech.icon} mr-2 text-lg`}></i>
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-primary hover:text-secondary transition font-semibold group"
                >
                  <i className="las la-external-link-alt mr-2 group-hover:translate-x-1 transition"></i>
                  View Project Details
                </a>
              </div>

              {/* Project Image */}
              <div className={index % 2 === 0 ? 'order-1 md:order-2' : 'order-1'}>
                <div
                  className={`rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300 border-4 border-transparent ${project.borderColor}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/600x400/3b82f6/ffffff?text=${project.title}`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
