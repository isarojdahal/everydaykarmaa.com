import { createLazyFileRoute } from "@tanstack/react-router";
import CoursePage from "@/ui/pages/courses/CoursesList";

export const Route = createLazyFileRoute("/courses/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CoursePage />;
}
