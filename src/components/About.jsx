import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ABOUT_CONTENT } from "../constants";

const About = () => {
  const { title, image, intro, sections } = ABOUT_CONTENT;
  const [activeSection, setActiveSection] = useState(null);
  const [firstWord, secondWord] = title.split(" ");

  const toggleSection = (index) => {
    setActiveSection((current) => (current === index ? null : index));
  };

  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl sm:text-5xl"
      >
        {firstWord} <span className="text-neutral-500">{secondWord}</span>
      </motion.h1>

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-center"
        >
          <div className="w-full max-w-[360px] rounded-[1.8rem] border border-neutral-700/80 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.4)] sm:max-w-[380px]">
            <img
              className="h-auto w-full rounded-[1.35rem] object-cover"
              src={image}
              alt={title}
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-800/90 bg-neutral-900/70 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)] sm:p-6">
            <p className="mb-6 text-base leading-relaxed text-neutral-300 sm:text-lg">
              {intro}
            </p>

            <div className="space-y-3">
              {sections.map((section, index) => {
                const isOpen = activeSection === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-950/70"
                  >
                    <button
                      type="button"
                      onClick={() => toggleSection(index)}
                      className="flex w-full items-center justify-between px-4 py-4 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-lg text-purple-300">
                          {section.icon}
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {section.heading}
                          </h3>
                          <p className="text-sm text-neutral-400">{section.summary}</p>
                        </div>
                      </div>
                      <span className={`text-xl text-neutral-400 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ul className="space-y-3 border-t border-neutral-800/80 px-4 py-4 text-sm leading-relaxed text-neutral-400">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <span className="mt-1 text-purple-400">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;