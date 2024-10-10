export interface CommunityCardPropType {
  title: string;
  memberCount: string;
  icon: React.ReactNode;
  url: string;
}

export default function CommunityCard({
  title,
  memberCount,
  icon,
  url,
}: CommunityCardPropType) {
  return (
    <a
      href={url}
      target="_blank"
      className="inline-block bg-everydaykarma text-white rounded-2xl shadow-lg md:hover:shadow-2xl md:hover:scale-105 transform transition-transform duration-300"
    >
      <div className="flex flex-col items-center justify-center gap-4 size-60">
        <p className="text-4xl font-bold">{memberCount}</p>
        {icon}
        <p className="text-xl">{title}</p>
      </div>
    </a>
  );
}
