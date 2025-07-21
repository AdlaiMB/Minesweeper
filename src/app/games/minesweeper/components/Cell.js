export default function Cell({
  isRevealed,
  isMine,
  adjacentMines,
  onCellClick,
  onRightClick,
  flagged,
}) {
  const value = isMine ? "💣" : adjacentMines;

  return (
    <div
      onClick={onCellClick}
      onContextMenu={onRightClick}
      className={`font-[family-name:var(--font-geist-mono)] text-sm min-w-[35px] min-h-[35px] w-[5vw] h-[5vw] max-w-[40px] max-h-[40px] border-1 border-grid flex items-center justify-center font-medium ${
        isRevealed ? "" : "bg-background"
      }`}
    >
      {isRevealed && !flagged ? value : ""}
      {flagged && <span>🚩</span>}
    </div>
  );
}
