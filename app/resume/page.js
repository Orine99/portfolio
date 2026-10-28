"use client";

import { useState } from "react";

export default function ResumePage() {
  const [pdfError, setPdfError] = useState(false);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-navy-950 py-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 hero-glow" />
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-accent font-mono text-sm tracking-widest uppercase mb-2">Career Profile</p>
              <h1 className="text-4xl font-black text-white mb-2">Resume</h1>
              <p className="text-gray-400">
                B.S. Computing — First Class Honours · University of Technology, Jamaica
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/resume.pdf"
                download="Orine_Stephenson_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-navy-950 font-semibold hover:bg-blue-400 transition-all text-sm shadow-lg shadow-accent/25"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
              <a
                href="mailto:orinestephenson4@gmail.com?subject=Opportunity%20for%20Orine%20Stephenson"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white font-semibold hover:border-accent/50 hover:bg-white/5 transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="py-12 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {!pdfError ? (
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <iframe
                src="/resume.pdf#toolbar=1&navpanes=0"
                className="w-full"
                style={{ height: "85vh", minHeight: "600px" }}
                title="Orine Stephenson Resume"
                onError={() => setPdfError(true)}
              />
            </div>
          ) : (
            /* Fallback — text version of resume */
            <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 space-y-10 shadow-xl">
              {/* Header */}
              <div className="border-b border-gray-100 pb-8">
                <h2 className="text-3xl font-black text-gray-900">Orine Stephenson</h2>
                <p className="text-accent font-medium mt-1">Full-Stack Developer</p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                  <span>📍 Kingston, Jamaica</span>
                  <a href="mailto:orinestephenson4@gmail.com" className="hover:text-accent transition-colors">✉️ orinestephenson4@gmail.com</a>
                  <a href="tel:+18767725846" className="hover:text-accent transition-colors">📞 (876) 772-5846</a>
                  <a href="https://www.linkedin.com/in/orine-stephenson-ba7689238/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">🔗 LinkedIn</a>
                  <a href="https://github.com/Orine99" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">💻 GitHub</a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Summary</h3>
                <p className="text-gray-600 leading-relaxed">
                  Computer Science graduate (B.S. Computing, First Class Honours, GPA 3.77) from the University of
                  Technology, Jamaica, with a strong foundation in Java, Python, SQL, object-oriented design, and data
                  structures and algorithms. Experienced in building database-backed applications from requirements through
                  documentation. Seeking a Software Engineering Internship to contribute to production code and grow as a
                  backend/full-stack engineer.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Education</h3>
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <p className="font-bold text-gray-900">University of Technology, Jamaica</p>
                    <p className="text-gray-600">B.S. in Computing, Computer Science Major — First Class Honours</p>
                    <p className="text-sm text-gray-500 mt-1">GPA: 3.77 · Dean&apos;s List (2021–2022)</p>
                  </div>
                  <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-lg text-accent text-sm font-medium">
                    Awarded July 2026
                  </span>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Technical Skills</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium text-gray-800">Languages:</span> Java, Python, C/C++, SQL, Prolog, HTML5, CSS3, JavaScript</p>
                  <p><span className="font-medium text-gray-800">Frameworks & Libraries:</span> Spring Boot, Spring Security, React, Next.js, Tailwind CSS, React Query, Recharts</p>
                  <p><span className="font-medium text-gray-800">Databases & Tools:</span> PostgreSQL, SQLite, Git, GitHub, VS Code, Maven</p>
                  <p><span className="font-medium text-gray-800">Concepts:</span> OOP, Data Structures & Algorithms, REST APIs, JWT Authentication, Software Documentation</p>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Projects</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <p className="font-bold text-gray-900">Expense Tracker</p>
                      <span className="text-sm text-gray-400 font-mono">React · Spring Boot · PostgreSQL · JWT</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Full-stack finance management app with secure JWT authentication and role-based access.</li>
                      <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Built REST API in Spring Boot with expense/category CRUD, budget tracking, and analytics endpoints.</li>
                      <li className="flex gap-2"><span className="text-accent shrink-0">•</span>React frontend with real-time charts (Recharts), React Query caching, and responsive UI.</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <p className="font-bold text-gray-900">Academic Probation Alert System</p>
                      <span className="text-sm text-gray-400 font-mono">Python · SQLite · Prolog</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Desktop app with role-based Student and Admin logins for academic monitoring.</li>
                      <li className="flex gap-2"><span className="text-accent shrink-0">•</span>GPA calculation in Python with SQLite persistence; probation policies encoded as Prolog rules.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Work Experience</h3>
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <div>
                    <p className="font-bold text-gray-900">Lifeguard — American Pools</p>
                    <p className="text-sm text-gray-500">Philadelphia, PA · Summer 2023</p>
                  </div>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Enforced safety policies for 25–50 swimmers per shift, provided CPR/First Aid response.</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Collaborated in a 6-person team, coordinating rotations in high-pressure situations.</li>
                </ul>
              </div>

              {/* Leadership */}
              <div>
                <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Leadership & Activities</h3>
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <div>
                    <p className="font-bold text-gray-900">Executive Assistant — UTech Youth Empowerment Society</p>
                    <p className="text-sm text-gray-500">UTech, Jamaica</p>
                  </div>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Coordinated service projects with 15+ volunteers, handling planning, scheduling, and communication.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
