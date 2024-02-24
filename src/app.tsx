import { useState, useEffect } from "preact/hooks";
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
import './app.css'
// import './index.css'
// import Mountain from "./assets/forest_light.jpg"

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";
// @ts-ignore
import Card from "/components/Card";
// @ts-ignore
import CardSection from "/components/CardSection";
// @ts-ignore
// import TechSection from "/components/TechSection";

interface ExampleProp {
  title: string;
  url: string;
  description: string;
  imgPath: string;
  imgUrl: string;
  github: string;
  order: number;
}

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
          "Electron app to periodically or on command back up a folder.",
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
    <h2 className="text-xl font-black"><a href={`/portfolio`} className="justify-self-end">Portfolio</a></h2>
    <CardSection projects={projects} />
<p>This should be a component that has a subcomponent. Subcomponent has image of project, 
  name, description, purpose (technology learning wise)?</p>
  <p>Element on this page should be hard coded for performance as it won't be changed 
    often, but the portfolio page should be a db, so I can just add projects into it easily.
    The ones in the DB should have an order value, so I can sort them easily.</p>
  </div>

  <div className="mb-6">
    <h2 className="text-xl font-black">Technologies I'm familiar with Section</h2>
    <p>This should probably be a component with a subcomponent like the cards for each icon. 
      List icon and name.</p>
  </div>

   <div>
      <h2 className="text-xl font-black">To Do Section/Ideas</h2>
      {/* <p>Try adding background circles and decoration.</p> */}
      <p>Make links have a half width underline, make it expand to max width on mouseover</p>
      <p>Add darkmode lightmode toggle button</p>
        <p><s>cutout text, with mountain image behind, black or other dark bg in front.</s> Multiple fonts.</p>
        <p>
          <s>
            Top bar, simple, no burger menus or anything. Just main, blog, contact.
            Short intro on me, efficiency,
          </s> what I'm up to. <s>Links at the bottom.</s>
        </p>
        <p><s>Navbar component. Links component.</s> Contact.</p>
        <p>technologies section</p>
        <p>cut images for herotext</p>
        <p>stag, tree or mountain logo</p>
        <p><s>Responsive, use the small images, swap to large if screen width is Tablet or larger (768px).</s></p>
        <p>Choose fonts</p>
        <p>Hygraph for blog</p>
        <p>Mongo for projects</p>
   </div>

    {/* This is where you add the section dynamically generating cards for every entry.
    The Card element itself probs wouldn't live in here */}
    {/* <Card /> */}

      <Footer isMobile={isMobile} />
    </div>
  )
}

{/* <h1 className="text-3xl font-bold underline text-red-600">
  Hello world!
</h1> */}
  {/* <div>
  <h1 className="text-3xl font-bold underline">
  Hello world!
</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} class="logo" alt="Vite logo" />
    </a>
    <a href="https://preactjs.com" target="_blank">
      <img src={preactLogo} class="logo preact" alt="Preact logo" />
    </a>
  </div>
  <h1>Vite + Preact</h1>
  <div class="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/app.tsx</code> and save to test HMR
    </p>
  </div>
  <p class="read-the-docs">
    Click on the Vite and Preact logos to learn more
  </p> */}