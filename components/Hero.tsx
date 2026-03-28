"use client";

import { motion, Variants } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // ✅ fixed (no TS error)
    },
  }),
};

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto w-full pt-24">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] text-sm text-[var(--muted)] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Rahul Mondal</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-2xl md:text-3xl font-semibold text-[var(--muted)] mb-6"
        >
          Full Stack Web Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mb-10 leading-relaxed"
        >
          I build scalable web applications and real-world systems — from
          performant React frontends to robust Node.js APIs, complete with
          seamless payment integrations and cloud deployments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-all duration-200 shadow-lg shadow-indigo-500/25"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--foreground)] font-medium hover:bg-[var(--card)] transition-all duration-200"
          >
            Contact Me
          </button>

          {/* Social links */}
          <div className="flex items-center gap-3 ml-2">
            <a
              href="https://github.com/Rah-Mondal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-mondal-094b95288/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap gap-8"
        >
          {[
            { value: "3+", label: "Projects Shipped" },
            { value: "MERN", label: "Core Stack" },
            { value: "100%", label: "Passion Driven" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold gradient-text">{s.value}</p>
              <p className="text-sm text-[var(--muted)]">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: [0.42, 0, 0.58, 1], // ✅ fixed
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}