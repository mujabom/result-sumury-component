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
    <div className="px-5 py-6 flex flex-col gap-3 justify-between sm:w-full">
      <h4 className="font-bold text-dark-gray-blue ">Summary</h4>
      <div className="flex flex-col gap-3">
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
      <button
        className=" rounded-3xl py-2 text-sm text-white
  hover:bg-gradient-to-b from-light-slate-blue to-light-royal-blue
bg-dark-gray-blue  w-full"
      >
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
      className={`flex flex-row ${colors[field]} bg-opacity-10 w-full p-2 justify-between rounded-lg`}
    >
      <div className="flex flex-row gap-2">
        <img src={getIcon(field)} alt="memory icon" className="h-5" />
        <p className={`${textColors[field]} text-sm font-bold`}>{field}</p>
      </div>
      <div className="flex flex-row gap-1">
        <p className="text-dark-gray-blue">{score}</p>
        <p className="text-light-lavender">/100</p>
      </div>
    </div>
  );
}
