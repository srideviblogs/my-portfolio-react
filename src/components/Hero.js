import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.png"; // replace with your image path

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 sm:px-16"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-400">
            DevOps Engineer
          </h1>

          <TypeAnimation
            sequence={[
              "Cloud Enthusiast",
              2000,
              "Automation Lover",
              2000,
              "AWS | Kubernetes | Jenkins",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl text-gray-300 font-mono"
          />

          <p className="text-gray-400 text-lg">
            Hello! I'm Sridevi Velpula, a results-driven DevOps Engineer passionate
            about building scalable infrastructure and automating deployments.
          </p>

          {/* Navigation Cards */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <a
              href="#about"
              className="border border-gray-600 p-4 rounded-lg text-center hover:bg-gray-800 transition"
            >
              About
            </a>
            <a
              href="#projects"
              className="border border-gray-600 p-4 rounded-lg text-center hover:bg-gray-800 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="border border-gray-600 p-4 rounded-lg text-center hover:bg-gray-800 transition"
            >
              Contact
            </a>
            <a
              href="https://github.com/srideviblogs"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 p-4 rounded-lg text-center hover:bg-gray-800 transition"
            >
              GitHub
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            <a
              href="mailto:your_email@example.com"
              className="text-gray-400 hover:text-cyan-400 text-xl"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/srideviblogs"
              className="text-gray-400 hover:text-cyan-400 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sridevi-pochu"
              className="text-gray-400 hover:text-cyan-400 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={heroImage}
            alt="Hero"
            className="w-72 sm:w-96 object-contain rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
