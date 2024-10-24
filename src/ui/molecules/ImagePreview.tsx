import { X } from "lucide-react";
interface ImagePreviewProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  src,
  alt,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000]">
      <div className="relative max-w-3xl max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-500 rounded-full p-1"
        >
          <X size={24} />
        </button>
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-cover"
        />
      </div>
    </div>
  );
};
