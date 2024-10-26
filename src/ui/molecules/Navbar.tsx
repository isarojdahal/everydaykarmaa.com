import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import NavLink, { NavLinkType } from "../atoms/NavLink";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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
            </SheetTitle>
            <SheetDescription>
              <span className="sr-only">Mobile Navigation</span>
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <ul className="flex flex-col gap-4 text-white divide-y divide-gray-400 *:pt-4">
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
