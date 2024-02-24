import ghLogoBig from "/src/assets/GitHub_Logo_White.png";

interface ExampleProp {
  title: string,
  url: string,
  description: string,
  imgPath: string,
  imgUrl: string,
  github: string,
  order: number,
}

const Card = (props: ExampleProp) =>  {
  // console.log("🚀 ~ Card ~ props:", props)
  return (
      // <div className="w-1/4 h-96">
        <div className="card min-w-full h-40 flex border-2 rounded-xl items-center gap-3 p-2 border-transparent">
            <img src={props.imgPath || props.imgUrl} alt={props.title} className="w-1/3 h-3/4" />
            {props.github ? (
            <div className="flex flex-col gap-1">
                <a href={props.url} className="font-semibold text-lg">{props.title}</a>
                <p className="text-xs">{props.description}</p>
                <a href={props.github}>Github</a>
            </div>
            ) : (
            <div>
                <a href={props.url} className="font-semibold text-lg">{props.title}</a>
                <p className="text-xs">{props.description}</p>
            </div>)}
        </div>
      // </div>
    );
};

export default Card;




