export default function DigitDisplay({
  timer,
  mineCount,
  resetButtonEnabled,
  onReset,
}) {
  return (
    <div
      id="game-controls"
      className="grid grid-cols-3 grid-rows-1 place-items-center w-full grow-0 font-[family-name:var(--font-geist-mono)]"
    >
      <div id="game-controls-timer">{timer}</div>
      <div id="game-controls-rest">
        <button
          className={`${
            resetButtonEnabled ? "bg-btn-rst-active" : "bg-btn-rst"
          } rounded-sm p-3 text-xs`}
          disabled={!resetButtonEnabled}
          onClick={() => {
            onReset();
          }}
        >
          reset
        </button>
      </div>
      <div id="game-controls-minecount">{mineCount}</div>
    </div>
  );
}
