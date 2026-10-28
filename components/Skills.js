"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    icon: "⌨️",
    skills: ["Java", "Python", "JavaScript", "C/C++", "SQL", "HTML5", "CSS3", "Prolog"],
  },
  {
    category: "Backend & APIs",
    icon: "⚙️",
    skills: ["Spring Boot", "Spring Security", "JWT Auth", "REST APIs", "Maven"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "Tailwind CSS", "React Query", "Recharts"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "SQLite", "JPA / Hibernate"],
  },
  {
    category: "Tools & Concepts",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "OOP", "Data Structures & Algorithms", "Software Documentation"],
  },
  {
    category: "Exploring",
    icon: "🚀",
    skills: ["WebSockets", "Docker", "TypeScript", "Redis"],
  },
];

function SkillGroup({ group, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{group.icon}</span>
        <h3 className="font-bold text-gray-900 group-hover:text-accent transition-colors">
          {group.category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-600 text-sm font-medium hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="text-4xl font-black text-gray-900 mb-4">Skills</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            A solid foundation built through coursework, personal projects, and constant learning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.category} group={group} index={i} />
          ))}
        </div>

        {/* Education callout */}
        <div className="mt-14 p-8 rounded-2xl bg-navy-950 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="p-3 rounded-xl bg-accent/20 border border-accent/30 shrink-0">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-1">
              University of Technology, Jamaica
            </h3>
            <p className="text-gray-300 font-medium mb-1">
              B.S. in Computing — Computer Science Major
            </p>
            <p className="text-accent font-semibold">
              First Class Honours · GPA 3.77 · Dean&apos;s List 2021–2022
            </p>
          </div>
          <div className="sm:ml-auto text-right shrink-0">
            <span className="px-4 py-2 rounded-xl bg-accent/20 border border-accent/30 text-accent font-mono text-sm font-bold">
              Awarded July 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
