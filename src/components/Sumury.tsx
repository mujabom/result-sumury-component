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
    <div>
      <h4>Summary</h4>
      <div>
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
      <button>
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
      className={`${colors[field]} bg-opacity-5`}
    >
      <div >
        <img src={getIcon(field)} alt="memory icon" />
        <p className={`${textColors[field]}`}>{field}</p>
      </div>
      <div >
        <p >{score}</p>
        <p >/100</p>
      </div>
    </div>
  );
}
