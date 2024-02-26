import { Card, ExampleProp } from "./Card";
import { Link } from "preact-router/match";

// interface ExampleProp {
//   title: string;
//   url: string;
//   description: string;
//   imgPath: string;
//   imgUrl: string;
//   github: string;
//   order: number;
// }

// const singleProject: object = {
//   title: "Destiny Item App",
//   url: "",
//   description:
//     "React app using Bungie and Steam API to manage ingame inventory.",
//   imgPath: "",
//   imgUrl: "",
//   github: "",
//   splash: "/tempCardImg/forest_light.jpg",
//   order: 0,
// },

interface ExampleProps {
  projects: ExampleProp[];
}

const ProjectSection = ({ projects }: ExampleProps) => {
  return (
    <div className="align-items-center mb-6 flex flex-col">
      <h2 className="mb-2 text-xl font-black">Portfolio</h2>
      <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: ExampleProp) => (
          <Card {...project} />
        ))}
      </div>
      <div>
        <Link href={`/portfolio`} className="link justify-self-end ">
          More Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
