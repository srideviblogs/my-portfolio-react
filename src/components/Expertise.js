import React from "react";
import { motion } from "framer-motion";
import "./Expertise.css";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaPython,
  FaLinux,
} from "react-icons/fa";
import {
  SiTerraform,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiPrometheus,
} from "react-icons/si";

const skills = [
  { icon: <FaAws />, title: "AWS" },
  { icon: <SiTerraform />, title: "Terraform" },
  { icon: <FaDocker />, title: "Docker" },
  { icon: <SiKubernetes />, title: "Kubernetes" },
  { icon: <SiJenkins />, title: "Jenkins" },
  { icon: <FaPython />, title: "Python" },
  { icon: <SiGit />, title: "Git" },
  { icon: <FaLinux />, title: "Linux" },
  { icon: <FaGithub />, title: "GitHub Actions" },
  { icon: <SiPrometheus />, title: "Monitoring" },
];

const Expertise = () => {
  return (
    <section id="expertise" className="expertise-section">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="expertise-title">Expertise</h2>
        <div className="expertise-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="expertise-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="expertise-icon">{skill.icon}</div>
              <p className="expertise-title-text">{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
