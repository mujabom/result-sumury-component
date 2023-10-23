import ScoreWidget from "./App";
import iconmemory from "./asset/images/icon-memory.svg";
import iconnreaction from "./asset/images/icon-reaction.svg";
import iconverbal from "./asset/images/icon-verbal.svg";
import iconvisual from "./asset/images/icon-visual.svg";
import data from "./data.json";
type Data = {
  category: "Memory" | "Reaction" | "Verbal" | "Visual";
  icon: string;
  score: number;
};
export default function App5() {
  return (
    <div className="min-h-screen justify-center flex align-middle items-center">

      <div className="flex rounded-3xl shadow-lg flex-col md:flex-row  ">
        <ScoreWidget />
        <div className="p-6 flex flex-col justify-between md:w-1/2">
          <h4 className="font-bold text-dark-gray-blue ">Summary</h4>
          <div className="flex flex-col gap-3">
          {data.map((item) => {
            const data = item as Data;
            return (
              <InfoBar
              key={data.category}
                field={data.category}
                score={data.score}
              />
            );
          })}</div>
          <button className=" rounded-3xl p-3 text-white  bg-dark-gray-blue font-bold w-full mt-6">
            Continue
          </button>
        </div>
      </div>
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
  
  return (
    <div
      className={`flex flex-row ${colors[field]} bg-opacity-10 w-full p-3 justify-between rounded-lg`}
    >
      <div className="flex flex-row gap-2">
        <img src={getIcon(field)} alt="memory icon" className="" />
        <p className={`text-${colors[field]}`}>{field}</p>
      </div>
      <div className="flex flex-row gap-1">
        <p className="text-dark-gray-blue">{score}</p>
        <p className="text-light-lavender">/100</p>
      </div>
    </div>
  );
}
