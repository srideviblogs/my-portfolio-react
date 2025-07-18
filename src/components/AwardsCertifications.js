import React, { useState, useEffect } from "react";
import "./AwardsCertifications.css";

const awards = [
  {
    title: "Top Performer Award",
    description: "Recognized for outstanding contributions in Q2 2023 at ABC Corp."
  },
  {
    title: "Best Team Player",
    description: "Awarded for exceptional collaboration and support in multiple projects."
  },
  {
    title: "Innovation Award",
    description: "Developed an automation framework that improved efficiency by 40%."
  }
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services"
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation"
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft"
  }
];

const AwardsCertifications = () => {
  const [activeTab, setActiveTab] = useState("awards");

  // Fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });

    const cards = document.querySelectorAll(".glass-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [activeTab]);

  return (
    <section id="awards-certifications">
      <h2>Awards & Certifications</h2>

      <div className="tabs">
        <div
          className={`tab ${activeTab === "awards" ? "active" : ""}`}
          onClick={() => setActiveTab("awards")}
        >
          Awards
        </div>
        <div
          className={`tab ${activeTab === "certifications" ? "active" : ""}`}
          onClick={() => setActiveTab("certifications")}
        >
          Certifications
        </div>
      </div>

      <div className="scroll-container">
        {activeTab === "awards" &&
          awards.map((award, index) => (
            <div key={index} className="glass-card">
              <h3>{award.title}</h3>
              <p>{award.description}</p>
            </div>
          ))}

        {activeTab === "certifications" &&
          certifications.map((cert, index) => (
            <div key={index} className="glass-card">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AwardsCertifications;
