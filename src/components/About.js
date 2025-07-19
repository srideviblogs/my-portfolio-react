import React from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-16 px-6 md:px-28">
      <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
      <p className="text-center text-gray-400 mb-12 text-lg">
        My Journey as a DevOps Engineer
      </p>

      <motion.div
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-10 p-6 md:p-12 border border-gray-700"
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
        <div className="w-full md:w-2/3 space-y-10">
          {/* Intro */}
          <motion.div
            className="relative pl-6 border-l-4 border-tealcustom"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-tealcustom mb-1">
              Hi, I'm Sridevi Velpula
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              A passionate{" "}
              <span className="font-semibold text-white">DevOps Engineer</span>{" "}
              with a strong background in automating infrastructure, cloud
              technologies, and continuous integration pipelines.
            </p>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            className="relative pl-6 border-l-4 border-tealcustom"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-white mb-2">
              What I Do
            </h4>
            <ul className="text-gray-300 space-y-1">
              {[
                "Cloud infrastructure management (AWS, Azure)",
                "CI/CD automation with Jenkins, GitLab CI",
                "Containerization using Docker & Kubernetes",
                "IaC with Terraform",
                "Scripting with Python & Shell",
                "Monitoring & alerting (Prometheus, Grafana)",
              ].map((skill, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaChevronRight className="text-tealcustom mt-1" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Motivation */}
          <motion.div
            className="relative pl-6 border-l-4 border-tealcustom"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-white mb-2">My Drive</h4>
            <p className="text-gray-300 leading-relaxed">
              I love solving complex infrastructure problems and enabling smooth
              developer workflows. I'm committed to clean automation,
              performance optimization, and delivering scalable solutions.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
