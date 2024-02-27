// import { useState, useEffect } from "preact/hooks";
import './app.css'

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";
// @ts-ignore
import { ExampleProp } from "/components/Card";
// @ts-ignore
import ProjectSection from "/components/ProjectSection";

export function Portfolio() {

    const projects: ExampleProp[] = [
      {
        title: "Destiny Item Application",
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
        description:
          "Copied with no JS to practice CSS",
        imgPath: "",
        imgUrl:
          "",
        github: "",
        splash: "/tempCardImg/mountain_color.jpg",
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
        splash: "/tempCardImg/forest_med.jpg",
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
        splash: "/tempCardImg/mountain_med.jpg",
        order: 5,
      },
    ];

  return (
    <div className="flex flex-col">
    <Header />

    <h1 className="mb-12 text-5xl font-black">Projects</h1>

    <ProjectSection projects={projects} />
    <h1>This is the portfolio page with all of my projects ever</h1>


      <Footer />
    </div>
  )
}