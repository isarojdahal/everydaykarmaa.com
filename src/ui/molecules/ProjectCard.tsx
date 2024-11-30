import { FaGithub, FaGlobe } from "react-icons/fa6";

export interface ProjectCardPropType {
  title: string;
  description: string;
  link?: string;
  repoLink: string;
  contributorsGraph: string;
  contributors: string;
}

export default function ProjectCard({
  project,
}: {
  project: ProjectCardPropType;
}) {
  return (
    <div className="flex max-lg:flex-col gap-6 items-center justify-between p-8 border border-gray-300 rounded-lg">
      <div className="flex flex-col gap-1">
        <p className="text-3xl font-bold">{project.title}</p>
        <p className="text-lg text-gray-600">{project.description}</p>

        {/* Links */}
        <div className="flex flex-wrap items-center max-lg:gap-2 gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="inline-block max-lg:w-full w-fit bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-semibold px-4 py-2 mt-2 rounded-full"
            >
              <p className="flex items-center gap-2 justify-center">
                <FaGlobe />
                Live Website
              </p>
            </a>
          )}

          <a
            href={project.repoLink}
            target="_blank"
            className="inline-block max-lg:w-full w-fit bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-semibold px-4 py-2 mt-2 rounded-full"
          >
            <p className="flex items-center gap-2 justify-center">
              <FaGithub />
              Contribute
            </p>
          </a>
        </div>
      </div>

      {/* Contributors */}
      <div className="flex flex-col gap-2">
        <p className="text-gray-600 text-lg max-lg:text-center text-right">
          Contributors
        </p>
        <a
          href={project.contributorsGraph}
          target="_blank"
          title={`${project.title} Contributors`}
          className="flex items-center justify-center"
        >
          <img
            src={project.contributors}
            alt={`${project.title} Contributors`}
          />
        </a>
      </div>
    </div>
  );
}
