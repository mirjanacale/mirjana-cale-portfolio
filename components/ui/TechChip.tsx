interface TechChipProps {
  label: string;
  variant?: "default" | "hero" | "tag";
}

export default function TechChip({ label, variant = "default" }: TechChipProps) {
  if (variant === "hero") {
    return (
      <span className="px-3 py-1 bg-surface-container border border-outline-variant text-xs font-space-grotesk tracking-wide rounded text-on-surface-variant">
        {label}
      </span>
    );
  }

  if (variant === "tag") {
    return (
      <span className="text-[10px] font-space-grotesk px-2 py-0.5 rounded border border-primary/30 text-primary uppercase tracking-wide">
        {label}
      </span>
    );
  }

  return (
    <span className="px-3 py-1 bg-surface-container-high border border-outline-variant text-[11px] font-space-grotesk rounded text-on-surface-variant glow-tag transition-all cursor-default">
      {label}
    </span>
  );
}
