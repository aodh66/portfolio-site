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
        <h1 className="mb-5 text-5xl font-semibold">Contact</h1>
        <div className="flex flex-col gap-4">
          <h2 className="mb-2 text-xl">
            If you'd like to email me yourself:{" "}
            <strong>aidan.meehan66@gmail.com</strong>
          </h2>

          <div className="flex flex-col ">
            <label for="return-email" className="mb-2 self-start text-xs">
              Your Email
            </label>
            <input
              type="email"
              id="return-email"
              placeholder="Your Email"
              required
              className="card form mb-7 min-w-full rounded-xl border-2 border-transparent p-2 "
            />
            <label for="subject" className="mb-2 self-start text-xs">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              required
              className="card form mb-7 min-w-full rounded-xl border-2 border-transparent p-2"
            />
            <label for="body" className="mb-2 self-start text-xs">
              Email Body
            </label>
            <textarea
              type="text"
              id="body"
              placeholder="Email Body"
              required
              className="card form mb-7 h-64  min-w-full rounded-xl border-2 border-transparent p-2"
            />
            <button>Send</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
