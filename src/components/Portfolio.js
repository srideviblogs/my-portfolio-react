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
    description: "This portfolio site built with React and Tailwind CSS.",
    link: "https://srideviv.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#0d1b1e] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12 text-[#19b7bd]">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 24px rgba(25, 183, 189, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#1a2a2f] border border-gray-700 rounded-xl p-6 hover:border-[#19b7bd] transition"
            >
              <h3 className="text-xl font-bold mb-2 text-[#19b7bd]">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
