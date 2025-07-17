import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-16 px-6 md:px-28">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

      <motion.div
        className="flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/110302219?v=4"
          alt="Sridevi Velpula"
          className="rounded-2xl w-[280px] h-[280px] object-cover border-4 border-tealcustom shadow-md"
        />

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Hello! I'm <span className="text-white font-semibold">Sridevi Velpula</span>, a dedicated and results-driven DevOps Engineer with a passion for building scalable infrastructure and automating deployments.
          </p>
          <p>
            I specialize in tools like <span className="text-white font-medium">AWS, Terraform, Docker, Kubernetes, Jenkins, and Python</span>, and I’m driven by efficiency, clean automation, and continuous learning.
          </p>
          <p>
            Let’s build something awesome together!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
