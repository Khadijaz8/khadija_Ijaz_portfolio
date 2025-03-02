import { useState, useEffect } from "react";
import { FaCode, FaLaptopCode, FaDatabase, FaRocket, FaChalkboardTeacher, FaShoppingCart } from "react-icons/fa";

const services = [
  { icon: <FaCode size={40} />, title: "Custom Web Development", desc: "Building modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, TypeScript, and React.js.", details: "We ensure your website is optimized for performance and SEO." },
  { icon: <FaLaptopCode size={40} />, title: "Frontend UI/UX Development", desc: "Creating visually appealing and highly interactive user interfaces with Tailwind CSS, ShadCN, and animations.", details: "Our designs are focused on user experience and accessibility." },
  { icon: <FaDatabase size={40} />, title: "Full-Stack MERN Development", desc: "Developing scalable applications with MongoDB, Express.js, React.js, and Node.js.", details: "We build robust backend systems and seamless frontend interfaces." },
  { icon: <FaRocket size={40} />, title: "Website Optimization & Performance", desc: "Improving website speed, SEO, and responsiveness for better user experience.", details: "Our optimization techniques ensure fast load times and high performance." },
  { icon: <FaChalkboardTeacher size={40} />, title: "Cybersecuity", desc: "Helping the world with developing secure websites.", details: "I offer web penetration testing to the bug bounty programms." },
  { icon: <FaShoppingCart size={40} />, title: "E-commerce & Business Websites", desc: "Developing online stores, business websites, and integrating payment gateways.", details: "We create secure and user-friendly e-commerce platforms." },
];

export default function Services() {
  const handleMouseEnter = (e) => {
    e.currentTarget.classList.add('scale-105');
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.classList.remove('scale-105');
  };

  return (
    <div id="service" className="min-h-screen py-16 px-6 bg-gradient-to-r from-primary-purple/10 to-primary-pink/10 dark:from-dark-900 dark:to-dark-800 text-primary-purple dark:text-primary-orange">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r mb-11 from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink">
          My Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-[#1F1F1F] rounded-xl shadow-lg flex flex-col items-center border border-[#e0e0ff] dark:border-[#333] transition-transform duration-300"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-primary-purple dark:text-primary-orange mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary-purple dark:text-primary-orange">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">{service.desc}</p>
              <p className="text-gray-500 dark:text-gray-400 text-center mt-2">{service.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
