import Link from "next/link";

export default function Page() {
  const games = ["minesweeper"];

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[80%] flex flex-col gap-4 m-auto">
        {games.map((game) => (
          <div
            key={game}
            className="py-4 pl-4 w-full border-2 border-white rounded-md font-[family-name:var(--font-geist-mono)] hover:bg-neutral-900 ease-in-out duration-200"
          >
            <Link href={`/leaderboards/${game}`}>
              {" "}
              {"<"} {game} leaderboards
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
