import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const handlePrev = () => setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <section id="portfolio" className="bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">Projects</h2>

        <div className="relative bg-gray-900 rounded-3xl p-8 shadow-md border border-gray-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-tealcustom mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tealcustom font-semibold hover:underline"
              >
                🔗 View Project
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <button onClick={handlePrev} aria-label="Previous project">
              <ChevronLeft className="h-6 w-6 text-gray-400 hover:text-tealcustom" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <button onClick={handleNext} aria-label="Next project">
              <ChevronRight className="h-6 w-6 text-gray-400 hover:text-tealcustom" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-tealcustom" : "bg-gray-600"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
