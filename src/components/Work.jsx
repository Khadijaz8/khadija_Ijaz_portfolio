import React, { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Work = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "Resumer.ai",
      description: "A modern AI Resume Analyzer uses NLP to extract, analyze, and optimize resumes, providing job role predictions, skill recommendations, and recruiter insights.",
      technologies: ["Python", "API", "tailwind css", "MYSQL","HTML"],
      github: "https://github.com/Khadijaz8/Resumer",
            image: "/resume.png"
    },
    {
      title: "Ceaser Cipher",
      description: "A secure Developed a Caesar Cipher tool for encrypting and decrypting messages using shift-based substitution, enhancing cryptography learning.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Khadijaz8/PRODIGY_CS_01",
         image: "/ceaser.png"
 
        },
    {
      title: "Currency Converter",
      description: "Built a responsive currency converter for real-time currency conversion with live exchange rates and an interactive interface.",
      technologies: ["HTML", "CSS","JavaScript","API"],
      github: "https://github.com/Khadijaz8/currency-converter", 
      image: "/currency.png"
    },
    {
      title: "Ecommerce Store",
      description: "Developed a fully functional e-commerce store with a modern UI, product listings, secure authentication, and a seamless shopping experience.",
      technologies: ["HTML", "CSS","JavaScript","API","Node.js","Express.js","JWT"],
      github: "https://github.com/Khadijaz8/ecommerce-website", 
          image: "/ecommerc.png"
    },
    {
      title: "Tic Tac Toe Game",
      description: "Created a classic Tic-Tac-Toe game with an interactive UI, smooth gameplay, and intelligent game logic for player vs. player mode. Designed for an enjoyable experience across all devices.",
      technologies: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/Khadijaz8/tic-tac-toe", 
           image: "/tic.png"
    },
   
  ]

  return (
    <div id='project' className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-dark-900 dark:to-dark-800 py-20">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink">
            My Projects
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and experience in web development.
            Each project represents unique challenges and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-primary-purple/10 to-primary-pink/10 dark:from-primary-orange/10 dark:to-primary-pink/10 text-primary-purple dark:text-primary-orange rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github}
                    target='_blank'
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-purple dark:hover:text-primary-orange transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                                 </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/Khadijaz8?tab=repositories" target='_blank'>
          <button className="px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-pink text-white rounded-full hover:from-primary-pink hover:to-primary-purple transition-colors">
            See All Projects
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Work