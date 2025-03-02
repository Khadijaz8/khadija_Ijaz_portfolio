import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div id='home' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-dark-900 dark:to-dark-800">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink animate-gradient">
            Hi, I'm Khadija Ijaz
          </h1>
          
          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
          I am a MERN Stack Developer passionate about building scalable and secure web applications.
            <span className="hidden sm:inline">
           With expertise in MongoDB, Express.js, React.js, and Node.js, I create efficient and user-friendly digital experiences.
I also have a strong interest in cybersecurity and web penetration testing, ensuring robust and secure applications. Always eager to learn and innovate! 
            </span>
                      </p>

          <div className="mt-10 flex justify-center gap-4">
            <a href="https://github.com/Khadijaz8" target='_blank' className="group relative p-2 rounded-full bg-gradient-to-r from-primary-purple/20 to-primary-pink/20 dark:from-primary-orange/20 dark:to-primary-pink/20 hover:from-primary-purple/30 hover:to-primary-pink/30 dark:hover:from-primary-orange/30 dark:hover:to-primary-pink/30 transition-all duration-300">
              <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-purple dark:group-hover:text-primary-orange transform group-hover:rotate-12 transition-all duration-300" />
              
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-gray-600 dark:text-gray-400 transition-opacity duration-300">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/khadijaijaz8" target='_blank' className="group relative p-2 rounded-full bg-gradient-to-r from-primary-purple/20 to-primary-pink/20 dark:from-primary-orange/20 dark:to-primary-pink/20 hover:from-primary-purple/30 hover:to-primary-pink/30 dark:hover:from-primary-orange/30 dark:hover:to-primary-pink/30 transition-all duration-300">
              <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-purple dark:group-hover:text-primary-orange transform group-hover:rotate-12 transition-all duration-300" />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-gray-600 dark:text-gray-400 transition-opacity duration-300">LinkedIn</span>
            </a>
            <a href="https://www.facebook.com/share/14atDT4zx6/?mibextid=qi2Omg" target='_blank' className="group relative p-2 rounded-full bg-gradient-to-r from-primary-purple/20 to-primary-pink/20 dark:from-primary-orange/20 dark:to-primary-pink/20 hover:from-primary-purple/30 hover:to-primary-pink/30 dark:hover:from-primary-orange/30 dark:hover:to-primary-pink/30 transition-all duration-300">
              <FaFacebook className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-purple dark:group-hover:text-primary-orange transform group-hover:rotate-12 transition-all duration-300" />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-gray-600 dark:text-gray-400 transition-opacity duration-300">Facebook</span>
            </a>
                     </div>

          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto px-6 py-2 text-base font-medium text-white bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(195,55,100,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,126,95,0.3)]"
            >
              <span className="relative z-10">Download Resume</span>
            </a>
            <a
              href="mailto:khadijaijaz24680@gmail.com"
              className="w-full sm:w-auto px-6 py-2 text-base font-medium border-2 border-primary-purple dark:border-primary-orange text-primary-purple dark:text-primary-orange rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(195,55,100,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,126,95,0.3)]"
            >
              <span className="relative z-10">Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero