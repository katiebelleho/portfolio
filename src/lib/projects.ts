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

export type CaseStudyContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "media"; label: string };

export type CaseStudySection =
  | {
      kind: "text";
      level: 2 | 3;
      heading: string;
      blocks: CaseStudyContentBlock[];
      media?: CaseStudyMedia;
    }
  | {
      kind: "columns";
      heading: string;
      columns: CaseStudyColumn[];
    }
  | {
      /** Standalone full-width banner between sections. */
      kind: "media";
      label: string;
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
    title: "Scaling US acquisition through telecom partnerships",
    summary:
      "I designed a flexible telecom partnership strategy in the US with bidirectional redirect flows that adapt to each partnership's business model, driving 1.3x higher conversion than average traffic.",
    media: [
      {
        type: "video",
        src: "https://res.cloudinary.com/pg5fl7pt/video/upload/v1784934031/visible_infoblock_c4wtfc.mp4",
        matte: true,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/pg5fl7pt/video/upload/v1784934273/telco_lp_mocked_vfdutv.mp4",
      },
    ],
    role: "Senior Product Designer",
    timeline: "Mar 2026",
    intro:
      "Our US growth had stalled on the single exclusive telecom partner model from our French playbook. I helped pivot the strategy to a flexible multi-partner model and designed the end-to-end flow that shipped it. The new redirect funnel converts 1.3x higher than average traffic.",
    caseStudy: [
      {
        kind: "text",
        level: 2,
        heading: "My role",
        blocks: [
          {
            type: "paragraph",
            text: "Design lead from strategy through launch. I co-built the case for the pivot, partnered with UXR and a Content Designer on research that shaped the content, designed the partner offer template and full redirect flow, and shipped the MVP live with three partners.",
          },
        ],
      },
      { kind: "media", label: "Hero banner" },
      {
        kind: "text",
        level: 2,
        heading: "The ambitious bet",
        blocks: [
          {
            type: "paragraph",
            text: "When I joined the team mid-2025, growth through telecom partnership was plateauing. Our Visible by Verizon partnership converted at 3.4% — well above average traffic — but couldn't scale to our 3-year acquisition goal. My PM and I pitched a bigger vision: a mobile-plan marketplace positioning Back Market as a prepaid/BYOD advocate. I designed the early concepts, which included a plan comparison quiz, educational landing pages, and a multi-partner browse experience. But the vision couldn't move forward. Marketing couldn't commit to the content and SEO investment, and the c-suite wasn't convinced on the big pivot without proof.",
          },
        ],
        media: { label: "Marketplace concept mock", placement: "side" },
      },
      {
        kind: "text",
        level: 2,
        heading: "The re-scope",
        blocks: [
          {
            type: "paragraph",
            text: "Instead of stalling out, we reworked what was already working. Visible worked because it was *simple*: referral traffic → discount code → done. We didn't need the whole marketplace to capture the value, we just needed to make that proven loop work for many partners. So I distilled the marketplace's multi-partner thinking into a less ambitious but shippable redirect strategy.",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "The design",
        blocks: [
          {
            type: "paragraph",
            text: "Each partner redirects users into our funnel differently — some pass a discount code, some expect us to verify eligibility first, some need the relationship to flow in reverse, sending users back out to their site to redeem a plan after buying a phone with us. I designed a single flexible template that could absorb all of these flows without turning into a pile of one-off pages.",
          },
          {
            type: "paragraph",
            text: "The core of it is an info block that reconfigures itself based on the partner's business model: it can prompt for a code, confirm eligibility, or hand off to the partner, all within the same visual pattern so the experience still feels like one product.",
          },
          { type: "media", label: "Video of the infoblock flexible mechanism" },
          {
            type: "paragraph",
            text: "I mapped the full bidirectional flow end to end — from the moment a user lands from a partner's marketing, through offer redemption, to the handoff back out when a partner needed it — so engineering could scope the build against one coherent system instead of three separate integrations.",
          },
          {
            type: "paragraph",
            text: "I also built the template to be brand-flexible, so each partner's colors and logo could be layered in without touching the underlying logic, which made onboarding new partners a config change rather than a design project.",
          },
          { type: "media", label: "Big banner of the full flow" },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "Impact & what's next",
        blocks: [
          {
            type: "paragraph",
            text: "We launched with Visible, Google Fi, and Noble Mobile at 1.3x conversion over average traffic, and added our fourth partner, US Mobile, to the mix. I've since designed and shipped new entry points that surface these partner promos to our existing shoppers, opening a second path into the telco offers.",
          },
        ],
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
        blocks: [
          {
            type: "paragraph",
            text: "I defined the checkout UX, collaborated with the Marketing team to ensure it fit with the overall store experience; shipped the retail tool and worked retail shifts in the store to validate in real conditions.",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "The insight",
        blocks: [
          {
            type: "paragraph",
            text: "The team initially assumed we needed a customer-facing self-checkout app - something shoppers could use on their own, Apple Store-style. I pushed back. Our brand awareness is 2% in New York and most people are not familiar with refurbished electronics. This was going to be a high-touch, guided sale — not a browse-and-tap transaction. I guided the team to build a tool that would support the sales rep through that journey, optimizing for three key moments: finding inventory fast, building customer confidence in the product, and closing checkout without friction.",
          },
        ],
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
        blocks: [
          {
            type: "paragraph",
            text: "I worked shifts as a sales rep in the popup and used my own design in real transactions. This surfaced things no user testing would have caught:",
          },
          {
            type: "list",
            items: [
              'A "browse mode" feature I\'d designed for tablets next to devices went entirely unused because the shelves were too small to fit tablets.',
              "Rep-customer interaction patterns also varied more than we'd anticipated. Some reps handed the tablet to customers for checkout, others kept it themselves, which flagged a design gap we hadn't fully accounted for.",
            ],
          },
        ],
        media: { label: "Photo from the popup", placement: "side" },
      },
      {
        kind: "text",
        level: 2,
        heading: "Impact",
        blocks: [
          {
            type: "paragraph",
            text: "The tool processed 500+ transactions across a 3-month run without breaking. We built the foundation for an omnichannel experience and insights from the popup directly informed how we talk about refurbishment on the web.",
          },
        ],
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
