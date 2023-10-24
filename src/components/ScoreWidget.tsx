export default function ScoreWidget() {
  return (
    <div
      className="text-light-lavender bg-gradient-to-b from-light-slate-blue to-light-royal-blue
    grid place-items-center py-3 px-5"
    >
      <h4>Your Result</h4>
      <div>
        <div>76</div>
        <p>of 100</p>
      </div>
      <div className="">
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
