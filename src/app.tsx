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

  return (
    <div className="flex flex-col">
    <Header />
  <div className="flex flex-col mb-6">
     <div className="background self-center w-3/4"> <h1 className="hero">Hi I'm Aidan.</h1></div>
      <div className="mb-3 italic">
        <p>I'm a Full-Stack Web Developer, currently in the UK.</p>
        <p>I love working in close knit teams, and making useful, intuitive sites for the end user.</p>
      </div>
      <p>I also have an <strong><s>undiagnosed obsession</s></strong> keen interest in 
      efficiency through all aspects of my life. As such, in the Blog section, you can also find 
      logs of my journey to pare down my multiday camping kit to ludicrous levels, as well as 
      delusional diatribes about building supremely ergonomic keyboards/input devices.</p>
  </div>

    <h2>To Do Section/Ideas</h2>
    <p>Try adding background circles and decoration.</p>
    <p>Add darkmode lightmode toggle button</p>
      <p>cutout text, with mountain image behind, black or other dark bg in front. Multiple fonts.</p>
      <p>
        Top bar, simple, no burger menus or anything. Just main, blog, contact.
        Short intro on me, efficiency, what I'm up to. Links at the bottom.
      </p>
      <p>Navbar component. Links component. Contact.</p>
      <p>technologies section</p>

    {/* This is where you add the section dynamically generating cards for every entry.
    The Card element itself probs wouldn't live in here */}
    {/* <Card /> */}

      <p>Responsive, use the small images, swap to large if screen width is Tablet or larger (768px).</p>
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