import { ACHIEVEMENTS } from "../constants";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Achievements
      </motion.h1>
      <div>
        {ACHIEVEMENTS.map((achievement, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={achievement.image}
                width={150}
                height={150}
                alt={achievement.title}
                className="mb-6 rounded"
              />
              <div className="mb-4">
                <span className="text-lg font-medium text-cyan-400">
                  {achievement.year}
                </span>
                <div className="mt-2">
                  <span className="rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-neutral-300">
                    {achievement.category}
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-xl font-semibold">{achievement.title}</h6>
              <p className="mb-3 text-neutral-400">
                {achievement.description}
              </p>
              <p className="mb-4 text-neutral-400 italic">
                Impact: {achievement.impact}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {achievement.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium hover:bg-neutral-800 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {achievement.verificationLink && (
                <a
                  href={achievement.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-700 transition-colors hover:shadow-lg hover:shadow-purple-500/50"
                >
                 See My Achievements
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;