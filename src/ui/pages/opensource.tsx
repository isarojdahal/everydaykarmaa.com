import Layout from "./Layout";
import PageSection from "../atoms/PageSection";
import SectionHeading from "../atoms/SectionHeading";
import projectsData from "@/constants/data/projects.data";
import ProjectCard, { ProjectCardPropType } from "../molecules/ProjectCard";

export default function OpenSource() {
  return (
    <Layout>
      <PageSection border={false}>
        <SectionHeading>Our Open Source Projects</SectionHeading>
        <div className="flex flex-col gap-8">
          {projectsData.map((project: ProjectCardPropType) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </PageSection>
    </Layout>
  );
}
