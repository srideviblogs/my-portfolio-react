import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-16 px-6 md:px-28">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

      <motion.div
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-start gap-10 p-8 md:p-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Image */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/110302219?v=4"
            alt="Sridevi Velpula"
            className="rounded-2xl w-[280px] h-[280px] object-cover border-4 border-tealcustom shadow-md"
          />
        </motion.div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 space-y-8">
          {/* Intro */}
          <div className="border-l-4 border-tealcustom pl-4">
            <h3 className="text-2xl font-semibold text-tealcustom mb-2">Hi, I'm Sridevi Velpula</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              A passionate <span className="font-semibold text-white">DevOps Engineer</span> with a strong background in automating infrastructure, cloud technologies, and continuous integration pipelines.
            </p>
          </div>

          {/* Skills Summary */}
          <div className="border-l-4 border-tealcustom pl-4">
            <h4 className="text-xl font-semibold text-white mb-2">What I Do</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Cloud infrastructure management (AWS, Azure)</li>
              <li>CI/CD automation with Jenkins, GitLab CI</li>
              <li>Containerization using Docker & Kubernetes</li>
              <li>IaC with Terraform</li>
              <li>Scripting with Python & Shell</li>
              <li>Monitoring & alerting (Prometheus, Grafana)</li>
            </ul>
          </div>

          {/* Motivation */}
          <div className="border-l-4 border-tealcustom pl-4">
            <h4 className="text-xl font-semibold text-white mb-2">My Drive</h4>
            <p className="text-gray-300 leading-relaxed">
              I love solving complex infrastructure problems and enabling smooth developer workflows. I'm committed to clean automation, performance optimization, and delivering scalable solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
