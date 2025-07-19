import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => {
          const direction = index % 2 === 0 ? -100 : 100;

          return (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="block hover:opacity-90 transition-opacity duration-300">
              <motion.div
                className="mb-8 flex flex-wrap lg:justify-center"
                initial={{ opacity: 0, x: direction }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                {/* Project Image */}
                <motion.div
                  className="w-full lg:w-1/4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    width={250}
                    height={250}
                    className="mb-6 rounded"
                  />
                </motion.div>

                {/* Project Details */}
                <motion.div
                  className="w-full max-w-xl lg:w-3/4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}>
                  <h3 className="mb-2 font-semibold text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-stone-400">{project.description}</p>

                  {/* Technologies Used */}
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
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="rounded bg-stone-800 px-2 py-1 text-sm text-white"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}>
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
