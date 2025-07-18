import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaAward, FaCertificate } from "react-icons/fa";
import "./AwardsCertifications.css"; // import your CSS here

const awards = [
  {
    title: "Best Innovator Award",
    year: "2023",
    description: "Awarded for outstanding innovation in cloud automation.",
  },
  {
    title: "Employee of the Year",
    year: "2022",
    description: "Recognized for exceptional dedication and performance.",
  },
  // add more awards here
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    year: "2021",
    description: "Amazon Web Services certification for designing cloud solutions.",
  },
  {
    title: "Certified Kubernetes Administrator",
    year: "2022",
    description: "Certification on Kubernetes cluster administration and management.",
  },
  // add more certifications here
];

const AwardsCertifications = () => {
  const [activeTab, setActiveTab] = useState("awards");

  const itemsToShow = activeTab === "awards" ? awards : certifications;

  return (
    <section id="awards-certifications" className="award-cert-section">
      <div className="tab-box">
        <div
          className={`tab-card ${activeTab === "awards" ? "active" : ""}`}
          onClick={() => setActiveTab("awards")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setActiveTab("awards")}
          aria-pressed={activeTab === "awards"}
        >
          <FaAward className="tab-icon" />
          <span>Awards</span>
        </div>

        <div
          className={`tab-card ${activeTab === "certifications" ? "active" : ""}`}
          onClick={() => setActiveTab("certifications")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setActiveTab("certifications")}
          aria-pressed={activeTab === "certifications"}
        >
          <FaCertificate className="tab-icon" />
          <span>Certifications</span>
        </div>
      </div>

      <div className="unique-grid">
        {itemsToShow.map((item, idx) => (
          <motion.div
            key={idx}
            className={`unique-card ${activeTab === "awards" ? "unique-award" : "unique-cert"}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div className="content">
              <h3>{item.title}</h3>
              <span>{item.year}</span>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwardsCertifications;
