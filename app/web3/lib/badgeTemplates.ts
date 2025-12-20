export type BadgeTemplate = {
  name: string;
  bgColor: string;
  textColor: string;
  fontSize: number;
  borderRadius: number;
};

export const BADGE_TEMPLATES: BadgeTemplate[] = [
  {
    name: "Gold",
    bgColor: "#facc15",
    textColor: "#000000",
    fontSize: 26,
    borderRadius: 28,
  },
  {
    name: "Silver",
    bgColor: "#e5e7eb",
    textColor: "#111827",
    fontSize: 24,
    borderRadius: 24,
  },
  {
    name: "Pro",
    bgColor: "#111827",
    textColor: "#ffffff",
    fontSize: 24,
    borderRadius: 24,
  },
  {
    name: "Custom",
    bgColor: "#22d3ee",
    textColor: "#000000",
    fontSize: 24,
    borderRadius: 24,
  },
];
