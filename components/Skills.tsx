'use client'

// ===========================================
// SKILLS SECTION COMPONENT
// Display technical skills and technology stack
// ===========================================

export default function Skills() {
  // Main skill categories with detailed information
  const skillCategories = [
    {
      title: 'MERN Stack',
      description:
        'MongoDB, Express.js, React.js, Node.js for scalable, fast, and dynamic web applications with RESTful APIs.',
      gradient: 'from-green-400 to-blue-500',
      icon: 'fa-node-js',
      technologies: [
        { icon: 'fa-node-js', name: 'Node.js', color: 'text-green-600' },
        { icon: 'fa-react', name: 'React', color: 'text-blue-500' },
        { icon: 'fa-database', name: 'MongoDB', color: 'text-green-700' },
      ],
      delay: 0,
    },
    {
      title: 'MEAN Stack',
      description:
        'MongoDB, Express.js, Angular, Node.js for scalable, dynamic applications with responsive UIs.',
      gradient: 'from-red-400 to-pink-500',
      icon: 'fa-angular',
      technologies: [
        { icon: 'fa-angular', name: 'Angular', color: 'text-red-600' },
        { icon: 'fa-node-js', name: 'Node.js', color: 'text-green-600' },
        { icon: 'fa-leaf', name: 'MongoDB', color: 'text-green-700' },
      ],
      delay: 100,
    },
    {
      title: 'React Native',
      description:
        'Cross-platform mobile apps for iOS and Android with a single codebase using React Native framework.',
      gradient: 'from-blue-400 to-cyan-500',
      icon: 'fa-react',
      technologies: [
        { icon: 'fa-react', name: 'React Native', color: 'text-blue-500' },
        { icon: 'fa-apple', name: 'iOS', color: 'text-gray-800' },
        { icon: 'fa-android', name: 'Android', color: 'text-green-600' },
      ],
      delay: 200,
    },
    {
      title: 'Backend Development',
      description:
        'Node.js & Express.js REST APIs with MongoDB & PostgreSQL, JWT authentication, and Auth0 security.',
      gradient: 'from-purple-400 to-indigo-500',
      icon: 'fa-server',
      technologies: [
        { icon: 'fa-node-js', name: 'Node.js', color: 'text-green-600' },
        { icon: 'fa-database', name: 'PostgreSQL', color: 'text-blue-600' },
        { icon: 'fa-shield-alt', name: 'Security', color: 'text-indigo-600' },
      ],
      delay: 300,
    },
  ]

  // Technology stack icons
  const techStack = [
    { icon: 'fa-html5', name: 'HTML5', color: 'text-orange-600' },
    { icon: 'fa-css3-alt', name: 'CSS3', color: 'text-blue-600' },
    { icon: 'fa-js', name: 'JavaScript', color: 'text-yellow-500' },
    { icon: 'fa-react', name: 'React.js', color: 'text-cyan-500' },
    { icon: 'fa-node-js', name: 'Node.js', color: 'text-green-600' },
    { icon: 'fa-angular', name: 'Angular', color: 'text-red-600' },
    { icon: 'fa-database', name: 'MongoDB', color: 'text-green-700' },
    { icon: 'fa-database', name: 'PostgreSQL', color: 'text-blue-700' },
    { icon: 'fa-git-alt', name: 'Git', color: 'text-red-600' },
    { icon: 'fa-github', name: 'GitHub', color: 'text-gray-800' },
    { icon: 'fa-docker', name: 'Docker', color: 'text-blue-500' },
    { icon: 'fa-aws', name: 'AWS', color: 'text-orange-500' },
    { icon: 'fa-python', name: 'Python', color: 'text-blue-500' },
    { icon: 'fa-bootstrap', name: 'Bootstrap', color: 'text-purple-600' },
    { icon: 'fa-npm', name: 'NPM', color: 'text-red-600' },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          data-aos="fade-up"
        >
          My <span className="text-primary">Skills</span>
        </h2>
        <p
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <i className="las la-rocket text-primary mr-2"></i>
          Full-Stack Development – Building scalable web apps using MERN Stack,
          Next.js, and Angular with optimized performance.
        </p>

        {/* Main Skill Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 glow-border"
              data-aos="fade-up"
              data-aos-delay={skill.delay}
            >
              {/* Skill Icon */}
              <div
                className={`w-20 h-20 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto transform hover:rotate-12 transition duration-300 shadow-lg`}
              >
                <i className={`fab ${skill.icon} text-4xl text-white`}></i>
              </div>

              {/* Skill Title */}
              <h3 className="text-xl font-bold text-center mb-3">
                {skill.title}
              </h3>

              {/* Skill Description */}
              <p className="text-gray-600 text-sm leading-relaxed text-center mb-4">
                {skill.description}
              </p>

              {/* Technology Icons */}
              <div className="mt-4 flex justify-center space-x-3 items-center">
                {skill.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="group relative">
                    <i
                      className={`fab ${tech.icon} text-3xl ${tech.color} transform hover:scale-125 transition duration-300`}
                      title={tech.name}
                    ></i>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack Section */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-center mb-8">
            <i className="las la-code text-primary mr-2"></i>
            Technology Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-110 text-center group"
              >
                <i
                  className={`fab ${tech.icon} text-5xl ${tech.color} mb-3 group-hover:animate-bounce`}
                ></i>
                <p className="text-sm font-semibold text-gray-700">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
