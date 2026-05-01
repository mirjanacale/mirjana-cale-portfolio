export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  liveUrl: string;
  githubUrl: string;
  linkLabel: string;
  linkIcon: string;
  isLive: boolean;
}

export const projects: Project[] = [
  {
    id: "cloudscale",
    title: "CloudScale Dashboard",
    description:
      "A high-performance infrastructure monitoring tool utilizing real-time WebSockets and Go concurrency for sub-100ms latency.",
    tags: ["React", "Go", "AWS"],
    icon: "query_stats",
    liveUrl: "#",
    githubUrl: "#",
    linkLabel: "LIVE DEMO",
    linkIcon: "open_in_new",
    isLive: true,
  },
  {
    id: "securevault",
    title: "SecureVault API",
    description:
      "Enterprise-grade secret management system featuring AES-256 encryption and zero-knowledge architecture.",
    tags: ["TypeScript", "Redis", "Docker"],
    icon: "shield_lock",
    liveUrl: "#",
    githubUrl: "#",
    linkLabel: "DOCUMENTATION",
    linkIcon: "book",
    isLive: false,
  },
  {
    id: "omnicommerce",
    title: "OmniCommerce Engine",
    description:
      "Headless e-commerce platform with automated inventory syncing across multiple marketplaces.",
    tags: ["Node.js", "Postgres", "Stripe"],
    icon: "shopping_cart_checkout",
    liveUrl: "#",
    githubUrl: "#",
    linkLabel: "LIVE DEMO",
    linkIcon: "open_in_new",
    isLive: true,
  },
];
