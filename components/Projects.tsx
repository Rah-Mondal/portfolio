"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "Sky Production — Event Management Platform",
    description:
      "A full-featured website for Sky Production, a Bangalore-based luxury event management company. The platform showcases services like corporate events, product launches, music fests, fashion shows, and award ceremonies — with a clean UI to attract high-value clients.",
    stack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    features: [
      "Service showcase covering corporate events, product launches, music fests, fashion events, and award shows",
      "Fully responsive landing page optimised for mobile and desktop",
      "Contact and inquiry flow to capture leads from potential clients",
      "Dynamic content sections with smooth scroll and transitions",
      "Deployed on a custom domain (skyproduction.in) with production hosting",
    ],
    challenge:
      "Designing a site that communicates luxury and professionalism while remaining fast and accessible. Solved by using a minimal, content-first layout with high-impact typography and careful use of whitespace — keeping page load times under 2s.",
    demo: "https://www.skyproduction.in/",
    repo: "https://github.com/Rah-Mondal",
    tag: "Live Project",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  },
  {
    title: "MBA Adda — MBA Admission Portal",
    description:
      "An end-to-end MBA admission portal helping students discover, compare, and apply to top MBA colleges across India. The platform streamlines the entire admission journey — from college discovery to personalised guidance and application submission.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      "Comprehensive college listing with filters for location, fees, rankings, and specialisations",
      "Online application flow with form validation and progress tracking",
      "Personalised MBA guidance module to match students with suitable programs",
      "SEO-optimised pages for top MBA college search queries in India",
      "Admin panel to manage college listings and incoming applications",
    ],
    challenge:
      "Handling dynamic, filterable college data across hundreds of institutions while maintaining fast page loads. Implemented server-side filtering with paginated API responses and client-side caching to keep interactions snappy.",
    demo: "https://www.mbaadda.com/",
    repo: "https://github.com/Rah-Mondal",
    tag: "Live Project",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    title: "QuickShow — Full Stack Movie Ticket Booking App",
    description:
      "A production-grade, real-time movie ticket booking platform. Users can browse movies powered by the TMDB API, select showtimes, pick seats, and complete secure payments via Stripe — all within a polished, responsive interface.",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Clerk Auth",
      "Stripe",
      "Inngest",
      "Tailwind CSS",
      "Vercel",
    ],
    features: [
      "Live movie data from TMDB API with dynamic show management via admin panel",
      "Interactive seat selection UI with real-time locking to prevent double-booking",
      "Secure Stripe payment integration with booking confirmation emails via Brevo",
      "Role-based access control — separate flows for users and admins using Clerk",
      "Background jobs via Inngest for async tasks like email notifications",
    ],
    challenge:
      "Preventing race conditions during concurrent seat selection. Solved by implementing a server-side seat-locking mechanism with TTL expiry — a seat is temporarily reserved on selection and released if payment isn't completed within a defined window.",
    demo: "https://quickshow-client-ecru.vercel.app/",
    repo: "https://github.com/Rah-Mondal",
    tag: "MERN Stack",
    tagColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  },
];

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden card-hover"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span
              className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium border ${project.tagColor} mb-3`}
            >
              {project.tag}
            </span>
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                aria-label="Live demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
              aria-label="GitHub repo"
            >
              <Github size={16} />
            </a>
          </div>
        </div>

        <p className="text-[var(--muted)] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs rounded-md border border-[var(--border)] text-[var(--muted)] font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Key features */}
        <ul className="space-y-2 mb-4">
          {project.features.slice(0, expanded ? undefined : 3).map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-[var(--muted)]"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Expandable challenge section */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 p-4 rounded-lg bg-[var(--background)] border border-[var(--border)]"
          >
            <p className="text-xs font-semibold text-[var(--accent)] mb-2 uppercase tracking-widest">
              Challenge &amp; Solution
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>
        )}

        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
        >
          {expanded ? (
            <>
              Show less <ChevronUp size={14} />
            </>
          ) : (
            <>
              Show challenge &amp; more <ChevronDown size={14} />
            </>
          )}
        </button>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-[var(--accent)] mb-3">
            // projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shipped to production
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-xl">
            Real projects with real users. Each one solves a concrete problem
            and was built end-to-end — from design to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
