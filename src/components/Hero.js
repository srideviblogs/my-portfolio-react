import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-black text-white px-4"
    >
      <motion.h1
        className="text-5xl sm:text-7xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sridevi Velpula
      </motion.h1>

      <motion.h2
        className="text-xl sm:text-3xl text-gray-300 mt-2 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        DevOps Engineer | Cloud Enthusiast | Automation Lover
      </motion.h2>

      <motion.div
        className="flex items-center gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="https://github.com/srideviblogs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sridevi-pochu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transition text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transition text-2xl"
        >
          <FaTwitter />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
