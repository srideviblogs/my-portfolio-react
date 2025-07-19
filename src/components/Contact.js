import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <p className="text-gray-400 mb-6">Feel free to reach out through any of the platforms below:</p>

      <div className="flex justify-center gap-6 text-3xl">
        <a href="mailto:sridevivelpula@gmail.com" className="hover:text-green-400">
          <FaEnvelope />
        </a>
        <a href="https://github.com/srideviblogs" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/sridevi-velpula" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
