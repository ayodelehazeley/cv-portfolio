import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-300 py-2">
      <button
        className="w-full text-left font-semibold text-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <div className={`mt-2 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="pl-4 text-sm text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="font-sans text-gray-800 bg-white dark:bg-gray-900 dark:text-white">
      <section className="p-8 text-center bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Philip Ayodele Hazeley</h1>
        <p className="mt-2 text-xl">Digital Technology Expert | CTO | Cybersecurity & Cloud Strategist | Tech-for-Good Advocate</p>
        <p className="mt-2">📍 Freetown, Sierra Leone | 📧 ayodelehazeley@gmail.com | 📞 +232-78-369 816</p>
      </section>

      <section className=\"p-8 max-w-5xl mx-auto\">
  <h2 className=\"text-2xl font-bold mb-4\">Professional Summary</h2>
  <p>
    Visionary digital leader with 8+ years’ experience in technology innovation, systems engineering, cloud computing, and cybersecurity. Proven record of driving digital transformation across fintech, telecoms, and humanitarian sectors. A CTO-level technologist with expertise in AI, DevOps, Blockchain, and Digital Infrastructure, with a passion for tech-for-good, impact-driven innovation, and resilient systems. Spearheaded projects for FirstBank, Orange, Project Last Mile, and Track Your Build; led teams on blockchain identity, ITSM automation, and AI-driven customer engagement. Committed to knowledge sharing and community tech growth through volunteering, mentoring, and leadership.
  </p>
</section>

$1
        <ul className="space-y-6">
          <li><strong>Technology Project Consultant — GTMS Liberia (2025–Present):</strong> Led IT transformation projects, resilience planning, and ISO 27001 QMS support.</li>
          <li><strong>Chief Information Security Officer — First Bank Sierra Leone (2024):</strong> Delivered bank-wide infosec strategy, deployed SIEM, IAM, DevSecOps and built Tier 1 Data Centre.</li>
          <li><strong>Digital, Retention and Loyalty Lead — Orange Sierra Leone (2023):</strong> Automated segmentation with AI, led CX ISO certification, reduced churn by 18%.</li>
          <li><strong>Consultant, Digital Systems Analyst — Project Last Mile (2022):</strong> Built logistics tracking tools using mSupply; trained 100+ public health staff.</li>
          <li><strong>National ICT Coordinator — SOS Children’s Villages Sierra Leone (2020):</strong> Standardized IT policy, VPN setup with Cisco Meraki, digital lab and monitoring systems.</li>
          <li><strong>Chief Technology Officer — Track Your Build Africa (2018–2020):</strong> Migrated data to AWS, led drone mapping and GIS/DevOps team development.</li>
          <li><strong>Systems Administrator — ASA Microfinance Sierra Leone (2016–2018):</strong> Managed server security, deployed AMBS App on tablets, introduced ticketing systems.</li>
          <li><strong>IT Operations Supervisor — TPMS/GTMS Sierra Leone (2014–2016):</strong> Modernized cargo registration systems and trained shipping agents.</li>
        </ul>
      </section>

      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <Accordion title="Cybersecurity">
          <ul className="list-disc ml-4">
            <li>CEH v11 – Cybersecurity Basics, Cyber Kill Chain (Skillsoft)</li>
            <li>(ISC)² CC - Cybersecurity – ISC2</li>
            <li>Fortinet Certified Fundamentals – Fortinet</li>
            <li>Cybersecurity Essentials – Linux Foundation</li>
            <li>Intro to Cybersecurity – Cisco</li>
            <li>Cyber Awareness – CyberSafe, LetsDefend SOC Member</li>
          </ul>
        </Accordion>
        <Accordion title="AI & Machine Learning">
          <ul className="list-disc ml-4">
            <li>Generative AI Fundamentals – Google Cloud & Databricks</li>
            <li>Introduction to LLMs – Google Cloud</li>
            <li>Responsible AI – Google Cloud</li>
            <li>Generative AI for Project Managers – PMI</li>
          </ul>
        </Accordion>
        <Accordion title="Cloud, DevOps & Tools">
          <ul className="list-disc ml-4">
            <li>Event-native API Foundations – Gravitee</li>
            <li>Git, Agile Intro – IBM</li>
            <li>Packet Tracer – Cisco</li>
            <li>TeamOps Foundations – GitLab</li>
            <li>OpenSSF Scorecard – Linux Foundation</li>
          </ul>
        </Accordion>
        <Accordion title="Fintech & Payments">
          <ul className="list-disc ml-4">
            <li>Introduction to FinTech – CFI</li>
            <li>Payments Masterclass – CFTE</li>
            <li>Regtech Masterclass – CFTE</li>
            <li>Mastercard Cybersecurity Job Simulation</li>
          </ul>
        </Accordion>
        <Accordion title="Agile & Project Management">
          <ul className="list-disc ml-4">
            <li>Predictive Project Management – PMI</li>
            <li>Fundamentals of Agile PM – PMI</li>
            <li>Agile Data & Info Management – Charles Sturt Univ</li>
          </ul>
        </Accordion>
        <Accordion title="Other Notables">
          <ul className="list-disc ml-4">
            <li>Introduction to Technology Apprenticeship – Accenture</li>
            <li>Google Africa Dev Training</li>
            <li>AI Intro, IoT Design – IBM & PTC</li>
            <li>CompTIA A+</li>
          </ul>
        </Accordion>
      </section>

      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>📧 <a href="mailto:ayodelehazeley@gmail.com" className="underline text-blue-500">ayodelehazeley@gmail.com</a></p>
        <p>🌐 <a href="https://linkedin.com/in/dele-hazeley" className="underline text-blue-500">linkedin.com/in/dele-hazeley</a></p>
      </section>
    </main>
  );
}
