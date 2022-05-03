import { createTests, expectError, tailwindRunner } from "./runner";

const scenarios: Record<string, string> = {
  transparent: "transparent",
  black: "rgba(0, 0, 0, 1)",
  white: "rgba(255, 255, 255, 1)",
  "slate-50": "rgba(248, 250, 252, 1)",
  "slate-100": "rgba(241, 245, 249, 1)",
  "slate-200": "rgba(226, 232, 240, 1)",
  "gray-50": "rgba(249, 250, 251, 1)",
  "gray-100": "rgba(243, 244, 246, 1)",
  "zinc-50": "rgba(250, 250, 250, 1)",
  "zinc-100": "rgba(244, 244, 245, 1)",
  "neutral-50": "rgba(250, 250, 250, 1)",
  "neutral-100": "rgba(245, 245, 245, 1)",
  "stone-50": "rgba(250, 250, 249, 1)",
  "stone-100": "rgba(245, 245, 244, 1)",
  "red-50": "rgba(254, 242, 242, 1)",
  "red-100": "rgba(254, 226, 226, 1)",
  "orange-50": "rgba(255, 247, 237, 1)",
  "orange-100": "rgba(255, 237, 213, 1)",
  "amber-50": "rgba(255, 251, 235, 1)",
  "amber-100": "rgba(254, 243, 199, 1)",
  "yellow-50": "rgba(254, 252, 232, 1)",
  "yellow-100": "rgba(254, 249, 195, 1)",
  "lime-50": "rgba(247, 254, 231, 1)",
  "lime-100": "rgba(236, 252, 203, 1)",
  "green-50": "rgba(240, 253, 244, 1)",
  "green-100": "rgba(220, 252, 231, 1)",
  "emerald-50": "rgba(236, 253, 245, 1)",
  "emerald-100": "rgba(209, 250, 229, 1)",
  "teal-50": "rgba(240, 253, 250, 1)",
  "teal-100": "rgba(204, 251, 241, 1)",
  "cyan-50": "rgba(236, 254, 255, 1)",
  "cyan-100": "rgba(207, 250, 254, 1)",
  "sky-50": "rgba(240, 249, 255, 1)",
  "sky-100": "rgba(224, 242, 254, 1)",
  "blue-50": "rgba(239, 246, 255, 1)",
  "blue-100": "rgba(219, 234, 254, 1)",
  "indigo-50": "rgba(238, 242, 255, 1)",
  "indigo-100": "rgba(224, 231, 255, 1)",
  "violet-50": "rgba(245, 243, 255, 1)",
  "violet-100": "rgba(237, 233, 254, 1)",
  "purple-50": "rgba(250, 245, 255, 1)",
  "purple-100": "rgba(243, 232, 255, 1)",
  "fuchsia-50": "rgba(253, 244, 255, 1)",
  "fuchsia-100": "rgba(250, 232, 255, 1)",
  "pink-50": "rgba(253, 242, 248, 1)",
  "pink-100": "rgba(252, 231, 243, 1)",
  "rose-50": "rgba(255, 241, 242, 1)",
  "rose-100": "rgba(255, 228, 230, 1)",
};

tailwindRunner("Typography - Background Color", [
  ...createTests("bg", scenarios, (n) => ({ backgroundColor: n })),
  ...expectError(["bg-current", "bg-inherit"]),
]);
