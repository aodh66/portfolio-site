import { useState, useEffect } from "preact/hooks";
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
import './app.css'
// import './index.css'

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
    <>
    <Header name="Aidan" />
    <p>Add darkmode lightmode toggle button</p>
      <p>cutout text, with mountain image behind, black or other dark bg in front. Multiple fonts.</p>
      <p>
        Top bar, simple, no burger menus or anything. Just main, blog, contact.
        Short intro on me, efficiency, what I'm up to. Links at the bottom.
      </p>
      <p>Navbar component. Links component. Contact.</p>

    {/* This is where you add the section dynamically generating cards for every entry.
    The Card element itself probs wouldn't live in here */}
    {/* <Card /> */}

      <p>Responsive, use the small images, swap to large if screen width is Tablet or larger (768px).</p>
      <Footer isMobile={isMobile} />
    </>
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