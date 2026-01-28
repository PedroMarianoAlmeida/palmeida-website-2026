import { SearchableCardItem } from "@/types/searchableCard";

export type PortfolioTags =
  | "npm"
  | "SaaS"
  | "Archived"
  | "Open Source"
  | "Bug Fix"
  | "TypeScript"
  | "Performance"
  | "Collaboration"
  | "Contributions"
  | "Documentation"
  | "React Email"
  | "QR Code logo"
  | "React Bits"
  | "Meteor"
  | "Paypal";

export const linkedinPostList: SearchableCardItem<PortfolioTags>[] = [
  // --- Proprietary SaaS Products ---
  {
    title: "Product: USD Latam Jobs",
    tags: ["SaaS"],
    url: "https://usd-latam-jobs.vercel.app/",
    description:
      "A specialized job portal connecting Senior Latin American developers with high-paying USD roles.",
    cta: "Visit site",
    img: "./porfolio/usd-latam-jobs.png",
  },
  {
    title: "Product: Ratata",
    tags: ["SaaS"],
    url: "https://my-ratata.vercel.app/",
    description:
      "A micro-SaaS for creating streamlined event invitation links with integrated RSVP confirmation.",
    cta: "Visit site",
    img: "./porfolio/ratata.png",
  },
  {
    title: "Product: Better Image",
    tags: ["SaaS", "Archived"],
    url: "https://www.linkedin.com/posts/palmeida-dev_betterimageai-generativeai-aiart-activity-7279552746964365312-l5ER/",
    description:
      "A prompt-engineering micro-SaaS designed to generate high-fidelity AI imagery; archived due to operating costs.",
    cta: "View on LinkedIn",
    img: "./porfolio/better-image.png",
  },
  {
    title: "OSS: ts-try-async",
    tags: ["npm", "Open Source"],
    url: "https://www.npmjs.com/package/ts-try-async",
    description:
      "A lightweight utility to eliminate try/catch boilerplate and improve code readability.",
    cta: "View on npm",
  },
  {
    title: "PR: React Bits Performance Improvement",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "Performance"],
    url: "https://github.com/DavidHDev/react-bits/pull/169",
    description:
      "Diagnosed and resolved a performance bottleneck causing FPS drops in specific components.",
    cta: "View PR",
  },

  {
    title: "OSS: ffmpeg-mcp-server",
    tags: ["npm", "Open Source"],
    url: "https://www.npmjs.com/package/ffmpeg-mcp-server",
    description: "An MCP server designed for image editing using FFmpeg.",
    cta: "View on npm",
    img: "./porfolio/ffmpeg-mcp.png",
  },

  {
    title: "OSS: react-page-lite",
    tags: ["npm", "Open Source"],
    url: "https://www.npmjs.com/package/react-page-lite",
    description:
      "A custom React framework focused on minimal JavaScript, used to power this portfolio.",
    cta: "View on npm",
  },

  {
    title: "PR: Add Storybook to react-qrcode-logo",
    tags: [
      "npm",
      "Open Source",
      "Collaboration",
      "Contributions",
      "QR Code logo",
    ],
    url: "https://github.com/gcoro/react-qrcode-logo/pull/69",
    description:
      "Implemented Storybook for improved component development and documentation after collaborating with the maintainer.",
    cta: "View PR",
  },
  {
    title: "PR: React Email Issue Fix",
    tags: ["npm", "Open Source", "Bug Fix", "React Email", "Contributions"],
    url: "https://github.com/resend/react-email/pull/2259",
    description: "Resolved a community-reported bug within the core library.",
    cta: "View PR",
  },
  {
    title: "PR: React Email Typo Fix",
    tags: [
      "npm",
      "Open Source",
      "Documentation",
      "React Email",
      "Contributions",
    ],
    url: "https://github.com/resend/react-email/pull/2260",
    description:
      "Identified and corrected a typo during a bug investigation, submitted as a separate clean PR.",
    cta: "View PR",
  },
  {
    title: "PR: React Email README Update",
    tags: [
      "npm",
      "Open Source",
      "Documentation",
      "React Email",
      "Contributions",
    ],
    url: "https://github.com/resend/react-email/pull/2261",
    description:
      "Streamlined project onboarding by improving the setup documentation for future developers.",
    cta: "View PR",
  },

  {
    title: "PR: React Bits Official Website UX",
    tags: [
      "npm",
      "Open Source",
      "Contributions",
      "React Bits",
      "Collaboration",
    ],
    url: "https://github.com/DavidHDev/react-bits/pull/174",
    description:
      "Enhanced UX by implementing local storage persistence for user preferences, restoring broken functionality.",
    cta: "View PR",
  },

  {
    title: "PR: React Bits: Fix types on TextTrail & RotatingText",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/144",
    cta: "View PR",
  },
  {
    title: "PR: React Bits: Fix types on VariableProximity",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/171",
    cta: "View PR",
  },
  {
    title: "PR: React Bits: Fix types on SplitText",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/185",
    cta: "View PR",
  },
  {
    title: "PR: React Bits: Fix types on FuzzyText",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/194",
    cta: "View PR",
  },
  {
    title: "PR: React Bits: Fix types on DecryptedText",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/209",
    cta: "View PR",
  },
  {
    title: "PR: React Bits: Fix types on PixelCard",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/212",
    cta: "View PR",
  },
  {
    title: "PR: React Bits: Fix types on RollingGallery",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/216",
    cta: "View PR",
  },
  {
    title: "PR: React Bits: Fix types on ImageTrail",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/218",
    cta: "View PR",
  },
  {
    title: "PR: React Bits: Fix types on Masonry",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/349",
    cta: "View PR",
  },
  {
    title: "PR: React Bits: Fix types on Aurora",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/366",
    cta: "View PR",
  },
  {
    title: "PR: React Bits: Fix types on RotatingText (Refinement)",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/368",
    cta: "View PR",
  },
  {
    title: "PR: React Bits: Fix types on BlurText",
    tags: ["npm", "Open Source", "Contributions", "React Bits", "TypeScript"],
    url: "https://github.com/DavidHDev/react-bits/pull/370",
    cta: "View PR",
  },

  {
    title: "PR: Meteor: Diagnostic tests for reported issue",
    tags: ["npm", "Open Source", "Contributions", "Meteor"],
    url: "https://github.com/meteor/react-packages/pull/428",
    description:
      "Contributed test cases that successfully reproduce a reported bug, enabling the team to validate future fixes.",
    cta: "View PR",
  },
  {
    title: "PR: PayPal: TypeScript Definition Fix",
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
    cta: "View PR",
  },
];
