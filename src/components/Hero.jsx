import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile2.jpg";
import { delay, motion, transform } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="w-full lg:w-[55%]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ibrahim Khan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Software Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-5 max-w-2xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="mt-10 flex w-full justify-center lg:mt-0 lg:w-[45%] lg:justify-center">
          <div className="w-full max-w-[260px] rounded-2xl border border-neutral-700/80 bg-neutral-900/80 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_50px_rgba(0,0,0,0.35)] sm:max-w-[300px] lg:max-w-[250px]">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Ibrahim Khan"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
