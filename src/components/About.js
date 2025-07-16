import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-16 md:py-24">
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/110302219?v=4"
            alt="Sridevi Velpula"
            className="rounded-2xl w-[320px] h-[320px] object-cover border-4 border-pink-500"
          />
        </motion.div>

        {/* About Text */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 border-b-4 border-pink-500 inline-block">
            About Me
          </h2>
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-4">
            Hello! I'm <span className="text-pink-500 font-semibold">Sridevi Velpula</span>, a passionate and results-driven <strong>DevOps Engineer</strong> with a deep interest in automation, cloud, and CI/CD systems.
          </p>
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
            I specialize in <strong>AWS, Terraform, Docker, Kubernetes, Jenkins, GitHub Actions</strong> and more. I love solving real-world problems by building scalable infrastructure and delivering software fast and reliably.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
