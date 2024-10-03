import { createLazyFileRoute } from "@tanstack/react-router";
import Events from "../ui/pages/Events";

export const Route = createLazyFileRoute("/sessions")({
  component: () => <Events />,
});
