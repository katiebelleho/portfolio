/**
 * Case studies shown on the homepage, in display order. The first item is the
 * featured card; the next four fill the 2×2 grid. Reorder or swap items here —
 * positions are assigned by order, not by item.
 */
export type HomeWorkItem = {
  /** Slug of the existing case-study page. Omit for a placeholder with no page yet. */
  slug?: string;
  company: string;
  date: string;
  title: string;
  /** Thumbnail image. Omit to show the striped placeholder. */
  image?: string;
  alt?: string;
};

export const homeWork: HomeWorkItem[] = [
  {
    slug: "telecom-partnerships",
    company: "Back Market",
    date: "Mar 2026",
    title: "Expand US growth through telecom partnerships",
    image:
      "https://res.cloudinary.com/pg5fl7pt/image/upload/v1785783529/telco_hero_ypklfa.png",
    alt: "",
  },
  {
    slug: "retail-pop-up-checkout",
    company: "Back Market",
    date: "May 2025",
    title: "Checkout app for a 3-month retail pop-up",
    image:
      "https://res.cloudinary.com/pg5fl7pt/image/upload/v1785786025/popup_hero_cinbnz.png",
    alt: "",
  },
  {
    slug: "trade-in-condition-grading",
    company: "Trove",
    date: "Jul 2023",
    title: "Reduce the unsellable rate of a trade-in program",
    image:
      "https://res.cloudinary.com/pg5fl7pt/image/upload/v1783191874/style_lookup_qzc8qc.png",
    alt: "",
  },
  {
    company: "[Company]",
    date: "[Date]",
    title: "[Case study 04 title]",
  },
  {
    company: "[Company]",
    date: "[Date]",
    title: "[Case study 05 title]",
  },
];
