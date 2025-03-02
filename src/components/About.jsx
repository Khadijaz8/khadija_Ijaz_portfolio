import React, { useState, useEffect } from 'react'
import { FaCode, FaReact, FaJs, FaTools } from 'react-icons/fa'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    {
      icon: <FaReact />,
      title: 'Frontend Development',
      description: 'Proficient in React.js with experience using Redux, React Router, and modern hooks for building responsive user interfaces.'
    },
    {
      icon: <FaJs />,
      title: 'JavaScript/TypeScript',
      description: 'Strong foundation in JavaScript/TypeScript development, implementing modern ES6+ features to create clean, maintainable code.'
    },
    {
      icon: <FaCode />,
      title: 'UI Libraries & Frameworks',
      description: 'Experience with Tailwind CSS, Material UI, and Bootstrap for creating polished and responsive web designs.'
    },
    {
      icon: <FaTools />,
      title: 'Backend Basics',
      description: 'Basic knowledge of backend development, capable of working with APIs and simple server-side functionality.'
    }
  ]

  return (
    <div id='about' className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-dark-900 dark:to-dark-800 py-20">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink">
            About Me
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I am a passionate MERN stack developer with experience in building dynamic, responsive, and scalable web applications. With a keen eye for clean code and intuitive user experiences, I specialize in React, Node.js, MongoDB, and Express to create seamless digital solutions. Always eager to learn and innovate, I thrive on turning ideas into functional, high-performing web applications.
Let’s build something amazing together! 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group p-6 bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-primary-purple dark:text-primary-orange group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About