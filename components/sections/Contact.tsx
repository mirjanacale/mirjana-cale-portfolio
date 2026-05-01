"use client";

import { motion, useReducedMotion } from "framer-motion";

const SOCIAL_LINKS = [
  { icon: "terminal", label: "GitHub",   href: "#" },
  { icon: "link",     label: "LinkedIn", href: "#" },
  { icon: "share",    label: "Twitter",  href: "#" },
];

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-8 max-w-4xl mx-auto text-center"
    >
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-space-grotesk text-5xl font-bold text-white mb-6 tracking-tight italic">
          Ready to build?
        </h2>
        <p className="font-inter text-lg text-on-surface-variant mb-12 leading-relaxed">
          I am currently open to new opportunities and technical collaborations.
          Whether you have a specific project in mind or just want to talk
          architecture, my inbox is open.
        </p>

        <div className="flex flex-col items-center gap-8">
          {/* SAY HELLO button */}
          <a
            href="mailto:mirjana083@gmail.com"
            className="group relative px-12 py-5 bg-primary text-on-primary font-space-grotesk font-semibold rounded-xl overflow-hidden hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] active:scale-95 transition-all duration-200"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span className="material-symbols-outlined" aria-hidden="true">
                mail
              </span>
              SAY HELLO
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          {/* Social links */}
          <div className="flex items-center gap-12 mt-4">
            {SOCIAL_LINKS.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                  {icon}
                </span>
                <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-on-surface-variant">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
