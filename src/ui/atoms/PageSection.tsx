import { ReactNode } from "@tanstack/react-router";

export interface PageSectionPropType {
  children: ReactNode;
}

export default function PageSection({ children }: { children: ReactNode }) {
  return (
    <section className="container mx-auto ~my-10/20 ~px-4/0">
      {children}
    </section>
  );
}
