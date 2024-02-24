// import ghLogoBig from "/src/assets/GitHub_Logo_White.png";

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
    // <div className="w-1/4 h-96">
    <div className="card flex h-40 min-w-full items-center gap-3 rounded-xl border-2 border-transparent p-2">
      <p className="splashTitle text-3xl font-semibold">{props.title}</p>
      <img src={props.splash} alt={props.title} className="cardSplash" />
      <img
        src={props.imgPath || props.imgUrl}
        alt={props.title}
        className="h-3/4 w-1/3"
      />
      {props.github ? (
        <div className="flex flex-col gap-1">
          <a href={props.url} className="link text-lg font-semibold">
            {props.title}
          </a>
          <p className="text-xs">{props.description}</p>
          <a href={props.github}>Github CONSIDER IMAGE HERE</a>
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
    // </div>
  );
};

export { type ExampleProp, Card };
