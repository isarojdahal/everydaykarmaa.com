import { Feedbacklist } from "@/ui/pages/Feedbacklist";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export const Route = createLazyFileRoute("/feedback")({
  component: () => (
    <>
      <Helmet>
        <title>EverydayKarma - Feedbacks</title>
        <meta
          name="description"
          content="Welcome to the homepage of EverydayKarma, where you can find more about EverydayKarma"
        />
        <meta
          name="keywords"
          content="homepage, discord, linkedin, youtube, facebook, milestones, EverydayKarma"
        />
      </Helmet>
      <Feedbacklist />,
    </>
  ),
});
