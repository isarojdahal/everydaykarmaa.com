import { Link } from "@tanstack/react-router";
import { SquareArrowOutUpRight } from "lucide-react";

export interface NavLinkType {
  to: string;
  title: string;
}

export interface NavLinkPropsType {
  navLink: NavLinkType;
}

export default function NavLink({ navLink }: NavLinkPropsType) {
  return (
    <li>
      <Link
        to={navLink.to}
        activeProps={{
          className: "font-bold",
        }}
        className={`text-xl hover:bg-black/25 transition-colors duration-300 py-2 px-4 rounded-lg flex items-center gap-2`}
      >
        <span>{navLink.title}</span>
        {navLink.title === "Learn" && (
          <sup>
            <SquareArrowOutUpRight className="size-4" />
          </sup>
        )}
      </Link>
    </li>
  );
}
