import { useState } from "react";
import partnersData from "@/constants/data/partners.data";
import PageSection from "../atoms/PageSection";
import SectionHeading from "../atoms/SectionHeading";
import { ImagePreview } from "../molecules/ImagePreview";

export default function Involvements() {
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const openPreview = (src: string, alt: string) => {
    setPreviewImage({ src, alt });
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <PageSection>
      <SectionHeading emoji="✊">Our Involvements</SectionHeading>
      <div className="flex flex-wrap gap-x-16 gap-y-8 items-center justify-center">
        {partnersData.map((partner) => (
          <div
            key={partner.id}
            className="size-auto lg:max-xl:max-w-[350px] max-w-[500px] rounded-lg shadow-lg border-2 overflow-hidden cursor-pointer"
            onClick={() => openPreview(partner.src, partner.alt)}
          >
            <img
              src={partner.src}
              alt={partner.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      {previewImage && (
        <ImagePreview
          src={previewImage.src}
          alt={previewImage.alt}
          onClose={closePreview}
        />
      )}
    </PageSection>
  );
}
