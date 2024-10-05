import headerLogo from "@/assets/logos/WHITELOGO_transparent@3x.png";
import { DesktopNavbar } from "../molecules/Navbar";
import { Link } from "@tanstack/react-router";
import { NavLinkType } from "../atoms/NavLink";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Header() {
  const [navLinks, setNavLinks] = useState<NavLinkType[]>([
    {
      to: "/",
      title: "Home",
      current: true,
    },
    {
      to: "/",
      title: "Learn",
      current: false,
    },
    {
      to: "/sessions",
      title: "Sessions",
      current: false,
    },
    {
      to: "/",
      title: "Links",
      current: false,
    },
  ]);

  function handleLogoClick() {
    setNavLinks((prevNavLinks) => {
      return prevNavLinks.map((navLink) => {
        if (navLink.title === "Home") {
          return {
            ...navLink,
            current: true,
          };
        } else {
          return {
            ...navLink,
            current: false,
          };
        }
      });
    });
  }

  function handleNavLinkClick(currentNavLink: NavLinkType) {
    setNavLinks((prevNavLinks) => {
      return prevNavLinks.map((navLink) => {
        if (navLink.title === currentNavLink.title) {
          return {
            ...navLink,
            current: true,
          };
        } else {
          return {
            ...navLink,
            current: false,
          };
        }
      });
    });
  }

  return (
    <header className="bg-everydaykarma text-white py-4">
      <div className="container mx-auto pr-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={handleLogoClick}>
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
        <DesktopNavbar
          navLinks={navLinks}
          handleNavLinkClick={handleNavLinkClick}
        />
        <HamburgerMenuIcon className="size-8 lg:hidden" />
      </div>
    </header>
  );
}
