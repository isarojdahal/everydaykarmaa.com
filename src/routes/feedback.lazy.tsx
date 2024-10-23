import { Feedbacklist } from "@/ui/pages/Feedbacklist";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/feedback")({
  component: () => <Feedbacklist />,
});
