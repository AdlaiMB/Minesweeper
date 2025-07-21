import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-4xl">Maquinitas</h1>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Click on the games link to see the available games.
          </li>
          <li className="tracking-[-.01em]">
            Click on the leaderboard link to see the top scores on your
            computer.
          </li>
        </ol>
      </main>
    </div>
  );
}
