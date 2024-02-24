import Card from "./Card";

interface ExampleProp {
  title: string;
  url: string;
  description: string;
  imgPath: string;
  imgUrl: string;
  github: string;
  order: number;
}

// const singleProject: object = {
//   title: "Eclectic Shop",
//   url: "https://ch15-fs-shop.vercel.app/",
//   description: "React fullstack hypothetical shop project.",
//   imgPath: "",
//   imgUrl: "",
//   github: "https://github.com/aodh66/ch15-fs-shop",
//   order: 1,
// };

// const CardSection = ({project: {title, url, description, imgPath, imgUrl, github, order} = {}}: object) =>  {
const CardSection = ({projects}: Array<ExampleProp>) => {
  
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
  //   {
  //     title: "Eclectic Shop",
  //     url: "https://ch15-fs-shop.vercel.app/",
  //     description: "React fullstack hypothetical shop project.",
  //     imgPath: "",
  //     imgUrl: "",
  //     github: "https://github.com/aodh66/ch15-fs-shop",
  //     order: 2,
  //   },
  //   {
  //     title: "Backup & Save Utility",
  //     url: "https://github.com/aodh66/bs-utility",
  //     description:
  //       "Electron application to periodically or on command back up a folder",
  //     imgPath: "",
  //     imgUrl:
  //       "https://raw.githubusercontent.com/aodh66/bs-utility/main/images/bs-utility.png",
  //     github: "https://github.com/aodh66/bs-utility",
  //     order: 3,
  //   },
  //   {
  //     title: "",
  //     url: "",
  //     description:
  //       "",
  //     imgPath: "",
  //     imgUrl:
  //       "",
  //     github: "",
  //     order: 4,
  //   },
  //   {
  //     title: "",
  //     url: "",
  //     description:
  //       "",
  //     imgPath: "",
  //     imgUrl:
  //       "",
  //     github: "",
  //     order: 5,
  //   },
  //   {
  //     title: "",
  //     url: "",
  //     description:
  //       "",
  //     imgPath: "",
  //     imgUrl:
  //       "",
  //     github: "",
  //     order: 6,
  //   },
  // ];

  return (
    <div className="flex flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project: object) => (
        <Card {...project} />
      ))}
    </div>
  );
};

export default CardSection;
