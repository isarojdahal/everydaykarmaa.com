import OpenSource from "@/ui/pages/opensource";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/opensource")({
  component: () => <OpenSource />,
});
