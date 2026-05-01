"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group rounded-xl border border-outline-variant bg-surface-container-low overflow-hidden hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="h-48 bg-surface-container-high overflow-hidden relative flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center p-8 opacity-40 group-hover:scale-110 transition-transform duration-700">
          <span
            className="material-symbols-outlined text-on-surface-variant"
            style={{ fontSize: "6rem" }}
          >
            {project.icon}
          </span>
        </div>
        {project.isLive && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-surface-container/80 backdrop-blur-sm border border-outline-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-space-grotesk text-primary uppercase tracking-widest">
              Live
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className={`text-[10px] font-space-grotesk px-2 py-0.5 rounded border uppercase tracking-wide ${
                i === 0
                  ? "border-primary/30 text-primary"
                  : "border-outline-variant text-on-surface-variant"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-space-grotesk text-xl font-semibold text-white mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="text-on-surface-variant text-sm mb-6 line-clamp-2 leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <a
            href={project.liveUrl}
            className="text-xs font-space-grotesk text-primary flex items-center gap-1 hover:underline tracking-wide"
          >
            {project.linkLabel}
            <span className="material-symbols-outlined text-sm">
              {project.linkIcon}
            </span>
          </a>
          <a
            href={project.githubUrl}
            aria-label={`${project.title} source code`}
            className="text-on-surface-variant hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
