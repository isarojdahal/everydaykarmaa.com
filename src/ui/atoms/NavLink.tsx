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
        className={`text-xl pb-1 ${navLink.current && "font-bold border-b-2"}`}
      >
        {navLink.title}
      </Link>
    </li>
  );
}
