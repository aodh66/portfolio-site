// import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router";
import "./app.css";

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";

export function NotFound() {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="align-items-center mb-6 flex flex-col">
        <h1 className="mb-5 text-5xl font-black">404</h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">
            Sorry, this page doesn't exist.
          </h2>
          <div>
            <Link href={`/`} className="link">
              Homepage
            </Link>
          </div>
          <div>
            <Link href={`/blog`} className="link">
              Blog
            </Link>
          </div>
          <div>
            <Link href={`/contact`} className="link">
              Contact
            </Link>
          </div>
          <div>
            <Link href={`/portfolio`} className="link">
              Projects
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
