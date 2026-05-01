"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
      >
        <div>
          <span className="font-space-grotesk text-primary text-xs uppercase tracking-[0.2em]">
            Portfolio
          </span>
          <h2 className="font-space-grotesk text-5xl font-bold text-white mt-2 tracking-tight">
            Selected Works
          </h2>
        </div>
        <p className="font-inter text-on-surface-variant max-w-xs text-base leading-relaxed">
          A collection of production-grade systems and technical experiments.
        </p>
      </motion.div>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
