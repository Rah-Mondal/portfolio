"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, ArrowRight, Layers, Zap } from "lucide-react";

const steps = [
  {
    phase: "Problem",
    icon: Layers,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    content:
      "Building a movie booking app where multiple users could simultaneously select the same seat, leading to double-booking. Standard form-submit flows had no way to handle concurrent reservations, making the system unreliable for real-time use.",
  },
  {
    phase: "Approach",
    icon: Database,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    content:
      "Designed a seat-locking mechanism on the server side — when a user selects a seat, the backend temporarily marks it as \"held\" with a TTL. Only after successful Stripe payment is the seat permanently booked. Used MongoDB transactions to ensure atomicity.",
  },
  {
    phase: "System Design",
    icon: ArrowRight,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    content:
      "TMDB API feeds movie data into the admin panel. Admins schedule shows and manage seating. Clerk handles role-based auth. The booking flow — seat selection → lock → Stripe checkout → confirmation — runs through an Express API with Inngest handling async background jobs like confirmation emails.",
  },
  {
    phase: "Outcome",
    icon: Zap,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    content:
      "Zero double-bookings in production. Stripe integration processed payments reliably with automated email confirmations via Brevo. The admin panel allows dynamic show creation without code changes. Deployed on Vercel with sub-second cold starts.",
  },
];

const apiFlow = [
  { step: "1", label: "User Selects Seat", desc: "POST /api/bookings/hold — seat temporarily locked with TTL" },
  { step: "2", label: "Stripe Checkout", desc: "Client redirected to Stripe hosted checkout page" },
  { step: "3", label: "Payment Webhook", desc: "Stripe webhook fires → Express confirms booking in MongoDB" },
  { step: "4", label: "Inngest Job Triggered", desc: "Background job queued to send confirmation email via Brevo" },
  { step: "5", label: "TTL Expiry (failure path)", desc: "If payment abandoned, seat lock expires and seat is freed" },
];

export default function CaseStudy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="case-study" className="py-28 px-6 bg-[var(--card)]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-[var(--accent)] mb-3">
            // case_study
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            QuickShow — Building Zero Double-Booking Seat Reservations
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl">
            A deep dive into how QuickShow handles concurrent seat selection,
            real-time locking, and a full Stripe payment pipeline — end to end.
          </p>
        </motion.div>

        {/* Phase cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-[var(--border)] bg-[var(--background)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-8 h-8 rounded-lg ${s.bg} flex items-center justify-center`}
                >
                  <s.icon size={16} className={s.color} />
                </div>
                <span className={`font-semibold text-sm ${s.color}`}>
                  {s.phase}
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {s.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* API Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 md:p-8 rounded-xl border border-[var(--border)] bg-[var(--background)]"
        >
          <h3 className="font-semibold mb-6 flex items-center gap-2">
            <span className="text-[var(--accent)]">→</span> Booking API Flow
          </h3>
          <div className="space-y-0">
            {apiFlow.map((f, i) => (
              <div key={f.step} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-xs font-bold text-[var(--accent)] shrink-0">
                    {f.step}
                  </div>
                  {i < apiFlow.length - 1 && (
                    <div className="w-px h-8 bg-[var(--border)]" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="font-medium text-sm">{f.label}</p>
                  <p className="text-xs font-mono text-[var(--muted)] mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
