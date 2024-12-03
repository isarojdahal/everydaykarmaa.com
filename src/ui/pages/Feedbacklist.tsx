import feedbackData from "@/constants/data/feedback.data";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { ImagePreview } from "../molecules/ImagePreview";
import Layout from "./Layout";
import Image from "../atoms/Image";

export interface FeedbackType {
  src: string;
  alt: string;
}

export const Feedbacklist = () => {
  const [previewImage, setPreviewImage] = useState<FeedbackType | null>(null);

  const openPreview = (feedback: FeedbackType) => {
    setPreviewImage({ src: feedback.src, alt: feedback.alt });
  };

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  const closePreview = () => {
    setPreviewImage(null);
  };
  return (
    <Layout>
      <div className="md:mx-28 p-5 top-5 sticky">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center px-4 py-2 border border-transparent text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700"
        >
          <ArrowLeft className="mr-2" />
          Back
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl  md:mx-auto mx-10">
        {feedbackData.map((feedback: FeedbackType) => (
          <Image
            key={feedback.alt}
            src={feedback.src}
            alt={feedback.alt}
            className="w-full h-[200px] object-contain rounded-lg shadow-lg"
            onClick={() => openPreview(feedback)}
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
    </Layout>
  );
};
