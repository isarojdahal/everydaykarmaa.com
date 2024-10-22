import { Helmet } from "react-helmet-async";
import DiscordBanner, {
  DiscordBannerPropType,
} from "../molecules/DiscordBanner";
import Hero from "../organisms/Hero";
import { FaDiscord } from "react-icons/fa";
import Layout from "./Layout";
import Milestones from "../organisms/Milestone";
import Community from "../organisms/Community";
import Preloader from "../organisms/Preloader";
import FeedbackSlider from "../organisms/Feedback";
import Involvements from "../organisms/Involvements";

const discordData: DiscordBannerPropType = {
  text: "Join our Discord community",
  icon: <FaDiscord className="size-10" />,
  url: "https://discord.gg/t9xcztuRqK",
};

export default function Home() {
  return (
    <>
      <Preloader />
      <Layout>
        <Helmet>
          <title>EverydayKarma - Home</title>
          <meta
            name="description"
            content="Welcome to the homepage of EverydayKarma, where you can find more about EverydayKarma"
          />
          <meta
            name="keywords"
            content="homepage, discord, linkedin, youtube, facebook, milestones, EverydayKarma"
          />
        </Helmet>
        <Hero />
        <Milestones />
        <Community />
        <FeedbackSlider />
        <Involvements />
        <DiscordBanner
          icon={discordData.icon}
          url={discordData.url}
          text={discordData.text}
        />
      </Layout>
    </>
  );
}
