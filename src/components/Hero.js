import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Hero.css"; // Contains fadeIn animation

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* 🔹 Background Video */}
      <video
        className="absolute right-0 top-0 h-full w-auto object-cover opacity-20 md:opacity-40 lg:opacity-60 block pointer-events-none z-0 animate-fadeIn"
        src="/image1.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/image1.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* 🔹 Centered Text Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
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
          className="flex justify-center gap-6 text-2xl"
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
    </section>
  );
};

export default Hero;
