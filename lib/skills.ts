export interface SkillCard {
  id: string;
  icon: string;
  title: string;
  tags: string[];
}

export const skills: SkillCard[] = [
  {
    id: "ai",
    icon: "neurology",
    title: "AI & Creative Tech",
    tags: [
      "OpenAI API",
      "Prompt Engineering",
      "AI Assisted Dev",
      "Speech AI",
      "Image Gen APIs",
      "AI UX Design",
      "Creative AI Workflows",
    ],
  },
  {
    id: "frontend",
    icon: "web",
    title: "Frontend Engineering",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
      "UI/UX Design",
      "Responsive Design",
    ],
  },
  {
    id: "backend",
    icon: "dns",
    title: "Backend & APIs",
    tags: [
      "Python",
      "Django",
      "Node.js",
      "FastAPI",
      "Express.js",
      "REST APIs",
      "Stripe Payments",
      "GraphQL",
    ],
  },
  {
    id: "data",
    icon: "database",
    title: "Data & Cloud",
    tags: [
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "MongoDB",
      "Redis",
      "Prisma ORM",
      "Firestore",
    ],
  },
  {
    id: "design",
    icon: "brush",
    title: "Design & Product",
    tags: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Flows",
      "Accessibility",
      "Mobile First",
    ],
  },
  {
    id: "tools",
    icon: "rocket_launch",
    title: "Tools & Scale",
    tags: ["Git / GitHub", "Vercel", "Heroku", "Netlify", "VS Code", "Agile"],
  },
];
