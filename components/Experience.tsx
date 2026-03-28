"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed / Remote",
    period: "2023 — Present",
    type: "Freelance",
    desc: [
      "Built and deployed multiple production web applications including an event management platform (skyproduction.in) and an MBA admission portal (mbaadda.com).",
      "Delivered end-to-end solutions: requirements gathering, UI design, frontend & backend development, and deployment.",
      "Worked with clients across event management, education, and entertainment sectors.",
    ],
  },
  {
    role: "Full Stack Developer (Personal Projects)",
    company: "Open Source & Portfolio",
    period: "2022 — Present",
    type: "Self-Directed",
    desc: [
      "Built QuickShow — a full-stack MERN movie ticket booking app with Stripe payments, Clerk auth, real-time seat locking, and Inngest background jobs.",
      "Integrated third-party services including TMDB API, Stripe, Brevo email, and Clerk authentication.",
      "Deployed projects on Vercel with CI/CD pipelines and custom domain configurations.",
    ],
  },
];

const education = [
  {
    degree: "Computer Science / Engineering",
    school: "University (India)",
    period: "2020 — 2024",
    note: "Relevant coursework: Data Structures, Algorithms, DBMS, Web Technologies, Operating Systems.",
  },
  {
    degree: "MERN Stack Development",
    school: "Self-Directed Learning",
    period: "2022 — Present",
    note: "React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, Stripe, Clerk, Vercel deployment.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-[var(--accent)] mb-3">
            // experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Background &amp; Journey
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Work */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-8 text-sm font-semibold text-[var(--muted)]">
              <Briefcase size={16} />
              Work Experience
            </div>
            <div className="space-y-0">
              {experience.map((e, i) => (
                <motion.div
                  key={e.role + e.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-8 pb-10 border-l border-[var(--border)] last:border-transparent"
                >
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--accent)] border-2 border-[var(--background)]" />
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold">{e.role}</h3>
                      <p className="text-[var(--muted)] text-sm">{e.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[var(--muted)]">{e.period}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--card)] border border-[var(--border)] text-[var(--muted)]">
                        {e.type}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {e.desc.map((d) => (
                      <li
                        key={d}
                        className="text-sm text-[var(--muted)] flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8 text-sm font-semibold text-[var(--muted)]">
              <GraduationCap size={16} />
              Education
            </div>
            <div className="space-y-5">
              {education.map((e, i) => (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                  className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]"
                >
                  <h4 className="font-semibold text-sm mb-1">{e.degree}</h4>
                  <p className="text-[var(--muted)] text-sm">{e.school}</p>
                  <p className="text-xs text-[var(--muted)] mt-1">{e.period}</p>
                  <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed border-t border-[var(--border)] pt-2">
                    {e.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
