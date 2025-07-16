import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left: Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/110302219?v=4"
            alt="Sridevi Velpula"
            className="rounded-2xl w-72 h-72 object-cover shadow-xl"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 border-b-4 border-pink-500 inline-block">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hello! I'm <span className="font-semibold text-pink-500">Sridevi Velpula</span>, a passionate and results-oriented <span className="font-semibold">DevOps Engineer</span> with a strong foundation in automating infrastructure, improving CI/CD pipelines, and ensuring scalable deployments.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I have hands-on experience with tools like <span className="text-black font-medium">AWS, Azure, Terraform, Docker, Kubernetes, Jenkins, and Python</span>. I love solving problems with automation and enjoy learning new technologies that help businesses scale efficiently.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
