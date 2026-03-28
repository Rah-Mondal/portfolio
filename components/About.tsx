"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Brain, Zap } from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    desc: "Pixel-perfect UIs with React and Next.js, optimized for performance and accessibility.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    desc: "REST and GraphQL APIs, microservices architecture, and scalable Node.js services.",
  },
  {
    icon: Brain,
    title: "System Design",
    desc: "Architecture decisions that balance scalability, maintainability, and delivery speed.",
  },
  {
    icon: Zap,
    title: "Performance Focus",
    desc: "Lighthouse 95+ scores, optimized DB queries, and CDN-first deployment strategies.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-[var(--accent)] mb-3">
            // about
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building things that matter
          </h2>
          <div className="max-w-2xl space-y-4 text-[var(--muted)] leading-relaxed text-lg">
            <p>
              I&apos;m Rahul Mondal, a passionate Full Stack Developer focused
              on the MERN stack. I build complete web products — from event
              management platforms and education portals to real-time movie
              booking apps — turning ideas into polished, deployed applications.
            </p>
            <p>
              I thrive at the intersection of frontend craft and backend
              engineering. Whether it&apos;s integrating third-party APIs,
              wiring up payment systems, or designing clean UI flows, I care
              about shipping things that work and look great.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                <s.icon size={20} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
