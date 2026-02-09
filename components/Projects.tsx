'use client'

import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'Nexa Ai Calling Agent',
      subtitle: 'AI Calling Agent  Web App',
      icon: 'fa-rocket',
      gradient: 'from-red-500 to-orange-500',
      url: 'https://nexacalling.com/',
      location: 'India-based project',
      techStack: 'React.js (Frontend), Python On Django (Backend)',
      description:
        'Nexa AI Calling Agent is an AI-powered voice automation platform designed for outbound calling and lead engagement. The system enables seamless voice interactions for sales processes and customer support automation.',
      technologies: [
        { name: 'React.js', icon: 'devicon-react-original', color: 'bg-blue-100 text-blue-800' },
        { name: 'Next.js', icon: 'devicon-nextjs-original', color: 'bg-black text-white' },
        { name: 'Python On Django', icon: 'devicon-django-plain', color: 'bg-red-100 text-red-800' },
        { name: 'Survey System', icon: 'devicon-google-plain', color: 'bg-purple-100 text-purple-800' },
      ],
      features: [],
      image: '/p1.png',
      borderColor: 'hover:border-primary',
      aos: 'fade-right',
    },
    {
      title: 'KRAFFIC',
      subtitle: 'AI Seo And Geo Audit Tool',
      icon: 'fa-user-clock',
      gradient: 'from-green-500 to-teal-500',
      url: 'https://www.kraffic.com/',
      location: '',
      techStack: '',
      description:
        'A performance-optimized MERN Stack Attendance Management System designed for real-time workforce tracking. It features secure Auth0 login, granular role-based authorization, and a mobile-first Bootstrap interface to support scalability, compliance, and business growth.',
      technologies: [
        { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: 'bg-green-100 text-green-800' },
        { name: 'Express.js', icon: 'devicon-express-original', color: 'bg-yellow-100 text-yellow-800' },
        { name: 'React.js', icon: 'devicon-react-original', color: 'bg-blue-100 text-blue-800' },
        { name: 'Next.js', icon: 'devicon-nextjs-original', color: 'bg-black text-white' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain', color: 'bg-green-100 text-green-800' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: 'bg-indigo-100 text-indigo-800' },
      ],
      features: [
        { icon: 'fa-check-circle', label: 'Real-time Tracking', color: 'text-green-500' },
        { icon: 'fa-shield-alt', label: 'Auth0 Security', color: 'text-blue-500' },
        { icon: 'fa-users-cog', label: 'Role-based Access', color: 'text-purple-500' },
        { icon: 'fa-mobile-alt', label: 'Responsive UI', color: 'text-orange-500' },
      ],
      image: '/p2.png',
      borderColor: 'hover:border-green-500',
      aos: 'fade-left',
    },
    {
      title: 'Augur Intelligence',
      subtitle: 'Brand Intelligence & Monitoring System',
      icon: 'fa-shopping-cart',
      gradient: 'from-purple-500 to-pink-500',
      url: 'https://www.augur.bot/',
      location: '',
      techStack: '',
      description:
        'A Brand Intelligence and Monitoring System built with Django, PostgreSQL, and Celery tracks real-time brand mentions using AI and NLP. It specializes in sentiment analysis, competitor insights, and actionable marketing intelligence for businesses.',
      technologies: [
        { name: 'Django', icon: 'devicon-django-plain', color: 'bg-green-100 text-green-800' },
        { name: 'Python', icon: 'devicon-python-plain', color: 'bg-yellow-100 text-yellow-800' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: 'bg-green-100 text-green-800' },
        { name: 'React', icon: 'devicon-react-original', color: 'bg-cyan-100 text-cyan-800' },
        { name: 'Next.js', icon: 'devicon-nextjs-original', color: 'bg-black text-white' },
        { name: 'Redis', icon: 'devicon-redis-plain', color: 'bg-red-100 text-red-800' },
      ],
      features: [
        { icon: 'fa-search', label: 'Real-Time Brand Mentions', color: 'text-blue-500' },
        { icon: 'fa-smile', label: 'Sentiment Analysis', color: 'text-green-500' },
        { icon: 'fa-chart-line', label: 'Trend & Competitor Insights', color: 'text-orange-500' },
        { icon: 'fa-tachometer-alt', label: 'Analytics Dashboard', color: 'text-purple-500' },
      ],
      image: '/p3.png',
      borderColor: 'hover:border-purple-500',
      aos: 'fade-right',
    },
    {
      title: 'Outcome Outing',
      subtitle: 'Service Provider Web App',
      icon: 'fa-bolt',
      gradient: 'from-yellow-500 to-orange-500',
      url: 'https://outcomeouting.com',
      location: '',
      techStack: '',
      description:
        'This website was professionally designed and developed by a freelance developer, delivering a fast, responsive, and SEO-optimized digital experience. Built to reflect brand identity, usability, and performance for real-world business growth.',
      technologies: [
        { name: 'Next.js', icon: 'devicon-nextjs-original', color: 'bg-black text-white' },
        { name: 'React', icon: 'devicon-react-original', color: 'bg-cyan-100 text-cyan-800' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', color: 'bg-sky-100 text-sky-800' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain', color: 'bg-green-100 text-green-800' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: 'bg-indigo-100 text-indigo-800' },
      ],
      features: [
        { icon: 'fa-calendar-alt', label: 'Service Booking', color: 'text-blue-500' },
        { icon: 'fa-user-shield', label: 'Role Management', color: 'text-green-500' },
        { icon: 'fa-chart-bar', label: 'Analytics', color: 'text-purple-500' },
        { icon: 'fa-clock', label: 'Real-time Updates', color: 'text-orange-500' },
      ],
      image: '/p4.png',
      borderColor: 'hover:border-yellow-500',
      aos: 'fade-left',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Recent <span className="text-primary">Projects</span>
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={`${tech.color} px-4 py-2 rounded-lg flex items-center`}>
                      <i className={`${tech.icon} mr-2 text-lg`}></i> {tech.name}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-semibold hover:underline"
                >
                  <i className="las la-external-link-alt mr-2"></i>
                  View Project Details
                </a>
              </div>

              <Image src={project.image} alt={project.title} width={600} height={400} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
