import React from "react";

const Resume = () => (
  <section id="resume" className="bg-black text-white py-16 px-6 max-w-4xl mx-auto">
    <h2 className="text-4xl font-semibold text-center mb-12">Resume</h2>

    {/* Education */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 border-b border-pink-500 pb-2">Education</h3>
      <div className="space-y-8">
        <div>
          <h4 className="text-xl font-semibold">B.Tech in Electronics and Communication Engineering</h4>
          <p className="text-gray-400">JNTUH, Hyderabad, India</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">M.Tech in Embedded Systems</h4>
          <p className="text-gray-400">CVR College of Engineering, Hyderabad, India</p>
        </div>
      </div>
    </div>

    {/* Experience */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 border-b border-pink-500 pb-2">Experience</h3>
      <div className="space-y-10">
        {/* Experience Item */}
        <div>
          <h4 className="text-xl font-semibold text-pink-400">
            DevOps Engineer - Virtusa (Client: Citi Bank)
          </h4>
          <p className="text-gray-400 italic mb-2">2022 - 2023, Hyderabad, India</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>CI/CD automation with Jenkins and GitLab</li>
            <li>AWS infra management with Terraform</li>
            <li>Monitoring setup using Prometheus and Grafana</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-pink-400">
            DevOps Engineer - Infosys (Client: PwC)
          </h4>
          <p className="text-gray-400 italic mb-2">2020 - 2022, Hyderabad, India</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Built Docker/K8s-based deployments</li>
            <li>Azure DevOps integration</li>
            <li>Infra optimization</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-pink-400">
            Cloud Engineer - Infosys (Client: Conduent)
          </h4>
          <p className="text-gray-400 italic mb-2">2017 - 2020, Bangalore, India</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>AWS resource automation</li>
            <li>Python scripting for reporting</li>
            <li>On-call production support</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Skills */}
    <div>
      <h3 className="text-2xl font-bold mb-6 border-b border-pink-500 pb-2">Skills</h3>
      <ul className="flex flex-wrap gap-4 text-gray-300">
        {[
          "AWS",
          "Azure",
          "Kubernetes",
          "Docker",
          "Jenkins",
          "Terraform",
          "Python",
          "Prometheus",
          "Grafana",
        ].map((skill) => (
          <li
            key={skill}
            className="bg-pink-600 px-4 py-1 rounded-full text-sm font-semibold"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Resume;
