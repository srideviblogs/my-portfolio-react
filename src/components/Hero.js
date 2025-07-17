import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-black text-white flex flex-col justify-center items-center px-4"
    >
      <motion.h1
        className="text-4xl sm:text-6xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
          Hi, I'm Sridevi Velpula
        </span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-300 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A DevOps Engineer passionate about automation, cloud infrastructure, and continuous learning.
      </motion.p>

      <motion.div
        className="flex gap-6 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <a
          href="https://github.com/srideviblogs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/sridevi-pochu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <FaTwitter size={28} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
