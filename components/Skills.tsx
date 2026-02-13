'use client'

// ===========================================
// SKILLS SECTION COMPONENT
// Display technical skills and technology stack
// ===========================================

export default function Skills() {
  // Main skill categories with detailed information
  const skillCategories = [
    {
      title: 'Django Stack',
      description:
        'Django, Django REST Framework, PostgreSQL, and React for building secure, scalable, and API-driven web applications.',
      gradient: 'from-emerald-400 to-teal-500',
      icon: 'devicon-django-plain',
      technologies: [
        { icon: 'devicon-django-plain', name: 'Django', color: 'text-green-700' },
        { icon: 'devicon-python-plain', name: 'Python', color: 'text-yellow-600' },
        { icon: 'devicon-react-original', name: 'React', color: 'text-cyan-500' },
        { icon: 'devicon-postgresql-plain', name: 'PostgreSQL', color: 'text-blue-600' },
        { icon: 'devicon-redis-plain', name: 'Redis', color: 'text-red-500' },
      ],
      delay: 0,
    }
    ,
    {
      title: 'MERN Stack',
      description:
        'MongoDB, Express.js, React.js, Node.js for building fast, scalable, and dynamic web applications with modern UIs.',
      gradient: 'from-green-400 to-cyan-500',
      icon: 'devicon-react-original',
      technologies: [
        { icon: 'devicon-react-original', name: 'React', color: 'text-cyan-500' },
        { icon: 'devicon-nodejs-plain', name: 'Node.js', color: 'text-green-600' },
        { icon: 'devicon-mongodb-plain', name: 'MongoDB', color: 'text-green-700' },
        { icon: 'devicon-express-original', name: 'Express.js', color: 'text-gray-700' },
      ],
      delay: 100,
    }
    ,
    {
      title: 'App Development',
      description:
        'We build fast, secure, and scalable applications with intuitive UI/UX for startups and businesses.',
      gradient: 'from-cyan-400 to-blue-500',
      icon: 'devicon-android-plain', // ✅ Devicon icon
      technologies: [
        { icon: 'devicon-react-original', name: 'React / React Native', color: 'text-cyan-500' },
        { icon: 'devicon-android-plain', name: 'Android', color: 'text-green-600' },
        { icon: 'devicon-kotlin-plain', name: 'Kotlin', color: 'text-purple-600' },
        { icon: 'devicon-nodejs-plain', name: 'Node.js', color: 'text-green-600' },
        { icon: 'devicon-firebase-plain', name: 'Firebase', color: 'text-yellow-500' },
      ],
      delay: 100,
    }

    ,
    {
      title: 'AI / ML & Chatbot Integration',
      description:
        'Intelligent AI chatbots and ML integrations using NLP, APIs, and automation to improve support, sales, and engagement.',
      gradient: 'from-fuchsia-400 to-violet-500',
      icon: 'devicon-python-plain',
      technologies: [
        { icon: 'devicon-python-plain', name: 'Python', color: 'text-blue-500' },
        { icon: 'devicon-tensorflow-original', name: 'TensorFlow', color: 'text-orange-500' },
        { icon: 'devicon-pytorch-original', name: 'PyTorch', color: 'text-red-500' },
        { icon: 'devicon-openai-plain', name: 'OpenAI / LLMs', color: 'text-gray-700' },
      ],
      delay: 300,
    }

  ]

  // Technology stack icons
 const techStack = [
  // 🔹 Core Web Fundamentals
  { icon: 'devicon-html5-plain', name: 'HTML5', color: 'text-orange-600' },
  { icon: 'devicon-css3-plain', name: 'CSS3', color: 'text-blue-600' },
  { icon: 'devicon-javascript-plain', name: 'JavaScript', color: 'text-yellow-500' },
  { icon: 'devicon-typescript-plain', name: 'TypeScript', color: 'text-red-600' },

  // 🔹 Frontend Frameworks & UI
  { icon: 'devicon-react-original', name: 'React.js', color: 'text-cyan-500' },
  { icon: 'devicon-nextjs-plain', name: 'Next.js', color: 'text-black dark:text-white' },
  { icon: 'devicon-angularjs-plain', name: 'Angular', color: 'text-red-500' },
  { icon: 'devicon-bootstrap-plain', name: 'Bootstrap', color: 'text-purple-600' },
  { icon: 'devicon-tailwindcss-plain', name: 'Tailwind', color: 'text-sky-500' },

  // 🔹 Backend & Runtime
  { icon: 'devicon-nodejs-plain', name: 'Node.js', color: 'text-green-600' },
  { icon: 'devicon-python-plain', name: 'Python', color: 'text-blue-500' },
  { icon: 'devicon-django-plain', name: 'Django', color: 'text-green-700' },

  // 🔹 Databases & Caching
  { icon: 'devicon-mongodb-plain', name: 'MongoDB', color: 'text-green-600' },
  { icon: 'devicon-postgresql-plain', name: 'PostgreSQL', color: 'text-blue-700' },
  { icon: 'devicon-redis-plain-wordmark', name: 'Redis', color: 'text-red-600' },

  // 🔹 Dev Tools & Package Managers
  { icon: 'devicon-git-plain', name: 'Git', color: 'text-red-600' },
  { icon: 'devicon-github-original', name: 'GitHub', color: 'text-gray-800' },
  { icon: 'devicon-npm-original-wordmark', name: 'NPM', color: 'text-red-600' },
  { icon: 'devicon-docker-plain', name: 'Docker', color: 'text-blue-500' },

  // 🔹 Cloud / Infrastructure
  { icon: 'devicon-amazonwebservices-plain', name: 'AWS', color: 'text-orange-500' },
];

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
