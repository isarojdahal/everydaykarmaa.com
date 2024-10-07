import NavLink, { NavLinkType } from "../atoms/NavLink";

export interface NavBarPropsType {
  navLinks: NavLinkType[];
}

// Desktop Navbar
export function DesktopNavbar({ navLinks }: NavBarPropsType) {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-16">
        {navLinks.map((navLink: NavLinkType) => (
          <NavLink key={navLink.title} navLink={navLink} />
        ))}
      </ul>
    </nav>
  );
}

// Mobile Navbar
export function MobileNavbar() {
  return (
    <nav className="lg:hidden">
      <p>Mobile Navbar</p>
    </nav>
  );
}
