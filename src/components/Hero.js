import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      {/* Left Side - Text & Icons */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Sridevi Velpula
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          DevOps Engineer
        </motion.h2>

        <motion.div
          className="flex justify-center md:justify-start gap-6 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="https://github.com/srideviblogs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sridevi-velpula"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sridevivelpula@gmail.com"
            className="hover:text-green-400"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>

      {/* Right Side - DevOps Animation */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <video
          src="/image.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-[300px] md:w-[400px] lg:w-[500px] rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
