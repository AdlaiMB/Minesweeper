function revealPoritionOfBoard(board, clickPosiition) {
  const [rows, cols] = getBoardDiemensions(board);
  const visited = new Set();
  const adjCells = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  function revealCell(row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return;
    }
    if (visited.has(board[row][col]) || board[row][col].isMine) {
      return;
    }

    const cell = board[row][col];
    cell.isRevealed = true;
    visited.add(cell);

    if (cell.adjacentMines > 0) {
      return;
    }

    for (const [rOffset, cOffset] of adjCells) {
      const adjRow = row + rOffset;
      const adjCol = col + cOffset;

      revealCell(adjRow, adjCol);
    }
  }

  revealCell(clickPosiition[0], clickPosiition[1]);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function blockAdjCells(board, blocked, cellPosition) {
  const [rows, cols] = getBoardDiemensions(board);
  const adjCells = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (const [rOffset, cOffset] of adjCells) {
    const adjRow = cellPosition[0] + rOffset;
    const adjCol = cellPosition[1] + cOffset;

    if (adjRow >= 0 && adjRow < rows && adjCol >= 0 && adjCol < cols) {
      blocked.add(board[adjRow][adjCol]);
    }
  }
}

function countAdjgMines(board, cellPosition) {
  const [rows, cols] = getBoardDiemensions(board);
  const adjCells = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let adjacentMines = 0;

  for (const [rOffset, cOffset] of adjCells) {
    const adjRow = cellPosition[0] + rOffset;
    const adjCol = cellPosition[1] + cOffset;

    if (
      adjRow >= 0 &&
      adjRow < rows &&
      adjCol >= 0 &&
      adjCol < cols &&
      board[adjRow][adjCol].isMine
    ) {
      adjacentMines++;
    }
  }

  return adjacentMines;
}

function generateFilledBoard(board, mines, clickPosition) {
  const [rows, cols] = getBoardDiemensions(board);
  const nextBoard = [...board];
  const blocked = new Set();

  // block cells around the clicked position
  blockAdjCells(nextBoard, blocked, clickPosition);

  // place mines randomly on the board and block adjacent cells to the mines to spread the mines out a bit and for easier gameplay
  while (mines > 0) {
    const row = getRandomInt(0, rows - 1);
    const col = getRandomInt(0, cols - 1);
    const cell = nextBoard[row][col];

    if (
      (row === clickPosition[0] && col === clickPosition[1]) ||
      blocked.has(cell)
    ) {
      continue;
    }

    blockAdjCells(nextBoard, blocked, [row, col]);

    blocked.add(cell);
    cell.isMine = true;
    mines--;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = nextBoard[row][col];

      if (cell.isMine) continue;

      let adjacentMines = countAdjgMines(nextBoard, [row, col]);

      cell.adjacentMines = adjacentMines;
    }
  }

  revealPoritionOfBoard(nextBoard, clickPosition);

  return nextBoard;
}

function getBoardDiemensions(board) {
  return [board.length, board[0].length];
}

function getGameState(board) {
  let isGameStarted = false;
  let isGameFailed = false;
  let mineCount = 0;
  let cell;
  const [rows, cols] = getBoardDiemensions(board);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      cell = board[row][col];
      if (cell.isRevealed && cell.isMine) {
        isGameFailed = true;
      }
      if (cell.isRevealed || cell.isFlagged) {
        isGameStarted = true;
      }
      if (cell.isMine && !cell.isFlagged) {
        mineCount++;
      }
    }
  }

  return { isGameStarted, isGameFailed, mineCount };
}

function generateEmptyBoard(rows, cols) {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      isRevealed: false,
      isMine: false,
      isFlagged: false,
      adjacentMines: 0,
    }))
  );
}

function countMisplacedFlags(board) {
  let count = 0;
  const [rows, cols] = getBoardDiemensions(board);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = board[row][col];
      if (cell.isFlagged && !cell.isMine) {
        count++;
      }
    }
  }

  return count;
}

const MINES_FOR_BOARD_SIZE = {
  8: 10, // 8x8 board has 10 mines
  9: 10, // 9x9 board has 10 mines
  16: 40, // 16x16 board has 40 mines
  30: 80, // 30x16 board has 80 mines
};

const DEFAULT_BOARD_SIZE = [8, 8];

export {
  generateFilledBoard,
  generateEmptyBoard,
  getBoardDiemensions,
  getGameState,
  countMisplacedFlags,
  MINES_FOR_BOARD_SIZE,
  DEFAULT_BOARD_SIZE,
};
