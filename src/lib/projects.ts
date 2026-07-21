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

export type CaseStudyColumn = {
  heading: string;
  body: string;
  mediaLabel: string;
};

export type CaseStudySection =
  | {
      kind: "text";
      level: 2 | 3;
      heading: string;
      body: string;
      /** Rendered as an ordered list directly below the body paragraph. */
      list?: string[];
      media?: CaseStudyMedia;
    }
  | {
      kind: "columns";
      heading: string;
      columns: CaseStudyColumn[];
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
        kind: "text",
        level: 2,
        heading: "My role",
        body: "I led the design strategy and execution for this project. I worked closely with my PM to develop the new product model, secured stakeholder alignment, contributed on the branded partnership design system, and shipped the first MVP with 3 partners.",
      },
      {
        kind: "text",
        level: 2,
        heading: "Reshaping the strategy",
        body: "Before any design work began, I worked with my PM to build the case for pivoting away from the French playbook. I created high-fidelity prototypes and a strategic narrative to align stakeholders on why a multi-partner model required a fundamentally different design approach. This involved multiple rounds of stakeholder reviews and a presentation to the c-suite to get buy-in.",
      },
      {
        kind: "text",
        level: 3,
        heading: "Scalable redirect flow template",
        body: "Each telecom partner has distinct branding, user expectations, and technical integration constraints. The design needed to balance between fragmenting our core experience with custom one-off work per partner vs creating a generic template that felt untrustworthy to users arriving from a branded partner environment.",
        media: { label: "Video prototype", placement: "side" },
      },
      {
        kind: "text",
        level: 3,
        heading: "Partner brand system",
        body: "I worked with the Design System team to establish guidelines for integrating partner visual elements into our design system and codebase cleanly.",
        media: { label: "Video prototype", placement: "side" },
      },
      {
        kind: "text",
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
    intro:
      "Back Market was opening a 3-month popup in NYC - our first foray into physical retail. We had two sprints, no budget for a custom POS system, and a finance setup that ruled out traditional retail checkout. I transformed our customer-facing app to be usable for the sales rep while keeping as little changes as possible to minimize dev effort.",
    caseStudy: [
      {
        kind: "text",
        level: 2,
        heading: "My role",
        body: "I defined the checkout UX, collaborated with the Marketing team to ensure it fit with the overall store experience; shipped the retail tool and worked retail shifts in the store to validate in real conditions.",
      },
      {
        kind: "text",
        level: 2,
        heading: "The insight",
        body: "The team initially assumed we needed a customer-facing self-checkout app - something shoppers could use on their own, Apple Store-style. I pushed back. Our brand awareness is 2% in New York and most people are not familiar with refurbished electronics. This was going to be a high-touch, guided sale — not a browse-and-tap transaction. I guided the team to build a tool that would support the sales rep through that journey, optimizing for three key moments: finding inventory fast, building customer confidence in the product, and closing checkout without friction.",
      },
      {
        kind: "columns",
        heading: "Key changes from consumer shopping app to in-store checkout tool",
        columns: [
          {
            heading: "Instant inventory lookup",
            body: 'Our popup showcased devices that weren\'t all available to purchase. Sales reps needed to answer "do you have the iPhone 13 in blue?" in seconds. I added search and quick filters to solve this - a simple change with outsized impact on rep confidence in the floor.',
            mediaLabel: "Product screenshot",
          },
          {
            heading: "Simplified product pages",
            body: "In-store, customers are holding the device. They don't need a wall of specs. I stripped product pages to image, model, and price - with warranty, condition, and spec details tucked into expandable sections reps could surface on demand. We validated this was the right call post-launch, because those sections were rarely opened.",
            mediaLabel: "Product screenshot",
          },
          {
            heading: "Streamlined checkout",
            body: "I got checkout to ~2 minutes by enabling auto account creation, removing shipping address requirements, and adding scan-to-pay via QR code. 71% of customers ended up using the scan-to-pay option. This was still much slower than the standard tap-to-pay, but workable given our constraints.",
            mediaLabel: "Product screenshot",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "Validation",
        body: "I worked shifts as a sales rep in the popup and used my own design in real transactions. This surfaced things no user testing would have caught:",
        list: [
          "A \"browse mode\" feature I'd designed for tablets next to devices went entirely unused because the shelves were too small to fit tablets.",
          "Rep-customer interaction patterns also varied more than we'd anticipated. Some reps handed the tablet to customers for checkout, others kept it themselves, which flagged a design gap we hadn't fully accounted for.",
        ],
        media: { label: "Photo from the popup", placement: "side" },
      },
      {
        kind: "text",
        level: 2,
        heading: "Impact",
        body: "The tool processed 500+ transactions across a 3-month run without breaking. We built the foundation for an omnichannel experience and insights from the popup directly informed how we talk about refurbishment on the web.",
      },
    ],
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
