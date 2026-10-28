"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Expense Tracker",
    tagline: "Full-stack finance management app",
    description:
      "A full-stack personal finance application built from scratch with secure JWT authentication, category management, real-time analytics, and a clean responsive UI. Users can track spending, visualise trends with interactive charts, and manage budgets by category.",
    tech: ["React", "Spring Boot", "PostgreSQL", "JWT", "Recharts", "React Query"],
    status: "Live",
    github: "https://github.com/Orine99",
    featured: true,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Academic Probation Alert System",
    tagline: "Desktop application with Prolog AI rules",
    description:
      "A role-based desktop application for academic monitoring with Student and Admin logins. Implemented GPA calculation logic in Python with SQLite persistence, and encoded university probation policies as Prolog rules — separating policy logic from application code.",
    tech: ["Python", "SQLite", "Prolog", "Tkinter"],
    status: "Completed",
    github: "https://github.com/Orine99",
    featured: false,
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative group rounded-2xl border ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-sm p-6 card-hover cursor-pointer`}
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: `opacity 0.6s ease ${index * 150}ms, transform 0.6s ease ${index * 150}ms, box-shadow 0.3s ease, translate 0.3s ease`,
      }}
    >
      {project.featured && (
        <div className="absolute -top-3 left-6">
          <span className="px-3 py-1 text-xs font-semibold bg-accent text-navy-950 rounded-full">
            Featured
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-xl bg-white/10 text-accent">{project.icon}</div>
        <div className="flex items-center gap-2">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-medium ${
              project.status === "Live"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
            }`}
          >
            {project.status === "Live" && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse" />}
            {project.status}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-gray-400 mb-3 font-medium">{project.tagline}</p>
      <p className="text-gray-300 text-sm leading-relaxed mb-5">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-mono"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-medium"
          onClick={(e) => e.stopPropagation()}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          View Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-accent hover:text-blue-400 transition-colors font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">What I&apos;ve Built</p>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Real applications built end-to-end — from database schema to deployed UI.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More coming */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            More projects coming soon —{" "}
            <a
              href="https://github.com/Orine99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              follow on GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
