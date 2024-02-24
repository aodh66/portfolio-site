import { Card, ExampleProp } from "./Card";

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
//   title: "Eclectic Shop",
//   url: "https://ch15-fs-shop.vercel.app/",
//   description: "React fullstack hypothetical shop project.",
//   imgPath: "",
//   imgUrl: "",
//   github: "https://github.com/aodh66/ch15-fs-shop",
//   order: 1,
// };

interface ExampleProps {
  projects: ExampleProp[]
}

// const CardSection = ({project: {title, url, description, imgPath, imgUrl, github, order} = {}}: object) =>  {
const CardSection = ({ projects }: ExampleProps) => {
  
  // const projects: Array<object> = [
  //   {
  //     title: "Destiny Item Application",
  //     url: "",
  //     description:
  //       "React application interfacing with Game and Steam API to manage ingame inventory.",
  //     imgPath: "",
  //     imgUrl: "",
  //     github: "",
  //     order: 1,
  //   },
  // ];


  return (
    <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project: ExampleProp) => (
        <Card {...project} />
      ))}
    </div>
  );
};

export default CardSection;
