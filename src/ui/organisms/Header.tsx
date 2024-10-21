import { DesktopNavbar } from "../molecules/Navbar";
import { useLocation } from "@tanstack/react-router";
import { NavLinkType } from "../atoms/NavLink";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "../atoms/Logo";

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
  ];

  navLinks.forEach((navLinks) => {
    if (navLinks.to === pathName) {
      navLinks.current = true;
    } else {
      navLinks.current = false;
    }
  });

  return (
    <header className="bg-everydaykarma text-gray-100 dark:text-foreground py-2">
      <div className="container mx-auto pr-4 flex items-center justify-between">
        <Logo />
        <DesktopNavbar navLinks={navLinks} />
        <HamburgerMenuIcon className="size-8 lg:hidden" />
      </div>
    </header>
  );
}
