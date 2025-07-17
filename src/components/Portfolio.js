import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "My Blog",
    description: "A personal blog built with Jekyll and GitHub Pages.",
    link: "https://srideviblogs.github.io",
  },
  {
    title: "React Portfolio",
    description: "This portfolio site built with React, Tailwind CSS & Framer Motion.",
    link: "https://srideviv.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gradient-to-br from-gray-100 to-white py-20 px-6 md:px-28">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 border-b-4 border-tealcustom inline-block pb-1">
          My Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 mt-8">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 text-left shadow-md hover:shadow-lg transition duration-300 hover:border-tealcustom"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <h3 className="text-2xl font-semibold text-tealcustom mb-2">{project.title}</h3>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
