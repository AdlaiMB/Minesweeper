import { convertScoreToTime } from "../../../utilities/leaderboard";

export default function Table({ table }) {
  return (
    <div className="flex border-1 border-white w-full text-center max-w-[800px]">
      <div className="flex flex-col w-1/2">
        <div className="font-semibold py-1.5 border-1 ">Player Name</div>
        {table.map((record, index) => (
          <div
            key={index}
            className={`py-1.5 border-1 border-white text-white ${
              index % 2 === 1 ? "bg-neutral-900" : ""
            }`}
          >
            {record.name ? record.name.toUpperCase() : "******"}
          </div>
        ))}
      </div>
      <div className="flex flex-col w-1/2">
        <div className="font-semibold py-1.5 border-1">Time </div>
        {table.map((record, index) => (
          <div
            key={index}
            className={`py-1.5 border-1 border-white ${
              index % 2 === 1 ? "bg-neutral-900" : ""
            }`}
          >
            {record.score != Number.MAX_VALUE
              ? convertScoreToTime(record.score)
              : "00:00:00"}
          </div>
        ))}
      </div>
    </div>
  );
}
