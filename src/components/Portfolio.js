import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "My Blog",
    description: "A personal blog built with Jekyll and GitHub Pages.",
    image: "https://via.placeholder.com/400x300?text=My+Blog",
    github: "https://github.com/srideviblogs/my-blog",
    demo: "https://srideviblogs.github.io",
  },
  {
    title: "React Portfolio",
    description: "This portfolio site built with React, Tailwind CSS & Framer Motion.",
    image: "https://via.placeholder.com/400x300?text=React+Portfolio",
    github: "https://github.com/srideviblogs/my-portfolio-react",
    demo: "https://srideviv.netlify.app",
  },
];

const Portfolio = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section
      id="portfolio"
      className="bg-black text-white py-20 px-6 md:px-28"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 justify-center">
        {projects.map((project, idx) => {
          const isFlipped = flippedIndex === idx;
          return (
            <motion.div
              key={idx}
              className="relative w-full max-w-sm h-72 cursor-pointer perspective"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              onClick={() => toggleFlip(idx)}
            >
              {/* Card inner container for flip */}
              <div
                className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Front side */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 backface-hidden flex flex-col justify-end">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-black bg-opacity-60">
                    <h3 className="text-tealcustom text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Back side */}
                <div className="absolute inset-0 rounded-2xl bg-gray-900 border border-tealcustom p-6 flex flex-col justify-between text-gray-300 rotate-y-180 backface-hidden">
                  <div>
                    <h3 className="text-tealcustom text-2xl font-semibold mb-4">
                      {project.title}
                    </h3>
                    <p className="mb-6">{project.description}</p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-tealcustom text-black px-4 py-2 rounded hover:bg-teal-600 transition"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
