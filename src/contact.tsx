// import { useState, useEffect } from "preact/hooks";
// import { Link } from "preact-router"
import "./app.css";

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";

export function Contact() {

  return (
    <div className="flex flex-col">

      <Header />

    <h1>This is the contact page with an email form</h1>

      <Footer  />

    </div>
  );
}