'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // 1. Setup your details
  const phoneNumber = "918239239249"; 
  const message = "Hi Sohan, I saw your portfolio and would like to discuss a project with you!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/sohan-bbb64b233',
      icon: 'fa-linkedin',
      hoverColor: 'hover:text-blue-400',
    },
    {
      href: 'https://github.com/SohanBheel',
      icon: 'fa-github',
      hoverColor: 'hover:text-white',
    },
    {
      href: 'https://www.instagram.com/ishan_kumar178',
      icon: 'fa-instagram',
      hoverColor: 'hover:text-pink-400',
    },
    {
      href: whatsappUrl, // 👈 Updated Link
      icon: 'fa-whatsapp',
      hoverColor: 'hover:text-green-400',
      disabled: false,    // 👈 Set to false
    },
  ]

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 flex items-center justify-center">
            <i className="las la-code mr-2 text-primary"></i>
            Sohan Bheel
          </h2>

          <p className="text-gray-400 mb-6 flex items-center justify-center">
            <i className="las la-rocket mr-2 text-primary"></i>
            Your Complete Web Solution
          </p>

          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (link.disabled) {
                    e.preventDefault()
                    alert('WhatsApp contact option is currently disabled.')
                  }
                }}
                className={`text-gray-400 ${link.hoverColor} transition duration-300 transform hover:scale-125 ${
                  link.disabled ? 'opacity-40 cursor-not-allowed' : ''
                }`}
              >
                <i className={`fab ${link.icon} text-3xl`}></i>
              </a>
            ))}
          </div>

          <p className="text-gray-500 text-sm flex items-center justify-center">
            <i className="lar la-copyright mr-2"></i>
            Copyright © {currentYear} Sohan. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}