import { Link } from "@tanstack/react-router";

export interface NavLinkType {
  to: string;
  title: string;
  current: boolean;
}

export interface NavLinkPropsType {
  navLink: NavLinkType;
  handleNavLinkClick?: (currentNavLink: NavLinkType) => void;
}

export default function NavLink({
  navLink,
  handleNavLinkClick,
}: NavLinkPropsType) {
  return (
    <li>
      <Link
        to={navLink.to}
        className={`text-xl ${navLink.current && "font-bold underline underline-offset-8"}`}
        onClick={() => handleNavLinkClick && handleNavLinkClick(navLink)}
      >
        {navLink.title}
      </Link>
    </li>
  );
}
