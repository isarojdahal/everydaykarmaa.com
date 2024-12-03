import headerLogo from "@/assets/logos/WHITELOGO_transparent@3x.png";
import { Link } from "@tanstack/react-router";
import Image from "./Image";

export default function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center">
        <Image src={headerLogo} alt="EverydayKarma Logo" className="size-20" />
        <p className="text-4xl font-bold max-sm:text-3xl">EverydayKarma</p>
      </div>
    </Link>
  );
}
