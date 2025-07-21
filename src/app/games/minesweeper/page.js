"use client";

import DigitDisplay from "./components/DigitDisplay";
import Board from "./components/Board";
import ConfigButton from "./components/ConfigButton";
import Form from "./components/Form";
import Modal from "../../components/Modal";

import { getCurrentTime, getElapsedTime } from "./utilities/timer";
import {
  generateFilledBoard,
  generateEmptyBoard,
  getBoardDiemensions,
  getGameState,
  countMisplacedFlags,
  MINES_FOR_BOARD_SIZE,
  DEFAULT_BOARD_SIZE,
} from "./utilities/board";
import {
  isLeaderboardsStored,
  createLeaderboards,
  isScoreHighScore,
  recordScore,
  computeScore,
  saveLeaderBoard,
} from "../../utilities/leaderboard";

import { useState, useRef } from "react";

export default function Page() {
  const [playername, setPlayername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timer, setTimer] = useState("00:00:00");
  const [board, setBoard] = useState(
    Array(DEFAULT_BOARD_SIZE[0])
      .fill(null)
      .map(() =>
        Array(DEFAULT_BOARD_SIZE[1])
          .fill(null)
          .map(() => ({
            isRevealed: false,
            isMine: false, // Placeholder, should be set based on game logic
            isFlagged: false, // Placeholder, should be set based on game logic
            adjacentMines: 0, // Placeholder, should be calculated based on game logic
          }))
      )
  );
  const Ref = useRef(null);

  const [rows, cols] = getBoardDiemensions(board);
  const { isGameStarted, isGameFailed, mineCount } = getGameState(board);

  if (isGameFailed) {
    clearInterval(Ref.current);
    Ref.current = null;
  }

  if (mineCount === 0 && isGameStarted) {
    clearInterval(Ref.current);
    Ref.current = null;

    if (!isLeaderboardsStored()) {
      createLeaderboards();
    }

    const score = computeScore(timer);
    const index = isScoreHighScore(cols, score);

    if (index !== -1 && !isModalOpen) {
      setIsModalOpen(true);
    }
  }

  const handleStoreScore = () => {
    const score = computeScore(timer);
    const index = isScoreHighScore(cols, score);
    const newLeaderboard = recordScore(cols, index, {
      name: playername || "Anonymous",
      score,
    });
    setIsModalOpen(false);
    setPlayername("");
    saveLeaderBoard(cols, newLeaderboard);
  };

  const updateTimer = (timerStartTime) => {
    let { total, hours, minutes, seconds } = getElapsedTime(timerStartTime);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const startTimer = (timerStartTime) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      updateTimer(timerStartTime);
    }, 1000);
    Ref.current = id;
  };

  const handleCellClick = (row, col, flag = false) => {
    if (!isGameStarted) {
      startTimer(getCurrentTime());
      setBoard(
        generateFilledBoard(board, MINES_FOR_BOARD_SIZE[cols], [row, col])
      );
    }

    if (
      board[row][col].isRevealed ||
      (!flag && board[row][col].isFlagged) ||
      isGameFailed ||
      mineCount === 0
    ) {
      return;
    }

    let setReveal = true;
    let setFlag = false;

    if (flag) {
      if (
        countMisplacedFlags(board) >= mineCount &&
        !board[row][col].isFlagged
      ) {
        return;
      }

      setFlag = !board[row][col].isFlagged;
      setReveal = false;
    }

    const newBoard = [...board];
    const cell = newBoard[row][col];
    cell.isFlagged = setFlag;
    cell.isRevealed = setReveal;

    setBoard(newBoard);
  };

  const handleGameReset = () => {
    setBoard(generateEmptyBoard(rows, cols));

    setTimer("00:00:00");
    if (Ref.current) {
      clearInterval(Ref.current);
      Ref.current = null;
    }
  };

  const handleBoardSizeChange = (newSize) => {
    const [rows, cols] = newSize;

    setBoard(generateEmptyBoard(rows, cols));
  };

  return (
    <div id="page" className="w-full h-screen flex items-center justify-center">
      {isModalOpen && (
        <Modal>
          <Form
            playername={playername}
            setPlayername={setPlayername}
            onSubmit={handleStoreScore}
          />
        </Modal>
      )}
      <div id="game" className="flex flex-col gap-4 items-center">
        <DigitDisplay
          timer={timer}
          mineCount={mineCount}
          resetButtonEnabled={isGameStarted}
          onReset={handleGameReset}
        />
        <Board
          boardSize={[rows, cols]}
          board={board}
          onCellClick={handleCellClick}
        />
        <ConfigButton
          boardSize={cols}
          disableButtons={isGameStarted}
          onButtonClick={handleBoardSizeChange}
        />
      </div>
    </div>
  );
}
