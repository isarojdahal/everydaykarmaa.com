import { FaDiscord, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa6";
import CommunityCard, {
  CommunityCardPropType,
} from "../molecules/CommunityCard";
import PageSection from "../atoms/PageSection";
import SectionHeading from "../atoms/SectionHeading";

const communityData: CommunityCardPropType[] = [
  {
    title: "Youtube",
    memberCount: "3.2K+",
    icon: <FaYoutube className="size-20" />,
    url: "https://www.youtube.com/@EverydayKarma",
  },
  {
    title: "Discord",
    memberCount: "1K+",
    icon: <FaDiscord className="size-20" />,
    url: "https://discord.gg/t9xcztuRqK",
  },
  {
    title: "LinkedIn",
    memberCount: "800+",
    icon: <FaLinkedin className="size-20" />,
    url: "https://www.linkedin.com/company/everydaykarma/",
  },
  {
    title: "Facebook",
    memberCount: "5.2K+",
    icon: <FaFacebook className="size-20" />,
    // FB Group
    // url: "https://www.facebook.com/groups/167150781674830",
    // FB Page
    url: "https://www.facebook.com/profile.php?id=100092336245112",
  },
];

export default function Community() {
  return (
    <PageSection>
      <SectionHeading emoji="🌐">Connect with our community</SectionHeading>
      <div className="flex items-center justify-center flex-wrap gap-12">
        {communityData.map((data) => (
          <CommunityCard
            key={data.title}
            title={data.title}
            memberCount={data.memberCount}
            icon={data.icon}
            url={data.url}
          />
        ))}
      </div>
    </PageSection>
  );
}
