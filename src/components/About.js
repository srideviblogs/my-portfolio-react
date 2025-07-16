import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-white min-h-screen flex items-center py-20 px-4">
      <div className="max-w-6xl w-full mx-auto bg-white shadow-xl rounded-lg p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Large Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/110302219?v=4"
            alt="Sridevi Velpula"
            className="rounded-2xl w-[300px] h-[300px] object-cover border-4 border-pink-500 shadow-lg"
          />
        </motion.div>

        {/* Right: Intro Text */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-black mb-6 border-b-4 border-pink-500 inline-block">
            About Me
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Hello! I'm <span className="text-pink-500 font-semibold">Sridevi Velpula</span>, a dedicated and results-driven <span className="font-semibold">DevOps Engineer</span> with a passion for building scalable infrastructure and automating deployments.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            I specialize in tools like <span className="font-medium text-black">AWS, Terraform, Docker, Kubernetes, Jenkins, and Python</span>, and I’m driven by efficiency, clean automation, and continuous learning. Let's build something awesome together!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
