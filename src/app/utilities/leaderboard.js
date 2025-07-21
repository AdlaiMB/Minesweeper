function isLeaderboardsStored() {
  return localStorage.getItem("leaderboards-minesweeper");
}

function createLeaderboards() {
  const leaderBoard = Array.from({ length: 10 }, () => ({
    name: "",
    score: Number.MAX_VALUE,
  }));

  localStorage.setItem(
    "leaderboards-minesweeper",
    JSON.stringify({
      8: leaderBoard,
      9: leaderBoard,
      16: leaderBoard,
      30: leaderBoard,
    })
  );
}

function getLeaderboard(boardSize) {
  const leaderboards = JSON.parse(
    localStorage.getItem("leaderboards-minesweeper")
  );

  return leaderboards[boardSize];
}

function isScoreHighScore(boardSize, newScore) {
  const leaderboard = getLeaderboard(boardSize);

  const index = leaderboard.findIndex((record) => newScore < record.score);

  return index;
}

function saveLeaderBoard(boardSize, leaderBoard) {
  const leaderboards = JSON.parse(
    localStorage.getItem("leaderboards-minesweeper")
  );
  leaderboards[boardSize] = leaderBoard;

  localStorage.setItem(
    "leaderboards-minesweeper",
    JSON.stringify(leaderboards)
  );
}

function recordScore(boardSize, index, record) {
  const leaderboard = getLeaderboard(boardSize);

  leaderboard.splice(index, 0, record);
  leaderboard.pop();

  return leaderboard;
}

function computeScore(timer) {
  const [hours, minutes, seconds] = timer.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

function convertScoreToTime(score) {
  const totalSeconds = score;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    (hours > 9 ? hours : "0" + hours) +
    ":" +
    (minutes > 9 ? minutes : "0" + minutes) +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds)
  );
}

export {
  isLeaderboardsStored,
  createLeaderboards,
  getLeaderboard,
  isScoreHighScore,
  recordScore,
  computeScore,
  convertScoreToTime,
  saveLeaderBoard,
};
