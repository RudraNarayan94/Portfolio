import React from "react";
import { motion } from "framer-motion";
import { DiRedis } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
  const techIcons = [
    { component: <RiReactjsLine />, color: "text-cyan-400" },
    { component: <TbBrandNextjs />, color: "text-white" },
    { component: <SiMongodb />, color: "text-cyan-500" },
    { component: <DiRedis />, color: "text-red-700" },
    { component: <FaNodeJs />, color: "text-green-500" },
    { component: <BiLogoPostgresql />, color: "text-sky-700" },
  ];

  return (
    <section className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {techIcons.map((icon, idx) => (
          <motion.div
            key={idx}
            className={`p-4 ${icon.color}`}
            animate={{ y: [0, -20, 0, 20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.2,
            }}>
            <span className="text-7xl">{icon.component}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
