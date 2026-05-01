"use client";

import { motion, useReducedMotion } from "framer-motion";
import BentoCard from "@/components/ui/BentoCard";
import { skills } from "@/lib/skills";

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-8 bg-surface-container-lowest relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-space-grotesk text-primary text-xs uppercase tracking-[0.2em]">
            Technical Arsenal
          </span>
          <h2 className="font-space-grotesk text-5xl font-bold text-white mt-2 mb-4 tracking-tight">
            Technologies, AI Systems &amp; Creative Development
          </h2>
          <p className="font-inter text-on-surface-variant text-lg max-w-2xl">
            Building intelligent, scalable, and visually immersive digital
            experiences.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((card, i) => (
            <BentoCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
