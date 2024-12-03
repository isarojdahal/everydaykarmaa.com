import AboutUs from "@/ui/pages/AboutUs";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export const Route = createLazyFileRoute("/aboutus")({
  component: () => (
    <>
      <Helmet>
        <title>EverydayKarma - About Us</title>
        <meta
          name="description"
          content="Welcome to the homepage of EverydayKarma, where you can find more about EverydayKarma"
        />
        <meta
          name="keywords"
          content="homepage, discord, linkedin, youtube, facebook, milestones, EverydayKarma"
        />
      </Helmet>
      <AboutUs />
    </>
  ),
});
