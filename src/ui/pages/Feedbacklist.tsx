import feedbackData from "@/constants/data/feedback.data";

import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { ImagePreview } from "../molecules/ImagePreview";
export const Feedbacklist = () => {
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
    <>
      <div className="md:mx-28 p-5 top-0 fixed">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <ArrowLeft className="mr-2" />
          Back
        </button>
      </div>

      <div className="mt-24 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl  md:mx-auto mx-10">
        {feedbackData.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="w-full h-[200px] object-contain rounded-lg shadow-lg"
            onClick={() => openPreview(item.src, item.alt)}
          />
        ))}
      </div>
      {previewImage && (
        <ImagePreview
          src={previewImage.src}
          alt={previewImage.alt}
          onClose={closePreview}
        />
      )}
    </>
  );
};
