"use client";

import { motion, useReducedMotion } from "framer-motion";

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Shipped" },
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
          viewport: { once: true },
        };

  return (
    <section id="about" className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <motion.div {...fadeUp(0)} className="relative group">
          <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
          <div className="relative rounded-xl overflow-hidden border border-outline-variant aspect-[320/411] bg-surface-container-high">
            {/* Replace the div below with <Image> once you add your own photo */}
            <div
              className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-lowest"
              aria-label="Profile photo placeholder — replace with your own image"
            >
              <span
                className="material-symbols-outlined text-on-surface-variant/20"
                style={{ fontSize: "8rem", fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 48" }}
                aria-hidden="true"
              >
                person
              </span>
              <p className="text-on-surface-variant/30 text-xs font-space-grotesk tracking-widest uppercase mt-4">
                Add your photo
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div {...fadeUp(0.1)}>
          <h2 className="font-space-grotesk text-5xl font-bold text-white mb-8 tracking-tight">
            Hi, I&apos;m Mirjana.
          </h2>
          <p className="font-inter text-lg text-on-surface-variant mb-6 leading-relaxed">
            I&apos;m a full-stack software developer who enjoys building complete
            web applications from frontend interfaces to backend systems. I work
            with modern tools to create scalable, user-focused solutions with
            clean design, strong functionality, and reliable performance.
          </p>
          <p className="font-inter text-base text-on-surface-variant/80 mb-8 leading-relaxed">
            Based at the intersection of design and logic, I specialize in
            crafting performant applications that solve complex problems without
            sacrificing user experience.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 border-t border-outline-variant pt-8">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <span className="block font-space-grotesk text-2xl font-semibold text-primary mb-1">
                  {value}
                </span>
                <span className="font-space-grotesk text-xs uppercase text-zinc-500 tracking-widest">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
