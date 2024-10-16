
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>EverydayKarma - Home</title>
        <meta
          name="description"
          content="Welcome to the homepage of EverydayKarma, where you can find more about EverydayKarma"
        />
        <meta name="keywords" content="homepage, Discord,linkedin,youtube,facebook,milestones, EverydayKarma" />
      </Helmet>

      <Hero />
      <DiscordBanner
        icon={discordData.icon} // Use the icon from discordData
        url={discordData.url} // Use the url from discordData
        text={discordData.text} // Use the text from discordData

      />
    </>
  );
}
