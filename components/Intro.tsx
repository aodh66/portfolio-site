// import { Link } from "preact-router"

const Intro = () => {
  return (
    <div className="mb-6 flex flex-col">
      <div className="background mb-6 self-center">
        {" "}
        <h1 className="hero">Hi I'm Aidan.</h1>
      </div>
      <div className="mb-3 italic text-lg">
        <p>Full-Stack Web Developer (UK based).</p>
        <p>
          I love working in close-knit teams, and creating useful, intuitive sites
          for the end user.
        </p>
      </div>
      <p>
        I also have <strong>
          <s>an undiagnosed obsession</s>
        </strong>{" "}
        a keen interest in efficiency across all aspects of my life. As such, in
        my blog, you can find logs of my journey paring my multiday
        camping kit down to to ludicrous levels, as well as delusional diatribes
        about building ergonomic keyboards/input devices.
      </p>
    </div>
  );
};

export default Intro;
