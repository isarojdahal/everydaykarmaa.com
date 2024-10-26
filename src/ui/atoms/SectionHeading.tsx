import { ReactNode } from "@tanstack/react-router";

export default function SectionHeading({
  children,
  emoji,
}: {
  children: ReactNode;
  emoji?: string;
}) {
  return (
    <div className="max-sm:relative max-sm:-top-12 sm:absolute sm:-top-9">
      <h2 className="~text-2xl/3xl text-center font-bold bg-everydaykarma text-gray-100 py-4 px-8 w-fit max-sm:-mb-4 sm:mb-10 max-sm:mx-auto rounded-md flex items-center gap-2">
        <span className="text-left">{children}</span>
        {emoji && <span>{emoji}</span>}
      </h2>
    </div>
  );
}
