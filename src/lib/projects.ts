export type ProjectMedia = {
  type: "video" | "image";
  src: string;
  /** Poster frame shown before a video loads/plays. */
  poster?: string;
  alt?: string;
  /** Wrap the media in a soft neutral backdrop, useful for UI screens with transparent/white edges. */
  matte?: boolean;
  /** Which part of the media stays visible when it's cropped to fit the 4:3 frame. Defaults to center. */
  focalPoint?: "top" | "center" | "bottom";
};

export type CaseStudyMediaPlacement = "hero" | "side";

export type CaseStudyMedia = {
  /** Label shown inside the placeholder until real media is supplied. */
  label: string;
  placement: CaseStudyMediaPlacement;
  /** "vimeo" embeds a Vimeo player iframe; src is the numeric video ID. */
  type?: "image" | "video" | "vimeo";
  src?: string;
  poster?: string;
  alt?: string;
  caption?: string;
};

export type CaseStudyColumn = {
  heading: string;
  body?: string;
  list?: string[];
  /** Placeholder shown above the column's text when the column has a visual. */
  mediaLabel?: string;
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
      mediaType?: "image" | "video" | "vimeo";
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
      mediaType?: "image" | "video" | "vimeo";
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

export type SkillsHighlight = {
  label: string;
  items: string[];
};

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  /** Short name shown on the homepage card/preview, where the full title is too long. */
  cardTitle: string;
  summary: string;
  media: ProjectMedia[];
  role: string;
  timeline: string;
  /** Skimmable skills callout shown right below the title, above the intro. */
  skillsHighlight?: SkillsHighlight;
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
    cardTitle: "US telco strategy pivot",
    summary:
      "Pivoted from a stalled single-partner model and spent a year reshaping our telecom acquisition strategy through a multi-partner offer architecture — driving 1.3x higher conversion than average traffic.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1785781173/telco_lp_gydsmy.png",
        alt: "Back Market telco partner landing page",
      },
    ],
    role: "Senior Product Designer",
    timeline: "Mar 2026",
    skillsHighlight: {
      label: "The one where I —",
      items: [
        "Co-developed a multi-partner strategy",
        "Used storytelling to secure stakeholder buy-in",
        "Broke an ambitious vision into prioritized efforts and shipped the highest-value piece as an MVP in one quarter",
        "Built a scalable redirect framework",
        "Designed from qual + quant data",
      ],
    },
    intro: [
      "Our US growth had stalled on the single exclusive telecom partner model from our French playbook. I helped pivot the strategy to a flexible multi-partner model and designed the end-to-end flow that shipped it. The new redirect funnel converts **1.3x higher** than average traffic.",
    ],
    introMedia: {
      label: "Hero banner",
      placement: "hero",
      type: "image",
      src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1785783529/telco_hero_ypklfa.png",
    },
    caseStudy: [
      {
        kind: "stats",
        items: [
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
    cardTitle: "Retail popup checkout tool",
    summary:
      "Launched Back Market's first in-store checkout experience in 2 sprints, adapting the consumer app into a rep-facing sales tool; achieved 71% scan-to-pay adoption, personally worked retail shifts to validate design decisions, and fed key insights back to the online product.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1785776917/working_in_store_fdqgdy.png",
        alt: "Back Market pop-up store checkout experience",
      },
    ],
    role: "Senior Product Designer",
    timeline: "May 2025",
    skillsHighlight: {
      label: "The one where I —",
      items: [
        "Redirected the team to move from a self-serve checkout tool to a rep-guided tool, weighing multiple approaches under a 2-sprint deadline",
        "Streamlined the tool to help the primary user work faster in a high-pressure, time-constrained environment",
        "Worked retail shifts myself to validate the design in the field, surfacing gaps no remote testing would've caught",
      ],
    },
    intro: [
      "Back Market was opening a 3-month popup in NYC - our first foray into physical retail. We had two sprints, no budget for a custom POS system, and a finance setup that ruled out traditional retail checkout. I transformed our customer-facing app to be usable for the sales rep while keeping as little changes as possible to minimize dev effort.",
    ],
    introMedia: {
      label: "Hero banner",
      placement: "hero",
      type: "image",
      src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1785786025/popup_hero_cinbnz.png",
    },
    caseStudy: [
      {
        kind: "stats",
        items: [
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
            mediaType: "image",
            src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1785784951/online_to_in_store_visual_a5ekat.png",
            caption: "Reframing the app from customer self-serve to rep-assisted checkout",
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
            media: {
              label: "Instant inventory lookup screenshot",
              placement: "side",
              type: "video",
              src: "https://res.cloudinary.com/pg5fl7pt/video/upload/v1785776580/quick_lookup_zimbmq.mp4",
            },
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
            media: {
              label: "Simplified product pages screenshot",
              placement: "side",
              type: "image",
              src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1785776544/store_ipad_item_view_nl4wnb.png",
            },
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
            media: {
              label: "Streamlined checkout screenshot",
              placement: "side",
              type: "video",
              src: "https://res.cloudinary.com/pg5fl7pt/video/upload/v1785776557/scan_to_pay_wuzfxo.mov",
            },
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
              type: "image",
              src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1785776917/working_in_store_fdqgdy.png",
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
    cardTitle: "Trade-in flow redesign",
    summary:
      "Redesigned the trade-in flow to reduce perceived risk in the transaction, achieving a 98% eligibility rate and reduction in processing costs.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1783191874/style_lookup_qzc8qc.png",
        alt: "Style lookup step in the trade-in flow",
      },
    ],
    role: "Senior Product Designer",
    timeline: "Jul 2023",
    skillsHighlight: {
      label: "The one where I —",
      items: [
        "Re-scoped the project after data showed the given goal wasn't the real problem",
        "Reduced perceived risk by moving confidence-building steps earlier in the flow",
        "Used quantitative and qualitative signal to diagnose the issue and prioritize the fix",
      ],
    },
    intro: [
      "I was a designer at Trove, a company that provides white-label technology to power the secondhand program for brands such as Patagonia, REI, lululemon and Arc'teryx. We support the buyback, reprocessing, and resale of used items.",
      "At the start of this project, we were rejecting over 20% of the trade-in items sent to us. This was poor user experience because users get upset for not getting any credit after sending their trade-in items. It was also bad for our business because we incur labor costs for processing these unsellable items.",
    ],
    caseStudy: [
      {
        kind: "stats",
        items: [
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
            mediaType: "image",
            src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1785779806/diti_before_after_nocxd1.png",
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
            media: {
              label: "Style number entry screen",
              placement: "side",
              type: "vimeo",
              src: "1041996513",
            },
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
            media: {
              label: "Confirm eligibility screen",
              placement: "side",
              type: "vimeo",
              src: "1037975753",
            },
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
            mediaType: "vimeo",
            src: "1037980127",
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
  {
    slug: "resale-shopify-theme",
    eyebrow: "Trove Recommerce / Fall 2022",
    title: "Resale Shopify Theme",
    cardTitle: "Resale Shopify theme",
    summary:
      "Designed a flexible resale platform that scaled across every new partner, replacing bespoke builds and cutting launch timelines by 43% and engineering costs by 66%.",
    media: [
      {
        type: "image",
        src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1786366540/hp_shopify_theme_cover_wwxyrf.png",
        alt: "Resale Shopify theme storefront",
      },
    ],
    role: "Senior Product Designer",
    timeline: "Fall 2022",
    skillsHighlight: {
      label: "The one where I —",
      items: [
        "Designed a flexible architecture that scaled across every new instance, replacing bespoke builds",
        "Built reusable component patterns, not one-off screens, across 100+ configuration points",
        "Traded off flexibility vs. usability using real usage data",
      ],
    },
    intro: [],
    caseStudy: [
      {
        kind: "stats",
        items: [
          {
            label: "Challenge",
            body: "Design a resale site theme flexible enough to serve as the base template for every partner brand and translate that flexibility into a visual editor that a non-engineer/designer user could operate.",
          },
          {
            label: "Impact",
            list: [
              "Shortened program launch timeline by 43%",
              "Reduced engineering capital cost per launch by 66%",
            ],
          },
          {
            label: "Timeline",
            body: "1.5 months of design time, Fall 2022",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "Context: what is branded recommerce?",
        tocLabel: "Context",
        blocks: [
          {
            type: "paragraph",
            text: "Trove provides white-label technology that powers the secondhand resale program for brands like Patagonia, REI, Lululemon, and Arc'teryx. We manage the resale site but it has to feel entirely native to the brand's mainline site. To build trust of the resale program, shoppers need to feel like they're still buying from the brand, not from us.",
          },
          {
            type: "media",
            label: "Branded recommerce examples",
            mediaType: "image",
            src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1786366541/recom_branding_oxitse.png",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "The problem",
        blocks: [
          {
            type: "paragraph",
            text: "Hitting that level of branding meant building a fully custom resale site for every partner, which required roughly 34 engineer-weeks and 4 design-weeks per launch. That was expensive to maintain and slow to scale.",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "The solution",
        blocks: [
          {
            type: "paragraph",
            text: "In 2022, we replatformed to Shopify, which gave us the opportunity to modernize the code stack, but also made it possible to build a single base theme that could power many branded storefronts through configurations.",
          },
          {
            type: "media",
            label: "Shopify theme base template",
            mediaType: "image",
            src: "https://res.cloudinary.com/pg5fl7pt/image/upload/v1786366541/shopify_theme_aoepnk.png",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: "My role",
        blocks: [
          {
            type: "paragraph",
            text: "I designed the base resale site theme itself, and the full set of UI configuration options that would let a non-engineer apply a brand's styling through Shopify's visual editor — minimal design or engineering effort required per launch.",
          },
        ],
      },
      {
        kind: "text",
        level: 2,
        heading: 'The core challenge: "branded-ness" without a thousand knobs',
        tocLabel: "The challenge",
        blocks: [
          {
            type: "paragraph",
            text: "The hardest part of this project was to balance giving the theme enough flexibility to feel authentically on-brand for every partner, without creating so many configuration options that the tool became unusable for the non-technical merchandising managers actually operating it.",
          },
          {
            type: "paragraph",
            text: 'I worked backward from the brands themselves — using the range of partners we\'d already launched to understand which UI elements actually carried a brand\'s identity (typography, color, imagery treatment, button style) versus which ones didn\'t meaningfully register as "branded" to a shopper. That allowed me to apply an 80/20 rule: make the highest-impact elements deeply configurable, and deliberately leave the rest fixed.',
          },
          {
            type: "paragraph",
            text: "Even after that prioritization, the configuration set still ran to 100+ settings — which introduced a second problem: organizing that many controls into a visual editor that stayed comprehensible to someone without a design background.",
          },
          {
            type: "paragraph",
            text: 'I structured the configurations around the components themselves (buttons, product tiles, banners) rather than as a flat settings list, so a user could reason about "how does my product tile look" as one unit instead of hunting across dozens of unrelated toggles.',
          },
        ],
      },
      {
        kind: "columns",
        heading: "Impact",
        columns: [
          {
            heading: "For the business",
            list: [
              "Shortened program launch timeline by 43%",
              "Reduced engineering capital cost per launch by 66%",
              "Removed a structural bottleneck on how fast the business could scale to new brand partners",
            ],
          },
          {
            heading: "For the design team",
            list: [
              "No more full-site Figma files per brand partner",
              "Significant time saved on onboarding-related design and post-launch styling updates",
              "Freed up design capacity to focus on core resale UX initiatives instead of repetitive brand builds",
            ],
          },
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
