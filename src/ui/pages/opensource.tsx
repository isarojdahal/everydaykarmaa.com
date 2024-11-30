import { Helmet } from "react-helmet-async";
import Layout from "./Layout";
import PageSection from "../atoms/PageSection";
import SectionHeading from "../atoms/SectionHeading";
import projectsData from "@/constants/data/projects.data";
import ProjectCard, { ProjectCardPropType } from "../molecules/ProjectCard";

export default function OpenSource() {
  return (
    <Layout>
      <Helmet>
        <title>EverydayKarma - Open Source Projects</title>
        <meta
          name="description"
          content="Welcome to the homepage of EverydayKarma, where you can find more about EverydayKarma"
        />
        <meta
          name="keywords"
          content="homepage, discord, linkedin, youtube, facebook, milestones, EverydayKarma"
        />
      </Helmet>
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
