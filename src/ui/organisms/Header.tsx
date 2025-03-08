import { DesktopNavbar, MobileNavbar } from "../molecules/Navbar";
import { NavLinkType } from "../atoms/NavLink";
import Logo from "../atoms/Logo";

export default function Header() {
  const navLinks: NavLinkType[] = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/courses",
      title: "Courses",
    },
    {
      to: "/sessions",
      title: "Sessions",
    },
    {
      to: "/opensource",
      title: "Open Source",
    },
    {
      to: "https://learn.everydaykarmaa.com",
      title: "Learn",
    },
  ];

  return (
    <header className="bg-everydaykarma text-gray-100 dark:text-foreground py-2">
      <div className="container mx-auto pr-4 flex items-center justify-between">
        <Logo />
        <DesktopNavbar navLinks={navLinks} />
        <MobileNavbar navLinks={navLinks} />
      </div>
    </header>
  );
}
