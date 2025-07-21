import Cell from "./Cell";

export default function Board({ boardSize, board, onCellClick }) {
  const cells = [];
  const [rows, cols] = boardSize;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let { isRevealed, isMine, adjacentMines, isFlagged } = board[row][col];
      cells.push(
        <Cell
          key={`${row}-${col}`}
          isRevealed={isRevealed}
          flagged={isFlagged}
          isMine={isMine}
          adjacentMines={adjacentMines}
          onCellClick={() => {
            onCellClick(row, col);
          }}
          onRightClick={(e) => {
            e.preventDefault();
            onCellClick(row, col, true);
          }}
        />
      );
    }
  }

  return (
    <div
      id="game-board"
      className="grid border-1 w-fit h-fit border-white"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {cells}
    </div>
  );
}
