import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import NavLink, { NavLinkType } from "../atoms/NavLink";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../shadcn/sheet";
import EKLogo from "@/assets/logos/WHITELOGO_transparent@3x.png";

export interface NavBarPropsType {
  navLinks: NavLinkType[];
}

// Desktop Navbar
export function DesktopNavbar({ navLinks }: NavBarPropsType) {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {navLinks.map((navLink: NavLinkType) => (
          <NavLink key={navLink.title} navLink={navLink} />
        ))}
      </ul>
    </nav>
  );
}

// Mobile Navbar
export function MobileNavbar({ navLinks }: NavBarPropsType) {
  return (
    <nav className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <HamburgerMenuIcon className="size-8" />
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>
              <img
                src={EKLogo}
                alt="EverydayKarma Logo"
                className="block mx-auto size-40"
              />
              <p className="text-white ~text-3xl/6xl font-bold text-center -mt-4">
                EverydayKarma
              </p>
            </SheetTitle>
          </SheetHeader>
          <div className="mt-10">
            <ul className="flex flex-col items-center gap-8 text-white">
              {navLinks.map((navLink: NavLinkType) => (
                <NavLink key={navLink.title} navLink={navLink} />
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
