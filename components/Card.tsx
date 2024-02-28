// import ghLogo from "/images/github-mark-white.webp";
// import ghLogoBig from "/images/GitHub_Logo_White.webp";

interface ExampleProp {
  title: string;
  url: string;
  description: string;
  imgPath: string;
  imgUrl: string;
  github: string;
  splash: string;
  order: number;
}

const Card = (props: ExampleProp) => {
  return (
    <div className="card flex h-40 min-w-full items-center gap-3 rounded-xl border-2 border-transparent p-2">
      {props.splash ? (
        <>
          <p className="splashTitle text-3xl font-semibold">{props.title}</p>
          <img src={props.splash} alt={props.title} className="cardSplash" />
        </>
      ) : null}
      <img
        src={props.imgPath || props.imgUrl}
        alt={props.title}
        className="max-w-1/3 h-3/4"
      />
      {props.github ? (
        <div className="flex flex-col gap-1">
          <div>
            <a href={props.url} className="link text-lg font-semibold">
              {props.title}
            </a>
          </div>
          <p className="text-xs">{props.description}</p>
          <a href={props.github}>Github</a>
          {/* <a href={props.github}>
            <div className="flex h-5 gap-1 justify-end">
              <img src={ghLogoBig} className="h-" alt="Github logo" />
              <img src={ghLogo} className="h-" alt="Github logo" />
            </div>
          </a> */}
        </div>
      ) : (
        <div>
          <a href={props.url} className="link text-lg font-semibold">
            {props.title}
          </a>
          <p className="text-xs">{props.description}</p>
        </div>
      )}
    </div>
  );
};

export { type ExampleProp, Card };
