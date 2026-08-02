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
  type?: "image" | "video";
  src?: string;
  poster?: string;
  alt?: string;
  caption?: string;
};

export type CaseStudyColumn = {
  heading: string;
  body: string;
  mediaLabel: string;
};

export type CaseStudyStatItem = {
  label: string;
  list?: string[];
  body?: string;
};

export type CaseStudyContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; style?: "numbered" | "bulleted" }
  | { type: "callout"; text: string }
  | {
      type: "media";
      label: string;
      mediaType?: "image" | "video";
      src?: string;
      poster?: string;
      alt?: string;
      caption?: string;
    }
  | {
      /** A text column paired side by side with a media box. */
      type: "row";
      heading?: string;
      text: CaseStudyContentBlock[];
      media: CaseStudyMedia;
    };

export type CaseStudySection =
  | {
      kind: "text";
      level: 2 | 3;
      heading: string;
      /** Shorter label for the sticky table of contents, when the heading is too long. */
      tocLabel?: string;
      blocks: CaseStudyContentBlock[];
      media?: CaseStudyMedia;
    }
  | {
      kind: "columns";
      heading: string;
      tocLabel?: string;
      columns: CaseStudyColumn[];
    }
  | {
      /** Standalone full-width banner between sections. */
      kind: "media";
      label: string;
      mediaType?: "image" | "video";
      src?: string;
      poster?: string;
      alt?: string;
      caption?: string;
    }
  | {
      /** "At a glance" style stat grid: first item tall on the left, the rest stacked on the right. */
      kind: "stats";
      items: CaseStudyStatItem[];
    };

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  media: ProjectMedia[];
  role: string;
  timeline: string;
  /** Opening paragraph(s) on the case study page, shown below the title/meta. */
  intro: string[];
  introMedia?: CaseStudyMedia;
  caseStudy: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "telecom-partnerships",
    eyebrow: "Back Market / Mar 2026",
    title: "Scaled US acquisition through telecom partnerships",
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
    intro: [
      "Our US growth had stalled on the single exclusive telecom partner model from our French playbook. I helped pivot the strategy to a flexible multi-partner model and designed the end-to-end flow that shipped it. The new redirect funnel converts **1.3x higher** than average traffic.",
    ],
    introMedia: { label: "Hero banner", placement: "hero" },
    caseStudy: [
      {
        kind: "stats",
        items: [
          {
            label: "My role",
            list: [
              "co-built the case for the strategic pivot",
              "partnered with UXR and a Content Designer on research that shaped the content",
              "designed the partner offer template and full redirect flow, and shipped the MVP live with three partners",
            ],
          },
          {
            label: "Timeline",
            body: "Back Market / 1 quarter to launch MVP, year-long initiative to reshape the US telco strategy",
          },
          {
            label: "Impact",
            body: "1.3x higher conversion than average traffic. Redirect template launched with 6 brand partners.",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "The ambitious bet",
        blocks: [
          {
            type: "paragraph",
            text: "When I joined the team mid-2025, growth through telecom partnership was plateauing. Our Visible by Verizon partnership converted at 3.4% — well above average traffic — but couldn't scale to our 3-year acquisition goal.",
          },
          {
            type: "paragraph",
            text: "My PM and I pitched a bigger vision: a mobile-plan marketplace positioning Back Market as a prepaid/BYOD advocate. I designed the early concepts, which included a plan comparison quiz, educational landing pages, and a multi-partner browse experience.",
          },
          {
            type: "media",
            label: "Marketplace vision concept designs",
            mediaType: "image",
            src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1785098910/telco_marketplace_concepts_ztnxpw.png",
            caption: "Marketplace vision concept designs",
          },
          {
            type: "paragraph",
            text: "**But the vision couldn't move forward.** Marketing couldn't commit to the content and SEO investment, and the c-suite wasn't convinced on the big pivot without proof.",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "The re-scope",
        blocks: [
          {
            type: "paragraph",
            text: "Instead of stalling out, we reworked what was already working.",
          },
          {
            type: "paragraph",
            text: "Visible worked because it was a simple flow:",
          },
          { type: "callout", text: "Referral traffic → discount code → done." },
          {
            type: "paragraph",
            text: "We didn't need the whole marketplace to capture the value, we just needed to make that proven loop work for many partners. So I distilled the marketplace's multi-partner thinking into a less ambitious but shippable redirect strategy.",
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
            text: "A user lands on Back Market fresh from a partner site who might've never heard of us before. I wanted to make sure the design addresses what they need at that decision moment. Through a survey with our UXR team, the insights showed that most users arrive in a plan comparison mindset and need three things to convert: device compatibility, clear promo terms, and payment options. I solved compatibility structurally by only redirecting to unlocked device models, so the block could focus on communicating the offer and activation.",
          },
          {
            type: "paragraph",
            text: "I designed the full flow including the PDP offer block, a light cart touchpoint, and the confirmation screen and email that deliver the promo code post-purchase.",
          },
          {
            type: "media",
            label: "End to end redirect flow",
            mediaType: "image",
            src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1785522410/telco_redirect_e2e_flow_l62u9o.png",
            caption: "End to end redirect flow",
          },
          {
            type: "paragraph",
            text: "A big challenge of this MVP design was to make sure it's flexible enough to onboard multiple partners with varying offer strategy and different branding. We had 3 partners lined up at the time, and expecting more to come.",
          },
          {
            type: "paragraph",
            text: "I partnered with the Design System team and my devs to make partner branding configurable in our design system and codebase. The block has a uniformed structure - header, offer summary, activation steps — while logo, color, copy, and offer details flex per partner via brand tokens. Consistent enough to stay unified and onboard a new partner without a redesign; branded enough to feel native on arrival.",
          },
          {
            type: "media",
            label: "Flexible template easily scalable to new partners",
            mediaType: "video",
            src: "https://res.cloudinary.com/pg5fl7pt/video/upload/v1785522427/telco_block_flexible_branding_oujhzv.mov",
            caption: "Flexible template easily scalable to new partners",
          },
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
    intro: [
      "Back Market was opening a 3-month popup in NYC - our first foray into physical retail. We had two sprints, no budget for a custom POS system, and a finance setup that ruled out traditional retail checkout. I transformed our customer-facing app to be usable for the sales rep while keeping as little changes as possible to minimize dev effort.",
    ],
    caseStudy: [
      {
        kind: "stats",
        items: [
          {
            label: "My role",
            body: "I defined the checkout UX, collaborated with the Marketing team to ensure it fit with the overall store experience; shipped the retail tool and worked retail shifts in the store to validate in real conditions.",
          },
          {
            label: "Timeline",
            body: "Back Market / 2 sprints",
          },
          {
            label: "Impact",
            body: "Processed 500+ transactions to support full duration of popup",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "The approach",
        blocks: [
          {
            type: "paragraph",
            text: "The team initially assumed we needed a customer-facing self-checkout app - something shoppers could use on their own, Apple Store-style. Basically just our existing shopping app but in a bigger screen and less inventory.",
          },
          {
            type: "paragraph",
            text: "**I pushed back.** Our brand awareness is 2% in New York and most people are not familiar with refurbished electronics. This was going to be a high-touch, guided sale — not a browse-and-tap transaction.",
          },
          {
            type: "paragraph",
            text: "I guided the team to build a tool that would support the sales rep through that journey, optimizing for three key moments: finding inventory fast, building customer confidence in the product, and closing checkout without friction.",
          },
          {
            type: "media",
            label: "Online vs in-store redesign diagram",
            caption: "Some caption",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "Key changes from consumer shopping app to in-store checkout tool",
        tocLabel: "Key changes",
        blocks: [
          {
            type: "paragraph",
            text: "I guided the team to build a tool that would support the sales rep through that journey, optimizing for three key moments: finding inventory fast, building customer confidence in the product, and closing checkout without friction.",
          },
          {
            type: "row",
            heading: "Instant inventory lookup",
            text: [
              {
                type: "paragraph",
                text: 'Our popup showcased devices that weren\'t all available to purchase. Sales reps needed to answer "do you have the iPhone 13 in blue?" in seconds. I added search and quick filters to solve this - a simple change with outsized impact on rep confidence in the floor.',
              },
            ],
            media: { label: "Instant inventory lookup screenshot", placement: "side" },
          },
          {
            type: "row",
            heading: "Simplified product pages",
            text: [
              {
                type: "paragraph",
                text: "In-store, customers are holding the device. They don't need a wall of specs. I stripped product pages to image, model, and price - with warranty, condition, and spec details tucked into expandable sections reps could surface on demand. We validated this was the right call post-launch, because those sections were rarely opened.",
              },
            ],
            media: { label: "Simplified product pages screenshot", placement: "side" },
          },
          {
            type: "row",
            heading: "Streamlined checkout",
            text: [
              {
                type: "paragraph",
                text: "I got checkout to ~2 minutes by enabling auto account creation, removing shipping address requirements, and adding scan-to-pay via QR code. 71% of customers ended up using the scan-to-pay option. This was still much slower than the standard tap-to-pay, but workable given our constraints.",
              },
            ],
            media: { label: "Streamlined checkout screenshot", placement: "side" },
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
            text: "I worked shifts as a sales rep in the popup and used my own design in real transactions.",
          },
          {
            type: "row",
            text: [
              {
                type: "paragraph",
                text: "This surfaced things no user testing would have caught:",
              },
              {
                type: "list",
                items: [
                  'A "browse mode" feature I\'d designed for tablets next to devices went entirely unused because the shelves were too small to fit tablets.',
                  "Rep-customer interaction patterns also varied more than we'd anticipated. Some reps handed the tablet to customers for checkout, others kept it themselves, which flagged a design gap we hadn't fully accounted for.",
                ],
              },
            ],
            media: {
              label: "Photo from the popup",
              placement: "side",
              caption: "Me working at the popup",
            },
          },
        ],
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
      "As Trove's trade-in program grew, we were getting a lot of ineligible items. I redesigned the trade-in flow to achieve a 72% decrease in item rejection rate due to eligibility.",
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
    intro: [
      "I was a designer at Trove, a company that provides white-label technology to power the secondhand program for brands such as Patagonia, REI, lululemon and Arc'teryx. We support the buyback, reprocessing, and resale of used items.",
      "At the start of this project, we were rejecting over 20% of the trade-in items sent to us. This was poor user experience because users get upset for not getting any credit after sending their trade-in items. It was also bad for our business because we incur labor costs for processing these unsellable items.",
    ],
    caseStudy: [
      {
        kind: "stats",
        items: [
          {
            label: "My role",
            body: "Sole designer, worked with PM to prioritize problems to solve, ran user test to validate approach, shipped final designs.",
          },
          {
            label: "Timeline",
            body: "Trove Recommerce / 2 months",
          },
          {
            label: "Impact",
            body: "72% decrease in item rejection rate due to eligibility",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "Problem",
        blocks: [
          {
            type: "paragraph",
            text: "I joined the project after the product requirements were already defined - the main goal of the redesign was to increase conversion and reduce customer service inquiry rate. However, I noticed that the item rejection rate was alarmingly high, we were rejecting over 20% of trade-in items that were mailed to us.",
          },
          {
            type: "paragraph",
            text: "While conversion could always be improved, the more salient problem at hand was the item rejection rate. I worked with my product manager to realign the project goals to focus on reducing item rejection rate.",
          },
          {
            type: "paragraph",
            text: "So why was the rejection rate so high?",
          },
          {
            type: "paragraph",
            text: "We found that the 21% rejection rate broke down to:",
          },
          {
            type: "list",
            style: "bulleted",
            items: [
              "16% rejected due to item condition",
              "5% rejected due to item in a category that we don't accept for resale",
            ],
          },
          {
            type: "paragraph",
            text: "The hypothesis was that the current trade-in flow didn't give enough guidance to the user on whether their item would be eligible for credit.",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "New trade in flow",
        tocLabel: "New flow",
        blocks: [
          {
            type: "paragraph",
            text: "We added more steps in the trade-in initiation flow to make sure people have a good understanding of what items are accepted vs not.",
          },
          {
            type: "paragraph",
            text: "Our hypothesis was that users wouldn't mind putting in a little more effort in giving us more information about their items, and by doing so it would actually increase affirmation that their items would be accepted.",
          },
          {
            type: "media",
            label: "Online trade-in flow, before vs after",
            caption: "online trade-in flow, before vs after",
          },
          {
            type: "row",
            heading: "Prioritizing style number lookup",
            text: [
              {
                type: "paragraph",
                text: "In the new flow, the user will start their trade-in initiation by entering the style number because this is the most effective way for the user to find the exact catalog match of their item.",
              },
              {
                type: "paragraph",
                text: "Matching to an exact catalog record would:",
              },
              {
                type: "list",
                items: [
                  "confirm that the item is eligible for trade in",
                  "provide the user with the most accurate payout estimate",
                ],
              },
            ],
            media: { label: "Style number entry screen", placement: "side" },
          },
          {
            type: "row",
            heading: "Moving eligibility confirmation to earlier in the flow",
            text: [
              {
                type: "paragraph",
                text: "Previously the eligibility criteria was hidden in the last step of the process right before the user finalizes the trade-in. Given the high rejection rate, its safe to assume that people weren't actually reading through the criteria at the end of the flow.",
              },
              {
                type: "paragraph",
                text: "I gave this information more emphasis by moving it earlier in the flow and into its own screen. This would allow the user to confirm that their item is eligible for trade-in credit before spending time filling out the entire form.",
              },
            ],
            media: { label: "Confirm eligibility screen", placement: "side" },
          },
          {
            type: "row",
            heading: "Asking for condition self assessment",
            text: [
              {
                type: "paragraph",
                text: "In the new flow, we will ask the supplier to identify any flaws on their item from a list of flaw types.",
              },
              {
                type: "paragraph",
                text: "This information allows us to give the customer a more accurate payout estimate based on the condition of the item, as well as serving as a second net to catch for ineligibility due to excessive wear.",
              },
            ],
            media: { label: "Condition self-assessment screens", placement: "side" },
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
            text: "**I was the most unsure about this part of the new design.**",
          },
          {
            type: "paragraph",
            text: "I worried whether suppliers would feel confident enough to condition grade their own items, and if not, would the cost of a decrease in trade-in conversion be worth it. Therefore, I focused the first round of user testing on validating this feature.",
          },
          {
            type: "paragraph",
            text: "**User test findings**",
          },
          {
            type: "list",
            style: "bulleted",
            items: [
              "Some participants didn't expect the condition grading step and thought the first set of eligibility questions were enough",
              "They didn't necessarily mind the effort of filling out the information, but rather they didn't feel confident that they can properly assess their item's condition",
            ],
          },
          {
            type: "paragraph",
            text: "I reduced the cognitive load in this step by limiting the flaw selections to the 3 most common flaw type and worked with our photos team to retake images that showed the severity levels in a similar fabric.",
          },
          {
            type: "media",
            label: "Condition grading flow screens",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "Impact",
        blocks: [
          {
            type: "paragraph",
            text: "After the redesign launched, we saw a significant decrease from 5% to 1.4% of item rejection rate due to category ineligibility.",
          },
          {
            type: "paragraph",
            text: "However, we saw no change in the item rejection rate due to condition. When we looked into the site data, we saw that most people were skipping through the condition grading page - they were selecting that their item has no visible flaws but we ended up rejecting these items. We had plans on our future roadmap to optimize the condition grading step of the flow.",
          },
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
