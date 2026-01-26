import { SearchableCardItem } from "@/types/searchableCard";

export type LinkedinPostTags =
  | "AI"
  | "Carrear"
  | "SaaS"
  | "Health"
  | "Open Source"
  | "Usd Latam Jobs"
  | "Code"
  | "Caroussel"
  | "Video"
  | "Text"
  | "Image"
  | "How to Work for an International Company"
  | "Setup";

export interface LinkedinPostItem extends Omit<SearchableCardItem<LinkedinPostTags>, "createdAt"> {
  createdAt: Date;
}

export const linkedinPostList: LinkedinPostItem[] = [
  {
    title: "My first open source contibuition of 2026",
    tags: ["Open Source", "Caroussel"],
    createdAt: new Date("2026-1-25"),
    url: "https://www.linkedin.com/posts/palmeida-dev_first-open-source-2026-activity-7420562814945341440-1kWi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAb9HFEBsP2eXbciI3E5LX0tWfvkOT9bo_U",
  },
  {
    title: "Filter feature at Usd Latam Jobs portal",
    tags: ["Usd Latam Jobs", "SaaS", "Video"],
    createdAt: new Date("2026-1-16"),
    url: "https://www.linkedin.com/posts/palmeida-dev_new-feature-live-on-our-job-portal-turn-activity-7417944169760915457-Cm8n?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAb9HFEBsP2eXbciI3E5LX0tWfvkOT9bo_U",
  },
  {
    title: "State of USD Latam Jobs - Dec/2025",
    tags: ["Carrear", "Usd Latam Jobs", "SaaS", "Caroussel"],
    createdAt: new Date("2026-1-9"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7415407364507598848",
  },
  {
    title: "Why is AI still bad at coding sometimes?",
    tags: ["AI", "Caroussel"],
    createdAt: new Date("2025-12-26"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7410333859063533570",
  },
  {
    title: "Github retrospective CTA",
    tags: ["SaaS", "Code", "Text", "Image"],
    createdAt: new Date("2025-12-23"),
    url: "https://www.linkedin.com/feed/update/urn:li:share:7409246551560114176",
  },
  {
    title: "It is time to abandon React Server Components",
    tags: ["Code", "Caroussel"],
    createdAt: new Date("2025-12-19"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7407797512100818944",
  },
  {
    title: "6 month of TripleTen",
    tags: ["Carrear", "Caroussel"],
    createdAt: new Date("2025-12-12"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7405260800422273024",
  },
  {
    title: "Free trial Usd Latam Jobs",
    tags: ["SaaS", "Usd Latam Jobs", "Text", "Image"],
    createdAt: new Date("2025-12-11"),
    url: "https://www.linkedin.com/feed/update/urn:li:share:7404898236064460802",
  },

  {
    title: "Github Retrospective Release",
    tags: ["SaaS", "Text"],
    createdAt: new Date("2025-12-10"),
    url: "https://www.linkedin.com/feed/update/urn:li:share:7404535597589196800",
  },
  {
    title: "First month Usd Latam Jobs",
    tags: ["Usd Latam Jobs", "SaaS", "Text", "Image"],
    createdAt: new Date("2025-12-9"),
    url: "https://www.linkedin.com/feed/update/urn:li:share:7404173310168641536",
  },
  {
    title: "How I prevent burnout",
    tags: ["Health", "Caroussel"],
    createdAt: new Date("2025-12-5"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7402723577755635713",
  },

  {
    title: "Scam warning",
    tags: ["Carrear", "Text"],
    createdAt: new Date("2025-11-28"),
    url: "https://www.linkedin.com/feed/update/urn:li:share:7400186733520191488",
  },
  {
    title: "How I prevent burnout",
    tags: ["Health"],
    createdAt: new Date("2025-12-5"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7402723577755635713",
  },
  {
    title: "Why I stop using Browser to Chat with AI",
    tags: ["AI", "Code", "Caroussel"],
    createdAt: new Date("2025-11-21"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7397650492845133825",
  },
  {
    title: "Domain Driven Design with AI",
    tags: ["AI", "Code", "Caroussel"],
    createdAt: new Date("2025-11-14"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7395113424185217024",
  },
  {
    title: "Vibe Coders & Software Developers",
    tags: ["AI", "Caroussel", "Carrear"],
    createdAt: new Date("2025-11-7"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7392576740029726720",
  },
  {
    title: "How to Work for an International Company 7/7",
    tags: ["Caroussel", "Carrear", "How to Work for an International Company"],
    createdAt: new Date("2025-10-31"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7390040463199707136",
  },
  {
    title: "The Hidden Psychological Impact of Layoffs",
    tags: ["Caroussel", "Health"],
    createdAt: new Date("2025-10-24"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7387504373234556928",
  },
  {
    title: "How to Work for an International Company 6/7",
    tags: ["Caroussel", "Carrear", "How to Work for an International Company"],
    createdAt: new Date("2025-10-17"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7384967524578410497",
  },
  {
    title: "Why Super AGI is BS",
    tags: ["Caroussel", "AI"],
    createdAt: new Date("2025-10-10"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7382430491469320192",
  },
  {
    title: "How to Work for an International Company 5/7",
    tags: ["Caroussel", "Carrear", "How to Work for an International Company"],
    createdAt: new Date("2025-10-3"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7379893768872951808",
  },
  {
    title: "The Truth About Open Source and Salary",
    tags: ["Caroussel", "Carrear", "Open Source"],
    createdAt: new Date("2025-9-26"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7377357297070526464",
  },
  {
    title: "How to Work for an International Company 4/7",
    tags: ["Caroussel", "Carrear", "How to Work for an International Company"],
    createdAt: new Date("2025-9-19"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7374820387244703745",
  },
  {
    title: "My setup",
    tags: ["Caroussel", "Setup"],
    createdAt: new Date("2025-9-12"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7372283538429341696",
  },
  {
    title: "How to Work for an International Company 3/7",
    tags: ["Caroussel", "Carrear", "How to Work for an International Company"],
    createdAt: new Date("2025-9-5"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7369746762275643392",
  },
  {
    title: "How I became the #2 contribuitor on React Bits",
    tags: ["Image", "Text", "Open Source"],
    createdAt: new Date("2025-8-29"),
    url: "https://www.linkedin.com/feed/update/urn:li:share:7367210297239023616",
  },
  {
    title: "How to Work for an International Company 2/7",
    tags: [
      "Video",
      "Text",
      "Carrear",
      "How to Work for an International Company",
    ],
    createdAt: new Date("2025-8-22"),
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7364673556825239553",
  },
  {
    title: "Evolution AI tools for coding",
    tags: ["AI", "Text"],
    createdAt: new Date("2025-8-15"),
    url: "https://www.linkedin.com/feed/update/urn:li:share:7362136596885725185",
  },
  {
    title: "How to Work for an International Company 1/7",
    tags: ["Text", "Carrear", "How to Work for an International Company"],
    createdAt: new Date("2025-8-7"),
    url: "https://www.linkedin.com/feed/update/urn:li:share:7359272368847872000",
  },
  //------------
  // Too old, but maybe in the future add the previuous discontinued projects
  //   {
  //     title: "Better Image - Frozen anoucement",
  //     tags: ["Text", "Image", "SaaS"],
  //     createdAt: new Date("2025-9-5"),
  //     url: "https://www.linkedin.com/feed/update/urn:li:share:7281683208142766080",
  //   },
];
