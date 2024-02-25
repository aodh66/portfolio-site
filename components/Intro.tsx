// import { Link } from "preact-router"

const Intro = () => {
  return (
    <div className="mb-6 flex flex-col">
      <div className="background mb-6 self-center">
        {" "}
        <h1 className="hero">Hi I'm Aidan.</h1>
      </div>
      <div className="mb-3 italic">
        <p>I'm a Full-Stack Web Developer, currently in the UK.</p>
        <p>
          I love working in close knit teams, and making useful, intuitive sites
          for the end user.
        </p>
      </div>
      <p>
        I also have an{" "}
        <strong>
          <s>undiagnosed obsession</s>
        </strong>{" "}
        keen interest in efficiency through all aspects of my life. As such, in
        the Blog section, you can find logs of my journey paring my multiday
        camping kit down to to ludicrous levels, as well as delusional diatribes
        about building ergonomic keyboards/input devices.
      </p>
    </div>
  );
};

export default Intro;
