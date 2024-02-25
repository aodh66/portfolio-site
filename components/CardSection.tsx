import { Card, ExampleProp } from "./Card";
// import { Link } from "preact-router"

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
  projects: ExampleProp[]
}

const CardSection = ({ projects }: ExampleProps) => {

  return (
    <div className="mb-6 flex flex-col align-items-center">
    <h2 className="text-xl font-black mb-2"><a href={`/portfolio`} className="justify-self-end link ">Portfolio</a></h2>
    <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project: ExampleProp) => (
        <Card {...project} />
        ))}
    </div>
        </div>
  );
};

export default CardSection;
