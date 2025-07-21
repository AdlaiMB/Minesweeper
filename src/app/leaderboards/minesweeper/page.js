"use client";

import {
  getLeaderboard,
  isLeaderboardsStored,
  createLeaderboards,
} from "@/app/utilities/leaderboard";

import { useEffect, useState } from "react";
import Table from "./components/Table";
import Buttons from "./components/Buttons";

export default function Page() {
  const [leaderboard, setLeaderboard] = useState({
    boardSize: 0,
    table: [],
  });

  useEffect(() => {
    const boardSize = 8;

    if (!isLeaderboardsStored()) {
      createLeaderboards();
    }

    const table = getLeaderboard(boardSize);

    setLeaderboard({ boardSize, table });
  }, []);

  const handleLeaderboardChange = (boardSize) => {
    const table = getLeaderboard(boardSize);
    setLeaderboard({ boardSize, table });
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col items-center justify-center w-[80%] gap-4 font-[family-name:var(--font-geist-mono)]">
        <h1 className="font-semibold text-2xl">Top 10</h1>
        <div className="flex gap-2 mb-4">
          <Buttons
            boardSize={leaderboard.boardSize}
            onButtonClick={handleLeaderboardChange}
          />
        </div>
        <Table table={leaderboard.table} />
      </div>
    </div>
  );
}
