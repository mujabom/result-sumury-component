import ScoreWidget from "./components/ScoreWidget";
import Sumury from "./components/Sumury";

export default function App5() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="grid grid-cols-2 place-content-center">
        <ScoreWidget />
        <Sumury />
      </div>
    </div>
  );
}
