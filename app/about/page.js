import ProfileImage from "@/components/ProfileImage";

export const metadata = {
  title: "About — Orine Stephenson",
  description: "Learn about Orine Stephenson — mission, vision, values, and the story behind the code.",
};

const values = [
  {
    icon: "🎯",
    title: "Craft Over Speed",
    description:
      "I believe good code is written twice — once to make it work, once to make it right. I take pride in clean architecture, meaningful variable names, and code that the next developer can understand.",
  },
  {
    icon: "🔁",
    title: "Continuous Learning",
    description:
      "Every project I finish teaches me something the next one needs. I approach technology with curiosity — reading docs, building side projects, and staying close to the communities that push the craft forward.",
  },
  {
    icon: "🤝",
    title: "People First",
    description:
      "Software exists to serve people. I keep end users in mind from the first line of code — building things that are intuitive, reliable, and actually solve the problem they came with.",
  },
  {
    icon: "📐",
    title: "Thoughtful Design",
    description:
      "The best features are the ones users never notice — because they just work. I care about the details: good error messages, loading states, mobile layouts, and the small touches that make software feel polished.",
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-navy-950 py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 hero-glow" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Who I Am</p>
          <h1 className="text-5xl font-black text-white mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A Computer Science graduate from Jamaica, building full-stack software that solves
            real problems for real people.
          </p>
        </div>
      </section>

      {/* Story + Photo */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          {/* Photo */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start gap-4">
            <div className="relative">
                <ProfileImage />
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-2xl border border-accent/20 -z-10" />
            </div>

            <div className="text-center md:text-left">
              <p className="font-bold text-gray-900 text-lg">Orine Stephenson</p>
              <p className="text-accent text-sm font-medium">Full-Stack Developer</p>
              <p className="text-gray-400 text-sm mt-1">Kingston, Jamaica 🇯🇲</p>
            </div>

            {/* Quick stats */}
            <div className="w-full space-y-3 mt-2">
              {[
                { label: "GPA", value: "3.77" },
                { label: "Distinction", value: "First Class Honours" },
                { label: "Focus", value: "Backend / Full-Stack" },
                { label: "Status", value: "Open to opportunities" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-2 border-b border-gray-100 text-sm">
                  <span className="text-gray-400">{label}</span>
                  <span className="text-gray-800 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Story */}
          <div className="md:col-span-3 space-y-6 text-gray-600 leading-relaxed">
            <p className="text-gray-900 text-xl font-semibold">
              I&apos;m a first-class Computer Science graduate who builds software from scratch.
            </p>
            <p>
              From Kingston, Jamaica, I graduated with a B.S. in Computing from the University of
              Technology, Jamaica — earning First Class Honours and a 3.77 GPA. I built my skills
              through both coursework and real projects: designing database schemas, writing
              backend APIs, building frontend interfaces, and deploying the whole thing.
            </p>
            <p>
              My most complete project so far is a full-stack Expense Tracker — secure JWT
              authentication, REST API in Spring Boot, PostgreSQL database, React frontend with
              interactive analytics. Everything I&apos;ve learned about software design, clean
              architecture, and thoughtful UX went into it.
            </p>
            <p>
              I&apos;m actively seeking a software engineering internship where I can contribute to
              production code, learn from experienced engineers, and keep building things that
              matter.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-navy-950 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -translate-y-20 translate-x-20" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-white font-bold text-lg">Mission</h2>
                </div>
                <p className="text-gray-300 leading-relaxed italic">
                  &ldquo;To build software that solves real problems for real people — writing clean,
                  thoughtful code that makes everyday life a little easier for the people who use
                  it.&rdquo;
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-accent/30 hover:shadow-lg transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -translate-y-20 translate-x-20" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 font-bold text-lg">Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  &ldquo;To become a well-rounded full-stack engineer who builds products from idea to
                  deployment — contributing to teams that value craftsmanship, continuous learning,
                  and shipping things that matter.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">What Drives Me</p>
            <h2 className="text-4xl font-black text-gray-900">My Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{v.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
