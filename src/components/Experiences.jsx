import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section className="pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        Experience
      </motion.h2>

      {EXPERIENCES.map((experience, index) => {
        const direction = index % 2 === 0 ? -100 : 100;
        return (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial={{ opacity: 0, x: direction }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}>
            {/* Year */}
            <motion.div
              className="w-full lg:w-1/4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}>
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </motion.div>

            {/* Details */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}>
              <h3 className="mb-2 font-semibold text-xl">
                {experience.role}{" "}
                <span className="text-sm text-stone-500">
                  - {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>

              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                transition={{
                  staggerChildren: 0.1,
                  delayChildren: 0.6,
                  when: "beforeChildren",
                }}
                viewport={{ once: true }}>
                {experience.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="mt-2 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4 },
                      },
                    }}>
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Experience;
