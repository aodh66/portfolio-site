// import { useState } from 'preact/hooks'
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
import './app.css'
import './index.css'
// @ts-ignore
import Header from "/components/Header";

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header name="Aidan" />
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
      <p>
        Top bar, simple, no burger menus or anything. Just main, blog, contact.
        Short intro on me, efficiency, what I'm up to. Links at the bottom.
      </p>
      <p>Navbar component. Links component. Contact.</p>
    </>
  )
}
