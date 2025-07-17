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
  { icon: <SiAzuredevops />, title: "Azure" },
  { icon: <SiKubernetes />, title: "Kubernetes" },
  { icon: <FaDocker />, title: "Docker" },
  { icon: <SiArgocd />, title: "ArgoCD" },
  { icon: <SiTerraform />, title: "Terraform" },
  { icon: <FaPython />, title: "Python" },
  { icon: <SiJenkins />, title: "Jenkins" },
  { icon: <FaGit />, title: "Git" },
  { icon: <SiAnsible />, title: "Ansible" },
  { icon: <SiPrometheus />, title: "Prometheus" },
  { icon: <SiGrafana />, title: "Grafana" },
  { icon: <FaLinux />, title: "Linux" },
];

const Expertise = () => {
  return (
    <section id="expertise" className="expertise-section">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="expertise-title">Expertise</h2>
        <p className="expertise-subtitle">
          My toolkit for delivering scalable, secure, and efficient cloud-native solutions.
        </p>
        <div className="expertise-marquee" aria-label="Scrolling list of skills">
          <div className="expertise-track">
            {skills.concat(skills).map((skill, index) => (
              <motion.div
                key={index}
                className="expertise-card"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index % skills.length) * 0.1 }}
              >
                <div className="expertise-icon">{skill.icon}</div>
                <p className="expertise-title-text">{skill.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
