import { createLazyFileRoute } from "@tanstack/react-router";
import CourseDetails from "@/ui/pages/courses/CourseDetails";

export const Route = createLazyFileRoute("/courses/$slug")({
  component: () => <CourseDetails />,
});
