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
      "I designed a flexible telecom partnership strategy in the US with bidirectional redirect flows that adapt to each partnership's business model, driving 1.3x higher conversion than average traffic.",
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
      "I defined the checkout UX for Back Market's 3-month NYC popup under tight constraints. I collaborated with Marketing to align it with the overall store experience, and validated it in real conditions by working retail shifts.",
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
      "As Patagonia's trade-in program grew, we were getting a lot of ineligible items. I redesigned the trade-in flow to achieve a 98% item eligibility rate.",
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
