import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "My Blog",
    description: "A personal blog built with Jekyll and GitHub Pages.",
    image: "https://via.placeholder.com/400x300?text=My+Blog",
    link: "https://srideviblogs.github.io",
  },
  {
    title: "React Portfolio",
    description: "This portfolio site built with React, Tailwind CSS & Framer Motion.",
    image: "https://via.placeholder.com/400x300?text=React+Portfolio",
    link: "https://srideviv.netlify.app",
  },
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="portfolio" className="bg-black text-white py-20 px-6 md:px-28">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, idx) => {
          const isActive = activeIndex === idx;

          return (
            <motion.div
              key={idx}
              className="relative w-full h-72 perspective"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              {/* Card container */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-full block cursor-pointer select-none"
                onClick={(e) => {
                  e.preventDefault(); // prevent immediate navigation
                  setActiveIndex(isActive ? null : idx);
                }}
              >
                {/* Front Side */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 ${
                    isActive ? "rotate-y-180" : "rotate-y-0"
                  } backface-hidden`}
                  style={{ transformStyle: "preserve-3d", transition: "transform 0.6s" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
                    <h3 className="text-tealcustom text-xl font-semibold">{project.title}</h3>
                  </div>
                </motion.div>

                {/* Back Side */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl shadow-xl overflow-hidden bg-gray-900 border border-tealcustom p-6 flex items-center justify-center text-center text-gray-300 ${
                    isActive ? "rotate-y-0" : "rotate-y-180"
                  } backface-hidden`}
                  style={{ transformStyle: "preserve-3d", transition: "transform 0.6s" }}
                >
                  <p>{project.description}</p>
                </motion.div>
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
