export interface ImagePropType
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
  className?: string;
}

export default function Image({ src, alt, loading, className }: ImagePropType) {
  return <img src={src} alt={alt} loading={loading} className={className} />;
}
