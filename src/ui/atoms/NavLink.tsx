import { Link } from "@tanstack/react-router";

export interface NavLinkType {
  to: string;
  title: string;
  current: boolean;
}

export interface NavLinkPropsType {
  navLink: NavLinkType;
}

export default function NavLink({ navLink }: NavLinkPropsType) {
  return (
    <li>
      <Link
        to={navLink.to}
        className={`text-xl ${navLink.current && "font-bold"} hover:bg-black/25 transition-colors duration-300 py-2 px-4 rounded-lg`}
      >
        {navLink.title}
      </Link>
    </li>
  );
}
