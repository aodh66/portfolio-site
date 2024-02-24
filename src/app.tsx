import { useState, useEffect } from "preact/hooks";
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
import './app.css'
// import './index.css'
// import Mountain from "./assets/forest_light.jpg"
// import js from "./assets/tech/javascript-logo-svgrepo-com.svg"

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";
// @ts-ignore
import { ExampleProp } from "/components/Card";
// @ts-ignore
import CardSection from "/components/CardSection";
// @ts-ignore
import { TechSection, TechProp } from "/components/TechSection";

// interface ExampleProp {
//   title: string;
//   url: string;
//   description: string;
//   imgPath: string;
//   imgUrl: string;
//   github: string;
//   order: number;
// }

export function App() {
  // const [count, setCount] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
     
    //check screen size
    const handleResize = () => {
      if (window.innerWidth < 767) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }
    
    // resize event listener
    useEffect(() => {
      window.addEventListener("resize", handleResize)
    })

    const projects: ExampleProp[] = [
      {
        title: "Destiny Item Application",
        url: "",
        description:
          "React app using Bungie and Steam API to manage ingame inventory.",
        imgPath: "",
        imgUrl: "",
        github: "",
        order: 0,
      },
      {
        title: "Eclectic Shop",
        url: "https://ch15-fs-shop.vercel.app/",
        description: "React fullstack hypothetical shop.",
        imgPath: "",
        imgUrl: "",
        github: "https://github.com/aodh66/ch15-fs-shop",
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
        order: 2,
      },
      {
        title: "Placeholder1",
        url: "",
        description:
          "Placeholder description",
        imgPath: "",
        imgUrl:
          "",
        github: "",
        order: 3,
      },
      {
        title: "Placeholder2",
        url: "",
        description:
          "Placeholder description",
        imgPath: "",
        imgUrl:
          "",
        github: "",
        order: 4,
      },
      {
        title: "Placeholder3",
        url: "",
        description:
          "Placeholder description",
        imgPath: "",
        imgUrl:
          "",
        github: "",
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
    ]

  return (
    <div className="flex flex-col">
    <Header />
  <div className="flex flex-col mb-6">
     <div className="background self-center mb-6"> <h1 className="hero">Hi I'm Aidan.</h1></div>
      <div className="mb-3 italic">
        <p>I'm a Full-Stack Web Developer, currently in the UK.</p>
        <p>I love working in close knit teams, and making useful, intuitive sites for the end user.</p>
      </div>
      <p>I also have an <strong><s>undiagnosed obsession</s></strong> keen interest in 
      efficiency through all aspects of my life. As such, in the Blog section, you can find 
      logs of my journey paring my multiday camping kit down to to ludicrous levels, as well as 
      delusional diatribes about building ergonomic keyboards/input devices.</p>
  </div>

  <div className="mb-6 flex flex-col align-items-center">
    <h2 className="text-xl font-black mb-2"><a href={`/portfolio`} className="justify-self-end link ">Portfolio</a></h2>
    <CardSection projects={projects} />
  </div>

  <div className="mb-6">
    <h2 className="text-xl font-black mb-2">Skills</h2>
    <TechSection skills={skills} />
  </div>

      <Footer isMobile={isMobile} />
    </div>
  )
}