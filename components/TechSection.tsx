interface TechProp {
  name: string;
  imgPath: string;
  imgUrl: string;
}

interface TechProps {
  skills: TechProp[];
}

const TechSection = ({ skills }: TechProps) => {
  return (
    <div className="mb-6">
      <h2 className="mb-2 text-xl font-black">Skills</h2>
      <div className="flex flex-wrap justify-around gap-4">
        {skills.map((skill: TechProp) => (
          <div className="card flex h-20 w-20 flex-col items-center gap-3 rounded-xl border-2 border-transparent p-2">
            <img
              src={skill.imgPath || skill.imgUrl}
              alt={skill.name}
              className="h-8 w-8"
            />
            <p className="text-xs">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { type TechProp, TechSection };
