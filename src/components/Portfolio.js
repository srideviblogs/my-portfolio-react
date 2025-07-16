import React from "react";

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
    <section id="portfolio" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-gray-700 rounded-xl p-6 hover:border-pink-500 hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2 text-pink-400">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
