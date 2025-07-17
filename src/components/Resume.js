import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    title: "DevOps Engineer - Virtusa (Client: Citi Bank)",
    date: "2022 - 2023",
    location: "Hyderabad, India",
    details: [
      "CI/CD automation with Jenkins and GitLab",
      "AWS infra management with Terraform",
      "Monitoring setup using Prometheus and Grafana",
    ],
  },
  {
    title: "DevOps Engineer - Infosys (Client: PwC)",
    date: "2020 - 2022",
    location: "Hyderabad, India",
    details: [
      "Built Docker/K8s-based deployments",
      "Azure DevOps integration",
      "Infra optimization",
    ],
  },
  {
    title: "Cloud Engineer - Infosys (Client: Conduent)",
    date: "2017 - 2020",
    location: "Bangalore, India",
    details: [
      "AWS resource automation",
      "Python scripting for reporting",
      "On-call production support",
    ],
  },
];

const education = [
  {
    degree: "M.Tech in Embedded Systems",
    school: "CVR College of Engineering, Hyderabad, India",
  },
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    school: "JNTUH, Hyderabad, India",
  },
];

const Resume = () => {
  return (
    <section id="resume" className="bg-black text-white py-16 px-12 md:px-28">
      <h2 className="text-4xl font-bold text-center mb-12">Resume</h2>

      {/* Education */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-8 border-b border-tealcustom pb-2">Education</h3>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="pl-8 relative border-l-4 border-tealcustom"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="absolute -left-3 top-2 w-6 h-6 bg-tealcustom rounded-full"></div>
              <h4 className="text-xl font-semibold">{edu.degree}</h4>
              <p className="text-gray-400">{edu.school}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="text-3xl font-semibold mb-8 border-b border-tealcustom pb-2">Experience</h3>
        <div className="space-y-12">
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              className="pl-8 relative border-l-4 border-tealcustom"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="absolute -left-3 top-2 w-6 h-6 bg-tealcustom rounded-full"></div>
              <h4 className="text-xl font-semibold text-tealcustom">{job.title}</h4>
              <p className="text-gray-400 italic mb-2">{job.date} | {job.location}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {job.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
