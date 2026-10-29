export type NavItem = {
  label: string;
  href: string;
};

// "Work" currently points to the Experience page, which also links out
// to /projects — merging them into one deep case-study page is a larger
// follow-up (see conversation notes). "Writing" is a label-only rename
// of the Notes system; the route stays /notes.
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/experience" },
  { label: "Writing", href: "/notes" },
  { label: "Beyond Work", href: "/beyond-work" },
  { label: "About", href: "/about" },
];
