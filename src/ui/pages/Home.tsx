import DiscordBanner, {
  DiscordBannerPropType,
} from "../molecules/DiscordBanner";
import Hero from "../organisms/Hero";
import { FaDiscord } from "react-icons/fa";

const discordData: DiscordBannerPropType = {
  text: "Join our Discord community",
  icon: <FaDiscord className="size-10" />,
  url: "https://discord.gg/t9xcztuRqK",
};

export default function Home() {
  return (
    <>
      <Hero />
      <DiscordBanner
        icon={discordData.icon}
        url={discordData.url}
        text={discordData.text}
      />
    </>
  );
}
