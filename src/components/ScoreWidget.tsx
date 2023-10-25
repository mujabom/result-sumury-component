export default function ScoreWidget() {
  return (
    <div
      className="text-light-lavender bg-gradient-to-b from-light-slate-blue to-light-royal-blue
    grid place-items-center py-10 px-[3.25rem] gap-8 rounded-b-3xl md:rounded-t-3xl"
    >
      <h4 className="text-2xl font-bold">Your Result</h4>
      <p
        className="rounded-full aspect-square w-48 grid text-center 
        place-content-center items-center bg-gradient-to-b from-violet-blue
      to-persian-blue"
      >
        <span className="text-[5rem] text-white font-extrabold">76</span>
        of 100
      </p>
      <div className="text-center grid gap-4">
        <h2 className="text-3xl text-white">Great</h2>
        <p className="leading-normal">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
