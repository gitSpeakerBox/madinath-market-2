type SubLink = {
  title: string;
  href: string;
};

type NavLink = {
  title: string;
  href: string;
  subLinks?: SubLink[];
};

export const NavLinks: NavLink[] = [
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "News & Events",
    href: "/ournews",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Careers",
    href: "/career",
  },
  {
    title: "Our Stores",
    href: "/branches",
  },
];
