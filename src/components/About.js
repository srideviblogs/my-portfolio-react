import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Rocket } from "lucide-react";

const tools = ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins", "Python", "Azure", "GitLab CI"];

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
        <div className="w-full md:w-2/3 space-y-10">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-tealcustom mb-2 flex items-center gap-2">
              <Cpu className="w-6 h-6" /> Hi, I'm Sridevi Velpula
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              A passionate <span className="font-semibold text-white">DevOps Engineer</span> with a strong background in automating infrastructure, cloud technologies, and continuous integration pipelines.
            </p>
          </motion.div>

          {/* Tools Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <Terminal className="w-5 h-5" /> Technologies I Work With
            </h4>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-tealcustom/20 text-tealcustom font-medium px-4 py-1 rounded-full text-sm border border-tealcustom"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Motivation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
              <Rocket className="w-5 h-5" /> My Drive
            </h4>
            <p className="text-gray-300 leading-relaxed">
              I love solving complex infrastructure problems and enabling smooth developer workflows. I'm committed to clean automation, performance optimization, and delivering scalable solutions.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
