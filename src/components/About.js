import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.img
          src="https://avatars.githubusercontent.com/u/110302219?v=4"
          alt="Sridevi Velpula"
          className="rounded-2xl w-48 h-48 object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I’m Sridevi Velpula, a passionate frontend developer focused on building beautiful and functional web experiences. I enjoy turning complex problems into elegant solutions using modern web technologies like React, Tailwind, and JavaScript.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
