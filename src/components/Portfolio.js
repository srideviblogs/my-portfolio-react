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
    <section id="portfolio" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-tealcustom">Projects</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-gray-200 rounded-[2rem] p-8 hover:border-tealcustom transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5, type: "spring" }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-tealcustom">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
