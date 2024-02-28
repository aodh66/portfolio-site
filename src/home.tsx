// import { useState, useEffect } from "preact/hooks";

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
import ProjectSection from "/components/ProjectSection";
// @ts-ignore
import { TechSection, TechProp } from "/components/TechSection";

export function Home() {
  // Site images should be 800x860px to stay consistent
  const projects: ExampleProp[] = [
    {
      title: "Destiny Item App",
      url: "",
      description:
        "React app using Bungie and Steam API to manage ingame inventory.",
      imgPath: "",
      imgUrl: "",
      github: "",
      splash: "/images/forest_light.webp",
      order: 0,
    },
    {
      title: "Eclectic Shop",
      url: "https://ch15-fs-shop.vercel.app/",
      description: "React fullstack hypothetical shop.",
      imgPath: "/images/eclecticshop.webp",
      imgUrl: "",
      github: "https://github.com/aodh66/ch15-fs-shop",
      splash: "/images/mountain_dark.webp",
      order: 1,
    },
    {
      title: "Backup & Save Utility",
      url: "https://github.com/aodh66/bs-utility",
      description:
        "Electron app to periodically or on command back up a folder (Windows).",
      imgPath: "/images/bs-utility.webp",
      imgUrl: "",
      github: "https://github.com/aodh66/bs-utility",
      splash: "/images/forest_dark.webp",
      order: 2,
    },
    {
      title: "Habitica Homage",
      url: "https://habitica-homage.netlify.app/",
      description: "Copied with no JavaScript to practice pure CSS",
      imgPath: "/images/homage.webp",
      imgUrl: "",
      github: "",
      splash: "/images/mountain_color.webp",
      order: 3,
    },
    {
      title: "Dashboard",
      url: "https://dancing-zabaione-3f64c1.netlify.app/",
      description:
        "PLACEHOLDER A dashboard app made to interface with the warframe API and a weather one.",
      imgPath: "/images/dashboard.webp",
      imgUrl: "",
      github: "",
      splash: "/images/forest_med.webp",
      order: 4,
    },
    {
      title: "Cars API App",
      url: "https://magnificent-kringle-441279.netlify.app/",
      description:
        "PLACEHOLDER An application made to consume an external API.",
      imgPath: "/images/carsapi.webp",
      imgUrl: "",
      github: "",
      splash: "/images/mountain_blue.webp",
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
      name: "Node.js",
      imgPath: "/tech/node-js.svg",
      imgUrl: "https://www.svgrepo.com/show/452075/node-js.svg",
    },
    {
      name: "Next.js",
      imgPath: "/tech/next-js.svg",
      imgUrl: "https://www.svgrepo.com/show/306466/next-dot-js.svg",
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
      name: "Firebase",
      imgPath: "/tech/firebase.svg",
      imgUrl: "https://www.svgrepo.com/show/373595/firebase.svg",
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

      <ProjectSection projects={projects} />

      <TechSection skills={skills} />

      <Footer />
    </div>
  );
}
