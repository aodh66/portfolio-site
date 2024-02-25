// import { useState, useEffect } from "preact/hooks";
// import { Link } from "preact-router"
import "../app.css";

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";

export function Blog() {

  return (
    <div className="flex flex-col">

      <Header />

      <h1>This is the blog page with a bunch of posts</h1>

      <Footer />

    </div>
  );
}