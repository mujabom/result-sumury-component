import ScoreWidget from "./components/ScoreWidget";
import Sumury from "./components/Sumury";

export default function App5() {
  return (
    <div className="min-h-screen justify-center h-fit flex align-middle sm:items-center">
      <div className="flex rounded-3xl w-full sm:w-[32rem]  bg-white shadow-custom-light flex-col sm:flex-row  ">
        <ScoreWidget />
        <Sumury />
      </div>
    </div>
  );
}
