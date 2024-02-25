import { useState, useEffect } from "preact/hooks";
// import { Link } from "preact-router"
import "./app.css";

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";
// @ts-ignore
import Intro from "/components/Intro";
// @ts-ignore
import { ExampleProp } from "/components/Card";
// @ts-ignore
import CardSection from "/components/CardSection";
// @ts-ignore
import { TechSection, TechProp } from "/components/TechSection";

export function Home() {
  // const [count, setCount] = useState(0)
  const [isMobile, setIsMobile] = useState(false);

  //check screen size
  const handleResize = () => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const projects: ExampleProp[] = [
    {
      title: "Destiny Item App",
      url: "",
      description:
        "React app using Bungie and Steam API to manage ingame inventory.",
      imgPath: "",
      imgUrl: "",
      github: "",
      splash: "/tempCardImg/forest_light.jpg",
      order: 0,
    },
    {
      title: "Eclectic Shop",
      url: "https://ch15-fs-shop.vercel.app/",
      description: "React fullstack hypothetical shop.",
      imgPath: "",
      imgUrl: "",
      github: "https://github.com/aodh66/ch15-fs-shop",
      splash: "/tempCardImg/mountain_dark.jpg",
      order: 1,
    },
    {
      title: "Backup & Save Utility",
      url: "https://github.com/aodh66/bs-utility",
      description:
        "Electron app to periodically or on command back up a folder (Windows).",
      imgPath: "",
      imgUrl:
        "https://raw.githubusercontent.com/aodh66/bs-utility/main/images/bs-utility.png",
      github: "https://github.com/aodh66/bs-utility",
      splash: "/tempCardImg/forest_dark.jpg",
      order: 2,
    },
    {
      title: "Habitica Homage",
      url: "https://habitica-homage.netlify.app/",
      description: "Copied with no JavaScript to practice pure CSS",
      imgPath: "",
      imgUrl: "",
      github: "",
      splash: "/tempCardImg/mountain_color.jpg",
      order: 3,
    },
    {
      title: "Dashboard?",
      url: "",
      description: "Placeholder description",
      imgPath: "",
      imgUrl: "",
      github: "",
      splash: "/tempCardImg/forest_med.jpg",
      order: 4,
    },
    {
      title: "Some API app?",
      url: "",
      description: "Placeholder description",
      imgPath: "",
      imgUrl: "",
      github: "",
      splash: "/tempCardImg/mountain_med.jpg",
      order: 5,
    },
  ];

  const skills: TechProp[] = [
    {
      name: "JavaScript",
      imgPath: "/tech/javascript-logo.svg",
      imgUrl: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
    },
    {
      name: "TypeScript",
      imgPath: "/tech/typescript-icon.svg",
      imgUrl: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
    },
    {
      name: "React",
      imgPath: "/tech/react-logo.svg",
      imgUrl: "https://www.svgrepo.com/show/452092/react.svg",
    },
    {
      name: "Node",
      imgPath: "/tech/node-js.svg",
      imgUrl: "https://www.svgrepo.com/show/452075/node-js.svg",
    },
    {
      name: "HTML",
      imgPath: "/tech/html-5.svg",
      imgUrl: "https://www.svgrepo.com/show/452228/html-5.svg",
    },
    {
      name: "CSS",
      imgPath: "/tech/css-3.svg",
      imgUrl: "https://www.svgrepo.com/show/452185/css-3.svg",
    },
    {
      name: "(No)SQL",
      imgPath: "/tech/sql.svg",
      imgUrl: "https://www.svgrepo.com/show/374093/sql.svg",
    },
    {
      name: "PostgreSQL",
      imgPath: "/tech/postgresql.svg",
      imgUrl: "https://www.svgrepo.com/show/354200/postgresql.svg",
    },
    {
      name: "MongoDB",
      imgPath: "/tech/mongodb.svg",
      imgUrl: "https://www.svgrepo.com/show/373845/mongo.svg",
    },
    {
      name: "Tailwind",
      imgPath: "/tech/tailwind.svg",
      imgUrl: "https://www.svgrepo.com/show/374118/tailwind.svg",
    },
    {
      name: "Material UI",
      imgPath: "/tech/material-ui.svg",
      imgUrl: "https://www.svgrepo.com/show/354048/material-ui.svg",
    },
    {
      name: "Electron",
      imgPath: "/tech/electron.svg",
      imgUrl: "https://www.svgrepo.com/show/378796/electron.svg",
    },
  ];

  return (
    <div className="flex flex-col">

      <Header />

      <Intro />

      <CardSection projects={projects} />

      <TechSection skills={skills} />

      <Footer isMobile={isMobile} />

    </div>
  );
}
