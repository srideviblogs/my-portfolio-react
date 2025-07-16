import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-white min-h-screen w-full flex items-center px-4 py-16 md:py-24">
      <div className="w-full max-w-[90rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
        
        {/* Profile Image */}
        <motion.div
          className="flex justify-center md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/110302219?v=4"
            alt="Sridevi Velpula"
            className="rounded-2xl w-[380px] h-[380px] object-cover border-4 border-pink-500"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-black mb-6 border-b-4 border-pink-500 inline-block">
            About Me
          </h2>
          <p className="text-gray-800 text-xl leading-relaxed mb-6">
            Hello! I'm <span className="text-pink-500 font-semibold">Sridevi Velpula</span>, a passionate and results-oriented <strong>DevOps Engineer</strong> with a strong focus on automation, scalability, and continuous delivery.
          </p>
          <p className="text-gray-800 text-xl leading-relaxed">
            I enjoy working with technologies like <span className="font-medium text-black">AWS, Terraform, Docker, Kubernetes, Jenkins, and Python</span>. I'm always curious and love solving complex problems through simple and efficient solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
