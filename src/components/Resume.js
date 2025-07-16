import React from 'react';

const Resume = () => (
  <section id="resume">
    <h2>Resume</h2>

    <div className="edu-item">
      <h3>B.Tech in Electronics and Communication Engineering</h3>
      <p>JNTUH, Hyderabad, India</p>
    </div>
    <div className="edu-item">
      <h3>M.Tech in Embedded Systems</h3>
      <p>CVR College of Engineering, Hyderabad, India</p>
    </div>

    <div className="exp-item">
      <h3>DevOps Engineer - Virtusa (Client: Citi Bank)</h3>
      <p>2022 - 2023, Hyderabad, India</p>
      <ul>
        <li>CI/CD automation with Jenkins and GitLab</li>
        <li>AWS infra management with Terraform</li>
        <li>Monitoring setup using Prometheus and Grafana</li>
      </ul>
    </div>

    <div className="exp-item">
      <h3>DevOps Engineer - Infosys (Client: PwC)</h3>
      <p>2020 - 2022, Hyderabad, India</p>
      <ul>
        <li>Built Docker/K8s-based deployments</li>
        <li>Azure DevOps integration</li>
        <li>Infra optimization</li>
      </ul>
    </div>

    <div className="exp-item">
      <h3>Cloud Engineer - Infosys (Client: Conduent)</h3>
      <p>2017 - 2020, Bangalore, India</p>
      <ul>
        <li>AWS resource automation</li>
        <li>Python scripting for reporting</li>
        <li>On-call production support</li>
      </ul>
    </div>

    <h3>Skills</h3>
    <ul className="skills-list">
      <li>AWS</li>
      <li>Azure</li>
      <li>Kubernetes</li>
      <li>Docker</li>
      <li>Jenkins</li>
      <li>Terraform</li>
      <li>Python</li>
      <li>Prometheus</li>
      <li>Grafana</li>
    </ul>
  </section>
);

export default Resume;

