import { createLazyFileRoute } from "@tanstack/react-router";
import Events from "../ui/pages/SessionList";

export const Route = createLazyFileRoute("/sessions")({
  component: () => <Events />,
});
