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
    <section id="portfolio" className="bg-black text-white py-20 px-6 md:px-28">
      <h2 className="text-4xl font-bold text-center mb-12 text-tealcustom">Projects</h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="border-l-4 border-tealcustom absolute h-full top-0 left-5"></div>

        {/* Project Items */}
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="mb-12 ml-12 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.3 }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-9 top-2 w-6 h-6 bg-tealcustom rounded-full shadow-lg"></div>

            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-tealcustom hover:underline font-medium"
            >
              Visit Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
