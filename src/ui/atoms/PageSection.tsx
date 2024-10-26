import { ReactNode } from "@tanstack/react-router";

export interface PageSectionPropType {
  children: ReactNode;
  border?: boolean;
}

export default function PageSection({
  children,
  border = true,
}: PageSectionPropType) {
  return (
    <section className="container mx-auto ~my-10/20 ~px-4/0">
      <div
        className={`${border && "border-2 border-everydaykarma/25 border-solid rounded-xl"} ~p-4/8 mt-20 sm:pt-16 relative`}
      >
        {children}
      </div>
    </section>
  );
}
