import { z } from "zod";
import iconmemory from "../asset/images/icon-memory.svg";
import iconnreaction from "../asset/images/icon-reaction.svg";
import iconverbal from "../asset/images/icon-verbal.svg";
import iconvisual from "../asset/images/icon-visual.svg";
import data from "../data.json";

export default function Sumury() {
  const DatatSchema = z.object({
    category: z.enum(["Memory", "Reaction", "Verbal", "Visual"]),
    icon: z.string(),
    score: z.coerce.number(),
  });
  const DataArray = z.array(DatatSchema);
  return (
    <div className="p-10 grid gap-8 m-o">
      <h4 className="text-dark-gray-blue font-bold text-2xl">Summary</h4>
      <div className="grid gap-4 items-start">
        {DataArray.parse(data).map((item) => {
          return (
            <InfoBar
              key={item.category}
              field={item.category}
              score={item.score}
            />
          );
        })}
      </div>
      <button className=" text-white py-4 px-8 rounded-[2rem] bg-dark-gray-blue hover:bg-gradient-to-b from-light-slate-blue to-light-royal-blue">
        Continue
      </button>
    </div>
  );
}

type InfoBarProps = {
  field: "Memory" | "Reaction" | "Verbal" | "Visual";
  score: number;
};

function InfoBar({ field, score }: InfoBarProps) {
  const colors = {
    Memory: "bg-orangey-yellow",
    Reaction: "bg-light-red",
    Verbal: "bg-green-teal",
    Visual: "bg-cobalt-blue",
  };
  function getIcon(field: string) {
    switch (field) {
      case "Memory":
        return iconmemory;
      case "Reaction":
        return iconnreaction;
      case "Verbal":
        return iconverbal;
      case "Visual":
        return iconvisual;
      default:
        return iconmemory;
    }
  }

  const textColors = {
    Memory: "text-orangey-yellow",
    Reaction: "text-light-red",
    Verbal: "text-green-teal",
    Visual: "text-cobalt-blue",
  };
  return (
    <div
      className={`${colors[field]} 
      bg-opacity-10 flex justify-between justify-items-center items-center rounded-lg p-4`}
    >
      <div className="flex gap-4">
        <img src={getIcon(field)} alt="memory icon" />
        <p className={`${textColors[field]} font-bold`}>{field}</p>
      </div>
      <div className="flex flex-wrap gap-1 font-bold text-dark-gray-blue items-center">
        <p>{score}</p>
        <p className="opacity-50">/100</p>
      </div>
    </div>
  );
}
