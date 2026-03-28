"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const name = form.name.trim();
      const email = form.email.trim();
      const message = form.message.trim();

      if (!name || !email || !message) {
        throw new Error("All fields are required.");
      }

      // Try API first (works in development)
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });

        // If response is HTML (like a 404 page), this will throw
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message');
        }

        setForm({ name: "", email: "", message: "" });
        setSubmitted(true);
        return;
      } catch (apiError) {
        // API failed (likely static deployment), fall back to mailto
        console.log('API unavailable, falling back to mailto');
      }

      // Fallback: Open email client (works in static deployment)
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

      window.location.href = `mailto:rahulmondaldob2002@gmail.com?subject=${subject}&body=${body}`;
      setForm({ name: "", email: "", message: "" });
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-[var(--card)]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-[var(--accent)] mb-3">
            {"// contact"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-xl">
            Available for full-time roles and freelance projects. I respond to
            all messages within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <a
              href="mailto:rahulmondaldob2002@gmail.com"
              className="flex items-center gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)] transition-all group card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                <Mail size={20} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--muted)] mb-0.5">Email</p>
                <p className="font-medium group-hover:text-[var(--accent)] transition-colors">
                  rahulmondaldob2002@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Rah-Mondal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)] transition-all group card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                <Github size={20} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--muted)] mb-0.5">GitHub</p>
                <p className="font-medium group-hover:text-[var(--accent)] transition-colors">
                  github.com/Rah-Mondal
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/rahul-mondal-094b95288/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)] transition-all group card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                <Linkedin size={20} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--muted)] mb-0.5">LinkedIn</p>
                <p className="font-medium group-hover:text-[var(--accent)] transition-colors">
                  linkedin.com/in/rahul-mondal-094b95288
                </p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 p-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center">
                <CheckCircle size={40} className="text-emerald-400" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Message received!
                  </h3>
                  <p className="text-[var(--muted)] text-sm">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-6 md:p-8 rounded-xl border border-[var(--border)] bg-[var(--background)]"
              >
                <p className="text-sm text-[var(--muted)]">
                  Send me a message and I'll get back to you soon.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="John Smith"
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="john@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Describe your project or opportunity..."
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm resize-none"
                  />
                </div>
                {error ? (
                  <p className="text-sm text-red-400" role="alert">
                    {error}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 disabled:opacity-60 transition-all"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
