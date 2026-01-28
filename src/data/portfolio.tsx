import { SearchableCardItem } from "@/types/searchableCard";

export type PortfolioTags =
  | "npm"
  | "SaaS"
  | "Frozen"
  | "Open Source"
  | "Bug Fix"
  | "TypeScript"
  | "Performance"
  | "Maintainer Chat"
  | "Contributions"
  | "Product"
  | "One-liner"
  | "React Email"
  | "QR Code logo"
  | "React Bits"
  | "Meteor"
  | "Paypal";

export const linkedinPostList: SearchableCardItem<PortfolioTags>[] = [
  {
    title: "ffmpeg-mcp-server",
    tags: ["npm", "Open Source", "Product"],
    url: "https://www.npmjs.com/package/ffmpeg-mcp-server",
    description: "An MCP server designed for image editing using FFmpeg.",
  },
  {
    title: "ts-try-async",
    tags: ["npm", "Open Source", "Product"],
    url: "https://www.npmjs.com/package/ts-try-async",
    description:
      "A lightweight utility to eliminate try/catch boilerplate and improve code readability.",
  },
  {
    title: "react-page-lite",
    tags: ["npm", "Open Source", "Product"],
    url: "https://www.npmjs.com/package/react-page-lite",
    description:
      "A custom React framework/template focused on minimal JavaScript, used to power this portfolio.",
  },
  {
    title: "Add Storybook to react-qrcode-logo",
    tags: [
      "npm",
      "Open Source",
      "Maintainer Chat",
      "Contributions",
      "QR Code logo",
    ],
    url: "https://github.com/gcoro/react-qrcode-logo/pull/69",
    description:
      "Implemented Storybook for improved component development and documentation after collaborating with the maintainer.",
  },
  {
    title: "React Email Issue Fix",
    tags: ["npm", "Open Source", "Bug Fix", "React Email", "Contributions"],
    url: "https://github.com/resend/react-email/pull/2259",
    description: "Resolved a community-reported bug within the core library.",
  },
  {
    title: "React Email Typo Fix",
    tags: ["npm", "Open Source", "One-liner", "React Email", "Contributions"],
    url: "https://github.com/resend/react-email/pull/2260",
    description:
      "Identified and corrected a typo during a bug investigation, submitted as a separate clean PR.",
  },
  {
    title: "React Email README Update",
    tags: ["npm", "Open Source", "One-liner", "React Email", "Contributions"],
    url: "https://github.com/resend/react-email/pull/2261",
    description:
      "Streamlined the project onboarding process by improving the setup documentation for future contributors.",
  },
  {
    title: "React Bits Performance Improvement",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "Performance"],
    url: "https://github.com/DavidHDev/react-bits/pull/169",
    description:
      "Diagnosed and resolved a performance bottleneck causing FPS drops in specific components.",
  },
  {
    title: "React Bits Official Website UI Improvement",
    tags: [
      "npm",
      "Open Source",
      "Contributions",
      "React Bits",
      "Product",
      "Maintainer Chat",
    ],
    url: "https://github.com/DavidHDev/react-bits/pull/174",
    description:
      "Enhanced UX by implementing local storage persistence for user preferences, restoring broken functionality.",
  },
  // React Bits Type Fixes - Unified format
  {
    title: "React Bits: Fix types on RotatingText component",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/144",
  },
  {
    title: "React Bits: Fix types on VariableProximity component",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/171",
  },
  {
    title: "React Bits: Fix types on SplitText component",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/185",
  },
  {
    title: "React Bits: Fix types on FuzzyText component",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/194",
  },
  {
    title: "React Bits: Fix types on DecryptedText component",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/209",
  },
  {
    title: "React Bits: Fix types on PixelCard component",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/212",
  },
  {
    title: "React Bits: Fix types on RollingGallery component",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/216",
  },
  {
    title: "React Bits: Fix types on ImageTrail component",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/218",
  },
  {
    title: "React Bits: Fix types on Masonry component",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/349",
  },
  {
    title: "React Bits: Fix types on Aurora component",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/366",
  },
  {
    title: "React Bits: Fix types on TextTrail component",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/368",
  },
  {
    title: "React Bits: Fix types on BlurText component",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/370",
  },
  {
    title: "Meteor: Diagnostic tests for reported issue",
    tags: ["npm", "Open Source", "Contributions", "Meteor"],
    url: "https://github.com/meteor/react-packages/pull/428",
    description:
      "Contributed test cases that successfully reproduce a reported bug, enabling the team to validate future fixes.",
  },
  {
    title: "PayPal: TypeScript Definition Fix",
    tags: [
      "npm",
      "Open Source",
      "Contributions",
      "Paypal",
      "TypeScript",
      "Bug Fix",
    ],
    url: "https://github.com/paypal/paypal-js/pull/640",
    description:
      "Synchronized TypeScript definitions with official documentation to resolve type mismatches in the SDK.",
  },
  {
    title: "USD Latam Jobs",
    tags: ["Product", "SaaS"],
    url: "https://usd-latam-jobs.vercel.app/",
    description:
      "A specialized job portal connecting Senior Latin American developers with high-paying USD roles.",
  },
  {
    title: "Ratata",
    tags: ["Product", "SaaS"],
    url: "https://my-ratata.vercel.app/",
    description:
      "A micro-SaaS for creating streamlined event invitation links with integrated RSVP confirmation.",
  },
  {
    title: "Better Image",
    tags: ["Product", "SaaS", "Frozen"],
    url: "https://www.linkedin.com/posts/palmeida-dev_betterimageai-generativeai-aiart-activity-7279552746964365312-l5ER/",
    description:
      "A prompt-engineering micro-SaaS designed to generate high-fidelity AI imagery; currently archived due to operating costs.",
  },
];
