import { Card, ExampleProp } from "./Card";
import { Link } from "preact-router/match";

interface ExampleProps {
  projects: ExampleProp[];
}

const ProjectSection = ({ projects }: ExampleProps) => {
  return (
    <div className="align-items-center mb-6 flex flex-col">
      <h2 className="mb-2 text-3xl font-semibold">Portfolio</h2>
      <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: ExampleProp) => (
          <Card {...project} />
        ))}
      </div>
      <div className="mt-2">
        <Link href={`/portfolio`} className="link justify-self-end text-lg">
          More Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
