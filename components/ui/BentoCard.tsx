"use client";

import { motion, useReducedMotion } from "framer-motion";
import TechChip from "./TechChip";
import type { SkillCard } from "@/lib/skills";

interface BentoCardProps {
  card: SkillCard;
  index: number;
}

export default function BentoCard({ card, index }: BentoCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="p-8 rounded-xl border border-outline-variant bg-zinc-950/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/20 transition-all duration-300">
        <span className="material-symbols-outlined text-primary text-2xl">
          {card.icon}
        </span>
      </div>
      <h3 className="font-space-grotesk text-2xl font-semibold text-white mb-4 tracking-tight">
        {card.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {card.tags.map((tag) => (
          <TechChip key={tag} label={tag} />
        ))}
      </div>
    </motion.div>
  );
}
