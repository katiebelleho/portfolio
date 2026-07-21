export type ProjectMedia = {
  type: "video" | "image";
  src: string;
  /** Poster frame shown before a video loads/plays. */
  poster?: string;
  alt?: string;
  /** Wrap the media in a soft neutral backdrop, useful for UI screens with transparent/white edges. */
  matte?: boolean;
};

export type CaseStudyMediaPlacement = "hero" | "side";

export type CaseStudyMedia = {
  /** Label shown inside the placeholder until real media is supplied. */
  label: string;
  placement: CaseStudyMediaPlacement;
};

export type CaseStudySection = {
  level: 2 | 3;
  heading: string;
  body: string;
  media?: CaseStudyMedia;
};

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  media: ProjectMedia[];
  role: string;
  timeline: string;
  /** Opening paragraph on the case study page, shown below the title/meta. */
  intro: string;
  introMedia?: CaseStudyMedia;
  caseStudy: CaseStudySection[];
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
    intro:
      "Our US growth stalled after replicating the French model of a single exclusive telecom partner. I worked with my PM to pivot our US strategy into a flexible multiple prepaid partnerships model. The new redirect funnel resulted in a 1.3x higher conversion than average traffic.",
    introMedia: { label: "Hero image", placement: "hero" },
    caseStudy: [
      {
        level: 2,
        heading: "My role",
        body: "I led the design strategy and execution for this project. I worked closely with my PM to develop the new product model, secured stakeholder alignment, contributed on the branded partnership design system, and shipped the first MVP with 3 partners.",
      },
      {
        level: 2,
        heading: "Reshaping the strategy",
        body: "Before any design work began, I worked with my PM to build the case for pivoting away from the French playbook. I created high-fidelity prototypes and a strategic narrative to align stakeholders on why a multi-partner model required a fundamentally different design approach. This involved multiple rounds of stakeholder reviews and a presentation to the c-suite to get buy-in.",
      },
      {
        level: 3,
        heading: "Scalable redirect flow template",
        body: "Each telecom partner has distinct branding, user expectations, and technical integration constraints. The design needed to balance between fragmenting our core experience with custom one-off work per partner vs creating a generic template that felt untrustworthy to users arriving from a branded partner environment.",
        media: { label: "Video prototype", placement: "side" },
      },
      {
        level: 3,
        heading: "Partner brand system",
        body: "I worked with the Design System team to establish guidelines for integrating partner visual elements into our design system and codebase cleanly.",
        media: { label: "Video prototype", placement: "side" },
      },
      {
        level: 2,
        heading: "Impact + what's next",
        body: "We launched the initial redirect flow with three partners - Visible, Noble Mobile, and Google Fi. The redirect funnel has a 1.3x higher conversion than average traffic. I am currently iterating on the display of partner telco offers on the Product Page as well as adding more touch points in the user journey to increase awareness of these offers.",
      },
    ],
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
    intro: "Case study content coming soon.",
    caseStudy: [],
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
    intro: "Case study content coming soon.",
    caseStudy: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
