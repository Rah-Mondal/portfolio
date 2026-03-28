"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Frontend",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
      "React Query",
      "Storybook",
    ],
  },
  {
    label: "Backend",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "GraphQL",
      "REST APIs",
      "WebSockets",
      "tRPC",
      "Prisma",
    ],
  },
  {
    label: "Database",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "Elasticsearch",
      "Supabase",
      "Firebase",
      "SQLite",
    ],
  },
  {
    label: "DevOps & Tools",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
    skills: [
      "Docker",
      "GitHub Actions",
      "AWS",
      "Vercel",
      "Nginx",
      "Linux",
      "Git",
      "Terraform",
    ],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="py-28 px-6 bg-[var(--card)]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-[var(--accent)] mb-3">
            // tech_stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tools of the trade
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-xl">
            Technologies I use daily to ship production-grade applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-[var(--border)] bg-[var(--background)] card-hover"
            >
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${cat.bg} ${cat.color} border ${cat.border} mb-5`}
              >
                {cat.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-sm border border-[var(--border)] text-[var(--foreground)] bg-[var(--card)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
