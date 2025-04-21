import React from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleGetInTouch = () => {
    // Construct the Gmail URL with a pre-filled draft
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      CONTACT.email
    )}`;
    window.open(gmailUrl, "_blank"); // Open in a new tab
  };

  return (
    <motion.div
      className="border-b border-neutral-900 pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.h1 variants={fadeInUp} className="my-10 text-center text-4xl">
        Contact Me
      </motion.h1>

      {/* Main content container with two cards */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-neutral-800/50 rounded-lg p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <h2 className="text-2xl mb-4 text-neutral-200 font-semibold">
              Contact Address
            </h2>
            <div className="space-y-3 text-neutral-400">
              <p>{CONTACT.address}</p>
              <p>{CONTACT.phoneNo}</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {CONTACT.email}
              </a>
              <button
                onClick={handleGetInTouch}
                className="inline-block bg-neutral-700 hover:bg-neutral-600 text-neutral-200 px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 mt-4"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-neutral-800/50 rounded-lg p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col justify-between"
          >
            <h2 className="text-2xl mb-4 text-neutral-200 font-semibold">
              Check Out My Resume
            </h2>
            <div>
              <a
                href="https://ibrahimkhan-resume.tiiny.site"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-neutral-700 hover:bg-neutral-600 text-neutral-200 px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              >
                View My Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex justify-center gap-6 text-2xl"
        >
          <motion.a
            href="https://www.linkedin.com/in/patanmohammedibrahimkhan/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-neutral-400 hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/IbrahimKhanMd"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-neutral-400 hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Contact;
