import headerLogo from "@/assets/logos/WHITELOGO_transparent@3x.png";
import { Link } from "@tanstack/react-router";

export default function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center">
        <img src={headerLogo} alt="EverydayKarma Logo" className="size-20" />
        <p className="text-4xl font-bold hidden sm:block">EverydayKarma</p>
      </div>
    </Link>
  );
}
