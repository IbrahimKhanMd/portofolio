import { RiReactjsLine } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { animate, motion } from "framer-motion";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="bordr-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl pb-2.5"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconvariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaFigma className="text-7xl text-pink-400" />
        </motion.div>
        <motion.div
          variants={iconvariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl text-black-400" />
        </motion.div>
        <motion.div
          variants={iconvariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoHtml5 className="text-7xl text-red-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
