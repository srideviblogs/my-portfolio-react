import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Profile Image */}
        <motion.img
          src="https://avatars.githubusercontent.com/u/110302219?v=4"
          alt="Sridevi Velpula"
          className="rounded-2xl w-64 h-64 object-cover shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Right: Text */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 border-b-4 border-pink-500 inline-block">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hello! I'm <span className="text-pink-400 font-semibold">Sridevi Velpula</span>, a dedicated and results-driven DevOps Engineer with a passion for automation, cloud computing, and scalable infrastructure. I bring years of experience working with top clients across different industries to deliver high-quality solutions.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I specialize in tools like <span className="text-white">AWS, Terraform, Docker, Kubernetes, Jenkins, Prometheus and Grafana</span>, and I enjoy turning complex challenges into automated, repeatable processes that save time and reduce errors. I’m always eager to learn, collaborate, and build tools that make life easier for developers and teams.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
