import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id='contact' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-dark-900 dark:to-dark-800">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink">
            Get in Touch
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.
          </p>
          <form className="mt-8 space-y-6 bg-white dark:bg-dark-700 p-8 rounded-lg shadow-lg">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-primary-purple dark:bg-[#1A1A1A] focus:border-primary-purple focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-primary-purple dark:bg-[#1A1A1A] focus:border-primary-purple focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-300 placeholder-gray-500 text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-primary-purple dark:bg-[#1A1A1A] focus:border-primary-purple focus:z-10 sm:text-sm"
                  placeholder="Message"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink hover:from-primary-purple/90 hover:to-primary-pink/90 dark:hover:from-primary-orange/90 dark:hover:to-primary-pink/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-purple transition duration-150 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;