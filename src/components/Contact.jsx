import React from 'react';
import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="border-b border-neutral-900 pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } }
      }}
    >
      <motion.h1
        variants={fadeInUp}
        className="my-10 text-center text-4xl"
      >
        Contact Me
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.a
          href="https://ibrahim-resume-sderes.tiiny.site/"
          className="border-b inline-block"
          variants={fadeInUp}
        >
          Check My resume here
        </motion.a>
        <motion.p
          variants={fadeInUp}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href="#"
          className="border-b inline-block"
          variants={fadeInUp}
        >
          {CONTACT.email}
        </motion.a>
        <motion.div
          className="mt-6 flex justify-center gap-6 text-2xl"
          variants={fadeInUp}
        >
          <motion.a
            href="https://www.linkedin.com/in/patanmohammedibrahimkhan/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/IbrahimKhanMd"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
