import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AwardsCertifications.css";

const awards = [
  {
    title: "Best Employee of the Year",
    year: "2021",
    description: "Awarded by Virtusa for outstanding performance and dedication.",
  },
  {
    title: "Excellence in Automation",
    year: "2020",
    description: "Recognized by Infosys for delivering innovative automation solutions.",
  },
  // Add more awards here
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    year: "2022",
    issuer: "Amazon Web Services",
    link: "https://www.yourcertificateurl.com/aws-solution-architect",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    year: "2021",
    issuer: "Cloud Native Computing Foundation",
    link: "https://www.yourcertificateurl.com/cka",
  },
  // Add more certifications here
];

const AwardsCertifications = () => {
  const [activeTab, setActiveTab] = useState("awards");

  return (
    <section id="awards-certifications" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Awards & Certifications</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12">
          <button
            onClick={() => setActiveTab("awards")}
            className={`px-6 py-2 font-semibold rounded-full transition ${
              activeTab === "awards"
                ? "bg-tealcustom text-black"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            Awards
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-6 py-2 font-semibold rounded-full transition ${
              activeTab === "certifications"
                ? "bg-tealcustom text-black"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            Certifications
          </button>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "awards" && (
            <div className="unique-grid awards-grid">
              {awards.map((award, idx) => (
                <div key={idx} className="unique-card unique-award">
                  <div className="content">
                    <h3>{award.title}</h3>
                    <span>{award.year}</span>
                    <p>{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="unique-grid certs-grid">
              {certifications.map((cert, idx) => (
                <div key={idx} className="unique-card unique-cert">
                  <div className="content">
                    <h3>{cert.title}</h3>
                    <span>{cert.year} - {cert.issuer}</span>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsCertifications;
