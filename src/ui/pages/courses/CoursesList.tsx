import PageSection from "@/ui/atoms/PageSection";
import SectionHeading from "@/ui/atoms/SectionHeading";
import CourseCard from "@/ui/molecules/CourseCard";
import Layout from "../Layout";
import { useState } from "react";

export default function CoursePage() {
  const [courseList, setCourseList] = useState<any>([]);

  import("@/constants/data/courses/_list.json").then((res) => {
    setCourseList(res.default);
  });

  if (courseList.length <= 0) return <>Unable to load course</>;
  return (
    <Layout>
      <PageSection border={false}>
        <SectionHeading>Featured Courses </SectionHeading>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courseList.map((course, index: number) => (
              <CourseCard {...course} key={index} />
            ))}
          </div>
        </div>
      </PageSection>
    </Layout>
  );
}
