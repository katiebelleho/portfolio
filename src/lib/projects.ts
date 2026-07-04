export type ProjectMedia = {
  type: "video" | "image";
  src: string;
  /** Poster frame shown before a video loads/plays. */
  poster?: string;
  alt?: string;
  /** Wrap the media in a soft neutral backdrop, useful for UI screens with transparent/white edges. */
  matte?: boolean;
};

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  media: ProjectMedia[];
  role: string;
  timeline: string;
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "telecom-partnerships",
    eyebrow: "Back Market / Mar 2026",
    title: "Scaled user acquisition through telecom partnerships",
    summary:
      "Our US growth stalled after replicating the French model of a single exclusive telecom partner. I partnered with my PM to pivot our US strategy into a flexible multiple prepaid partnerships model, then contributed on the branded partnership design system, and shipped the first MVP with 3 partners. The new redirect funnel resulted in a 1.3x higher conversion than average traffic.",
    media: [
      {
        type: "video",
        src: "https://res.cloudinary.com/pg5fl7pt/video/upload/v1783189882/telco_redirect_block_sfupca.mp4",
        matte: true,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/pg5fl7pt/video/upload/v1783192949/telco_LP_eidbxj.mp4",
      },
    ],
    role: "Senior Product Designer",
    timeline: "Mar 2026",
    problem: "Case study content coming soon.",
    approach: "Case study content coming soon.",
    solution: "Case study content coming soon.",
    outcome: "Case study content coming soon.",
  },
  {
    slug: "retail-pop-up-checkout",
    eyebrow: "Back Market / May 2025",
    title:
      "Transformed an e-commerce app as a checkout tool for Back Market's first physical store",
    summary:
      "Back Market was opening a 3-month popup in NYC - our first foray into physical retail. We had two sprints, no budget for a custom POS system, and a finance setup that ruled out traditional retail checkout. I defined the checkout UX, collaborated with the Marketing team to ensure it fit with the overall store experience; shipped the retail tool and worked retail shifts in the store to validate in real conditions.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1783190111/retail_store_hero_gqtpi5.png",
        alt: "Back Market pop-up store checkout experience",
      },
    ],
    role: "Senior Product Designer",
    timeline: "May 2025",
    problem: "Case study content coming soon.",
    approach: "Case study content coming soon.",
    solution: "Case study content coming soon.",
    outcome: "Case study content coming soon.",
  },
  {
    slug: "trade-in-condition-grading",
    eyebrow: "Trove / Jul 2023",
    title:
      "Redesigned the online trade-in experience to reduce the amount of unsellable items we receive from customers",
    summary:
      "Rejection rate for our digital trade in program is high - we are not able to accept 1 out of every 4 items that people sent to us through the program. I redesigned the trade-in flow to achieve a 98% item eligibility rate.",
    media: [
      {
        type: "video",
        src: "https://res.cloudinary.com/pg5fl7pt/video/upload/v1783191285/condition_grading_v1_1080p_bs38xz.mp4",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1783191874/style_lookup_qzc8qc.png",
        alt: "Style lookup step in the trade-in flow",
      },
    ],
    role: "Senior Product Designer",
    timeline: "Jul 2023",
    problem: "Case study content coming soon.",
    approach: "Case study content coming soon.",
    solution: "Case study content coming soon.",
    outcome: "Case study content coming soon.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
