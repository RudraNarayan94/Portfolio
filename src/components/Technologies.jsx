import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiDjango,
  SiFastapi,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiTerraform,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaAws } from "react-icons/fa";
const techIcons = [
  { component: <RiReactjsLine />, color: "text-cyan-400", name: "React" },
  { component: <SiDjango />, color: "text-green-600", name: "Django" },
  { component: <SiFastapi />, color: "text-emerald-400", name: "FastAPI" },
  { component: <SiDocker />, color: "text-blue-400", name: "Docker" },
  { component: <SiKubernetes />, color: "text-blue-600", name: "Kubernetes" },
  { component: <FaAws />, color: "text-yellow-400", name: "AWS" },
  { component: <SiTerraform />, color: "text-purple-500", name: "Terraform" },
  { component: <SiMongodb />, color: "text-green-500", name: "MongoDB" },
  {
    component: <BiLogoPostgresql />,
    color: "text-sky-600",
    name: "PostgreSQL",
  },
  { component: <DiRedis />, color: "text-red-600", name: "Redis" },
];

const Technologies = () => {
  return (
    <section className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {techIcons.map((icon, idx) => (
          <motion.div
            key={icon.name}
            className={`flex flex-col items-center gap-2 ${icon.color}`}
            animate={{ y: [0, -10, 0, 10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.2,
            }}>
            <span className="text-6xl">{icon.component}</span>
            <p className="text-sm text-stone-400">{icon.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
