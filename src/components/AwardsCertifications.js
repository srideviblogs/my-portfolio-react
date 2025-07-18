
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaCertificate } from "react-icons/fa";
import "./AwardsCertifications.css";

const awards = [
  {
    title: "Best Employee of the Year",
    year: "2021",
    description:
      "Awarded by Virtusa for outstanding performance and dedication.",
  },
  {
    title: "Excellence in Automation",
    year: "2020",
    description:
      "Recognized by Infosys for delivering innovative automation solutions.",
  },
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    year: "2022",
    issuer: "Amazon Web Services",
    link: "https://www.yourcertificateurl.com/aws-solution-architect",
    description:
      "Comprehensive knowledge and skills in designing AWS cloud architectures.",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    year: "2021",
    issuer: "Cloud Native Computing Foundation",
    link: "https://www.yourcertificateurl.com/cka",
    description:
      "Demonstrated proficiency in Kubernetes cluster administration and management.",
  },
];

const AwardsCertifications = () => {
  const [activeTab, setActiveTab] = useState("awards");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const items = activeTab === "awards" ? awards : certifications;

  return (
    <section id="awards-certifications" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Awards & Certifications</h2>

        {/* Tabs with Icons */}
        <div className="award-cert-section flex justify-center mb-12">
          <div className="tab-box flex gap-6">
            <div
              className={`tab-card flex items-center gap-2 px-4 py-2 rounded cursor-pointer ${
                activeTab === "awards" ? "bg-tealcustom text-black" : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => {
                setActiveTab("awards");
                setExpandedIndex(null);
              }}
            >
              <FaAward className="tab-icon" />
              <span>Awards</span>
            </div>
            <div
              className={`tab-card flex items-center gap-2 px-4 py-2 rounded cursor-pointer ${
                activeTab === "certifications"
                  ? "bg-tealcustom text-black"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => {
                setActiveTab("certifications");
                setExpandedIndex(null);
              }}
            >
              <FaCertificate className="tab-icon" />
              <span>Certifications</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className={`unique-grid ${activeTab === "awards" ? "awards-grid" : "certs-grid"}`}>
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className={`unique-card ${activeTab === "awards" ? "unique-award" : "unique-cert"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => toggleExpand(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleExpand(idx);
              }}
              aria-expanded={expandedIndex === idx}
            >
              <div className="content">
                <h3>{item.title}</h3>
                <span>
                  {item.year}
                  {activeTab === "certifications" && item.issuer ? ` - ${item.issuer}` : ""}
                </span>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-tealcustom hover:underline"
                  >
                    View Certificate
                  </a>
                )}
                <AnimatePresence>
                  {expandedIndex === idx && (
                    <motion.p
                      className="expanded-description"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsCertifications;
