import { createLazyFileRoute } from "@tanstack/react-router";
import Events from "../ui/pages/SessionList";
import { Helmet } from "react-helmet-async";

export const Route = createLazyFileRoute("/sessions")({
  component: () => (
    <>
      <Helmet>
        <title>EverydayKarma - Sessions</title>
        <meta
          name="description"
          content="Welcome to the Sessions page of EverydayKarma, where you can explore about upcomming Events and pasts Events by EverydayKarma"
        />
        <meta
          name="keywords"
          content="sessions, roadmaps,TRPC,golang,AWS,Data science,kubernetes , EverydayKarma"
        />
      </Helmet>
      <Events />,
    </>
  ),
});
