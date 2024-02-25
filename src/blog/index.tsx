import { useState, useEffect } from "preact/hooks";
// import { Link } from "preact-router"
import "../app.css";

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";

export function Blog() {
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



  return (
    <div className="flex flex-col">

      <Header />

      <h1>This is the blog page with a bunch of posts</h1>

      <Footer isMobile={isMobile} />

    </div>
  );
}