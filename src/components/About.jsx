import React from 'react';
import { motion } from 'framer-motion';
import aboutImg2 from "../assets/About2.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      
      {/* Main container with flex layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:pr-8 flex justify-center"
        >
          {/* Image container with max width */}
          <div className="max-w-md">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              src={aboutImg2}
              alt="About"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0"
        >
          <div className="flex flex-col space-y-6 max-w-xl">
            {/* Introduction */}
            <p className="text-neutral-300 leading-relaxed">
              A passionate software developer specializing in web development and artificial intelligence, with a strong grasp of core programming principles and modern technologies.
            </p>

            {/* Core Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-100">Expertise </h3>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">▹</span>
                  <span> Programming: Proficient in Python, C, and C++, with deep expertise in data structures and algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">▹</span>
                  <span> Frontend Development: Skilled in HTML5, CSS3, JavaScript, React, and Bootstrap for dynamic, user-centric interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">▹</span>
                  <span>Proficient with Data Analysis tools and design tools like Figma </span>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-100">Achievements</h3>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">▹</span>
                  <span>Certified from Premier instituties like Salesforce , Harvard, AWS,TCS,IBM and many more </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">▹</span>
                  <span>NPTEL Silver Medalist in Responsible AI Systems </span>
                </li>
              </ul>
            </div>

            {/* Professional Approach */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-100">Work Philosophy</h3>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">▹</span>
                  <span>Committed to writing clean, maintainable, and scalable code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">▹</span>
                  <span>Experienced in agile environments and version control using Git</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">▹</span>
                  <span>Passionate about continuous learning and staying updated with industry trends</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;