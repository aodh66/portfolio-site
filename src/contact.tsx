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

      <div className="align-items-center mb-6 flex flex-col">
        <h1 className="mb-5 text-5xl font-black">Contact</h1>
        <div className="flex flex-col gap-4">
          <h2 className="mb-2 text-xl">If you'd like to email me yourself: <strong>aidan.meehan66@gmail.com</strong></h2>
          <p>There should be a contact form here.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
