import { CERTIFICATES } from "../constants";
import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h1>
      <div>
        {CERTIFICATES.map((Certifications, index) => (
          <div key={index} className="mb-8 flex flex-col lg:flex-row lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 mb-2 lg:mb-0"
            >
              <img
                src={Certifications.image}
                width={150}
                height={150}
                alt={Certifications.title}
                className="mb-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{Certifications.title}</h6>
              <p className="mb-4 text-neutral-400">
                {Certifications.description}
              </p>
              <div className="flex flex-wrap">
                {Certifications.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-stone-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {Certifications.verificationLink && (
                <a
                  href={Certifications.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 rounded bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-700 transition-colors hover:shadow-lg hover:shadow-purple-500/50"
                >
                  Checkout my Certificates
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;