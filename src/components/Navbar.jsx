import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/navLogo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const iconVariants = {
  hover: { scale: 1.2, color: "#2563EB" }, // Tailwind blue-600
};

function Navbar() {
  return (
    <motion.nav
      className="flex justify-between items-center py-6"
      variants={navVariants}
      initial="hidden"
      animate="visible">
      <a href="/" aria-label="Home" className="flex items-center">
        <motion.img
          src={logo}
          alt="Logo"
          className="mx-2 w-[100px] h-[66px]"
          width={100}
          height={66}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
        />
      </a>

      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        {[
          {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/rudra404",
            label: "LinkedIn",
          },
          {
            icon: <FaGithub />,
            url: "https://github.com/RudraNarayan94",
            label: "GitHub",
          },
          {
            icon: <SiLeetcode />,
            url: "https://leetcode.com/u/rudra404",
            label: "Leetcode",
          },
          // {
          //   icon: <FaSquareXTwitter />,
          //   url: "https://twitter.com/rudra404",
          //   label: "Twitter",
          // },
        ].map(({ icon, url, label }, idx) => (
          <motion.a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            variants={iconVariants}
            whileHover="hover">
            {icon}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;
