import { z } from "zod";
import data from "../data.json";
import { InfoBar } from "./InfoBar";

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
