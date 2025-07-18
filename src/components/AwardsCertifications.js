import React, { useState, useEffect } from "react";
import "./AwardsCertifications.css";

const awardsData = [
  {
    title: "Best Performer Award",
    issuer: "ABC Corporation",
    description: "Awarded for outstanding performance in project delivery during Q3.",
  },
  {
    title: "Star Team Player",
    issuer: "XYZ Solutions",
    description: "Recognized for excellent collaboration and team leadership.",
  },
];

const certificationsData = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    description: "Credential validating expertise in cloud architecture on AWS.",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Linux Foundation",
    description: "Demonstrated knowledge of Kubernetes architecture and operations.",
  },
];

const AwardsCertifications = () => {
  const [activeTab, setActiveTab] = useState("awards");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".award-card");
    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, [activeTab]);

  const dataToDisplay = activeTab === "awards" ? awardsData : certificationsData;

  return (
    <section id="awards-certifications" className="bg-black py-20 px-6 text-white">
      <h2 className="text-center text-4xl font-bold mb-12">Awards & Certifications</h2>
      <div className="awards-tabs flex justify-center gap-4 mb-10">
        <button
          className={`tab-button ${activeTab === "awards" ? "active" : ""}`}
          onClick={() => setActiveTab("awards")}
        >
          Awards
        </button>
        <button
          className={`tab-button ${activeTab === "certifications" ? "active" : ""}`}
          onClick={() => setActiveTab("certifications")}
        >
          Certifications
        </button>
      </div>

      <div className="awards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {dataToDisplay.map((item, index) => (
          <div key={index} className="award-card bg-[#1c1c1c] rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <span className="block text-sm text-gray-400 mb-3">{item.issuer}</span>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsCertifications;
