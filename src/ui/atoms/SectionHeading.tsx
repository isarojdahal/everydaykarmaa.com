import { ReactNode } from "@tanstack/react-router";

export default function SectionHeading({
  children,
  emoji,
}: {
  children: ReactNode;
  emoji?: string;
}) {
  return (
    <h2 className="~text-2xl/3xl text-center font-bold bg-everydaykarma text-gray-100 py-4 px-8 w-fit mb-16 max-sm:mx-auto rounded-md flex items-center gap-2">
      <span className="text-left">{children}</span>
      {emoji && <span>{emoji}</span>}
    </h2>
  );
}
