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
    <section id="portfolio" className="bg-tealcustom text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tealcustom border border-tealcustom rounded-xl p-6 hover:tealcustom hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2 text-tealcustom">{project.title}</h3>
              <p className="text-tealcustom">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
