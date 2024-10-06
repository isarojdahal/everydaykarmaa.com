import headerLogo from "@/assets/logos/WHITELOGO_transparent@3x.png";
import { DesktopNavbar } from "../molecules/Navbar";
import { Link, useLocation } from "@tanstack/react-router";
import { NavLinkType } from "../atoms/NavLink";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Header() {
  const pathName = useLocation().pathname;
  const current = false;
  const navLinks: NavLinkType[] = [
    {
      to: "/",
      title: "Home",
      current,
    },
    {
      to: "https://learn.everydaykarmaa.com",
      title: "Learn",
      current,
    },
    {
      to: "/sessions",
      title: "Sessions",
      current,
    },
    {
      to: "/links",
      title: "Links",
      current,
    },
  ];

  navLinks.forEach((navLinks) => {
    if (navLinks.to === pathName) {
      navLinks.current = true;
    } else {
      navLinks.current = false;
    }
  });

  return (
    <header className="bg-everydaykarma text-gray-100 dark:text-foreground py-4">
      <div className="container mx-auto pr-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img
              src={headerLogo}
              alt="EverydayKarma Logo"
              className="size-20"
            />
            <p className="text-4xl font-bold hidden sm:block">EverydayKarma</p>
          </div>
        </Link>

        {/* Navigation */}
        <DesktopNavbar navLinks={navLinks} />
        <HamburgerMenuIcon className="size-8 lg:hidden" />
      </div>
    </header>
  );
}
