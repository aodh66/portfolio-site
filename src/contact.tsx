import { useState } from "preact/hooks";
// import { Link } from "preact-router"
import "./app.css";

// @ts-ignore
import Header from "/components/Header";
// @ts-ignore
import Footer from "/components/Footer";

export function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="flex flex-col">
      <Header />

      <div className="align-items-center mb-6 flex flex-col">
        <h1 className="mb-5 text-5xl font-semibold">Contact</h1>
        <div className="flex flex-col gap-4">
          <h2 className="mb-2 text-xl">
            If you'd like to email me directly:{" "}
            <strong>aidan.meehan66@gmail.com</strong>
          </h2>

          <form className="flex flex-col" onSubmit={onSubmit}>
            <label for="return-email" className="mb-2 self-start text-xs">
              Your Email
            </label>
            <input
              type="email"
              id="return-email"
              name="return-email"
              placeholder="Your Email"
              pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
              required
              className="card form mb-7 min-w-full rounded-xl border-2 border-transparent p-2 "
            />
            <label for="subject" className="mb-2 self-start text-xs">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              className="card form mb-7 min-w-full rounded-xl border-2 border-transparent p-2"
            />
            <label for="message" className="mb-2 self-start text-xs">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Message"
              required
              className="card form mb-7 h-64  min-w-full rounded-xl border-2 border-transparent p-2"
            />
           <div className="flex gap-4 ">
              <button type="submit" className="text-xl font-semibold px-2 link items-center">Send</button>
              <p className="self-center">{result}</p>
           </div>
            </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
