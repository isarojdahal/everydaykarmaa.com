import partnersData from "@/constants/data/partners.data";
import PageSection from "../atoms/PageSection";
import SectionHeading from "../atoms/SectionHeading";

export default function Involvements() {
  return (
    <PageSection>
      <SectionHeading emoji="✊">Our Involvements</SectionHeading>
      <div className="flex flex-wrap gap-x-16 gap-y-8 items-center justify-center">
        {partnersData.map((partner) => (
          <div
            key={partner.id}
            className="size-auto lg:max-xl:max-w-[350px] max-w-[500px] rounded-lg shadow-lg border-2 overflow-hidden"
          >
            <img
              src={partner.src}
              alt={partner.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </PageSection>
  );
}
