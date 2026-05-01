"use client";

import { motion, useReducedMotion } from "framer-motion";

const TECH_CHIPS = [
  "React",
  "Node.js",
  "PostgreSQL",
  "TypeScript",
  "Docker",
  "AWS",
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden grid-pattern"
      aria-label="Introduction"
    >
      {/* gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full">
        {/* Status badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-outline-variant bg-surface-container-low">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          <span className="font-space-grotesk text-xs uppercase tracking-widest text-on-surface-variant">
            Available for new opportunities
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-space-grotesk font-bold text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-white mb-6"
        >
          Full-Stack Software
          <br />
          <span className="text-primary italic">Developer</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.2)}
          className="font-inter text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Architecting scalable digital ecosystems from front-end precision to
          robust back-end systems. Building the future of the web, one commit at
          a time.
        </motion.p>

        {/* CTA row */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group relative w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-space-grotesk font-semibold text-sm rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(78,222,163,0.3)] active:scale-95 transition-all duration-200"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-outline-variant text-white font-space-grotesk font-semibold text-sm rounded-xl hover:bg-surface-container-high hover:border-primary/40 active:scale-95 transition-all duration-200"
          >
            Download CV
          </a>
        </motion.div>

        {/* Tech chips — staggered */}
        <div className="flex flex-wrap justify-center gap-3 opacity-70">
          {TECH_CHIPS.map((chip, i) => (
            <motion.span
              key={chip}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
              className="px-3 py-1 bg-surface-container border border-outline-variant text-xs font-space-grotesk rounded text-on-surface-variant tracking-wide"
            >
              {chip}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
