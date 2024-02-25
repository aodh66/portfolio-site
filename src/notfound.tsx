// import { useState, useEffect } from "preact/hooks";
// import { Link } from "preact-router"
import "./app.css";

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";

export function NotFound() {

  return (
    <div className="flex flex-col">

      <Header />

    <h1>Sorry, this page doesn't exist.</h1>

      <Footer />

    </div>
  );
}
