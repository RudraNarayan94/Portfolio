import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/raviKumarProfile.webp";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const itemLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const itemRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

function Hero() {
  return (
    <motion.section
      className="pb-4 lg:mb-36"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div className="flex flex-wrap lg:flex-row-reverse">
        {/* Profile Picture */}
        <motion.div className="w-full lg:w-1/2" variants={itemRightVariants}>
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Profile"
              className="border border-stone-900 rounded-3xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div className="w-full lg:w-1/2" variants={itemLeftVariants}>
          <div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              Rudra Narayan
            </motion.h2>
            <motion.span
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}>
              Full Stack Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}>
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 mt-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}>
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
