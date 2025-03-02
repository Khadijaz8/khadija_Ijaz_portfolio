import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white to-gray-100 dark:from-dark-900 dark:to-dark-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-4 mb-6">
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
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Khadija Ijaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;