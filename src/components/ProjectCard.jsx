import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ img, url, github, title, desc }) => {
  return (
    <article className="bg-white rounded-lg block shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full rounded-t-lg h-64 object-cover"
      />
      <div className="p-8 capitalize">
        <h4 className="tracking-wide text-xl font-medium">{title}</h4>
        <p className="text-slate-700 my-4 leading-loose">{desc}</p>
        <div className="flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="project-icon" />
          </a>
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
