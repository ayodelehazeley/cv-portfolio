
import React from 'react';

export default function Home() {
  return (
    <main className="font-sans text-gray-800 bg-white dark:bg-gray-900 dark:text-white">
      <section className="p-8 text-center bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Philip Ayodele Hazeley</h1>
        <p className="mt-2 text-xl">Digital Technology Expert | CTO | Cybersecurity & Cloud Strategist | Tech-for-Good Advocate</p>
        <p className="mt-2">📍 Freetown, Sierra Leone | 📧 ayodelehazeley@gmail.com | 📞 +232-78-369 816</p>
      </section>

      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
        <p>
          Visionary digital leader with 8+ years’ experience in technology innovation, systems engineering, cloud computing, and cybersecurity. Proven track record in driving digital transformation across fintech, telecoms, and humanitarian sectors. CTO-level technologist with deep skills in AI, DevOps, Blockchain, and Digital Infrastructure, with a passion for tech-for-good and impact-driven innovation.
        </p>
      </section>

      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="font-semibold">Technology Project Consultant — GTMS Liberia (2025–Present)</h3>
            <ul className="list-disc ml-6">
              <li>Led IT transformation projects, cross-border cloud migration, and ISO 27001 QMS support.</li>
            </ul>
          </li>
          <li>
            <h3 className="font-semibold">Chief Information Security Officer — First Bank Sierra Leone (2024)</h3>
            <ul className="list-disc ml-6">
              <li>Led bank’s infosec strategy, built Tier 1 DC & DR, deployed SIEM and DevSecOps practices.</li>
            </ul>
          </li>
          <li>
            <h3 className="font-semibold">Digital & Loyalty Lead — Orange Sierra Leone (2023)</h3>
            <ul className="list-disc ml-6">
              <li>Reduced churn 18%, launched AI customer sentiment pipeline, led ISO 27001 CX implementation.</li>
            </ul>
          </li>
          <li>
            <h3 className="font-semibold">Consultant, Digital Systems — Project Last Mile (2022)</h3>
            <ul className="list-disc ml-6">
              <li>Built logistics systems for medical supplies, trained 100+ public health workers.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Key Projects</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>GPS Vehicle Tracking & Fuel Monitoring — Designed and deployed for commercial fleets.</li>
          <li>Phazel Solutions — Co-founded firm for SME cloud migrations and automation.</li>
          <li>Fintech Sandbox (Innovation SL) — Led bank integrations and API testing environment.</li>
        </ul>
      </section>

      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Education & Certifications</h2>
        <p><strong>B. Computer Engineering</strong> — Saint Monica University (2015–2019)</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Google, Fortinet, ISC2, PMI, IBM, CFI, CFTE — 30+ Certifications in AI, Cloud, Security & Fintech</li>
        </ul>
      </section>

      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
        <p className="mb-2"><strong>Cloud/DevOps:</strong> AWS, Azure, Docker, Jenkins, Terraform, CI/CD</p>
        <p className="mb-2"><strong>Security:</strong> SIEM, IAM, Vulnerability Management, DevSecOps</p>
        <p className="mb-2"><strong>Programming:</strong> Python, JavaScript, React, Bash</p>
        <p className="mb-2"><strong>AI/Data:</strong> GPT, Whisper, LangChain, HuggingFace, Pandas</p>
        <p className="mb-2"><strong>Platforms:</strong> Salesforce, Airtable, Power BI, Twilio</p>
      </section>

      <footer className="p-8 text-center bg-gray-100 dark:bg-gray-800">
        <p>Connect: <a href="mailto:ayodelehazeley@gmail.com" className="underline text-blue-500">ayodelehazeley@gmail.com</a></p>
        <p><a href="https://linkedin.com/in/dele-hazeley" className="underline text-blue-500">linkedin.com/in/dele-hazeley</a></p>
      </footer>
    </main>
  );
}
