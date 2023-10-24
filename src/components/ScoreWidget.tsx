

export default function ScoreWidget(){

return (
  <div className="bg-gradient-to-b gap-3 flex w-full flex-col justify-around items-center p-7 from-light-slate-blue rounded-t-none rounded-b-3xl sm:rounded-3xl  to-light-royal-blue">
  <h4 className="text-light-lavender font-bold">Your Result</h4>
  <div className="rounded-full aspect-square flex flex-col justify-center h-40 bg-gradient-to-b from-violet-blue to-persian-blue ">
    <div className="flex flex-row justify-center font-extrabold text-white items-center text-6xl">
      76
    </div>
    <p className="flex justify-center text-light-lavender items-center text-[16px]">
      of 100
    </p>
  </div>
  <h2 className="text-2xl text-white font-bold">Great</h2>
  <p className="flex justify-center max-w-[187px] text-light-lavender text-center items-center text-xs">
    You scored higher than 65% of the people who have taken these tests.
  </p>
</div>
);

};