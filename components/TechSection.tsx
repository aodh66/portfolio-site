interface TechProp {
  name: string;
  imgPath: string;
  imgUrl: string;
}

interface TechProps {
    skills: TechProp[]
}

// const CardSection = ({project: {title, url, description, imgPath, imgUrl, github, order} = {}}: object) =>  {
const TechSection = ({ skills }: TechProps) => {
  
  // const projects: Array<object> = [
  //   {
  //     title: "Destiny Item Application",
  //     url: "",
  //     description:
  //       "React application interfacing with Game and Steam API to manage ingame inventory.",
  //     imgPath: "",
  //     imgUrl: "",
  //     github: "",
  //     order: 1,
  //   },
  // ];


  return (
    <div className="flex flex-wrap gap-4 justify-around">
      {skills.map((skill: TechProp) => (
        <div className="card w-20 h-20 flex flex-col border-2 rounded-xl items-center gap-3 p-2 border-transparent">
        <img src={skill.imgPath || skill.imgUrl} alt={skill.name} className="h-8 w-8" />
            <p className="text-xs">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export {
    type TechProp,
    TechSection,
  }
