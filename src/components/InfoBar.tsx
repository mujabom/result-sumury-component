import iconmemory from "../asset/images/icon-memory.svg";
import iconnreaction from "../asset/images/icon-reaction.svg";
import iconverbal from "../asset/images/icon-verbal.svg";
import iconvisual from "../asset/images/icon-visual.svg";

type InfoBarProps = {
  field: "Memory" | "Reaction" | "Verbal" | "Visual";
  score: number;
};
export function InfoBar({ field, score }: InfoBarProps) {
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
