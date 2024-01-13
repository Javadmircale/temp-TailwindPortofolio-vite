import { useFetchProjects } from "../fetchProjects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  if (loading)
    return <h1 className="mx-auto mt-10 font-bold text-xl">Loading...</h1>;
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />
      <div className="my-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
