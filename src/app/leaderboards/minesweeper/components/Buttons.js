export default function Buttons({ boardSize, onButtonClick }) {
  return (
    <>
      <button
        onClick={() => onButtonClick(8)}
        className={`${
          boardSize == 8 ? "bg-btn-active" : "bg-btn"
        } px-4 py-2 rounded cursor-pointer text-sm hover:bg-btn-active ease-in-out duration-150`}
      >
        8x8
      </button>
      <button
        onClick={() => onButtonClick(9)}
        className={`${
          boardSize == 9 ? "bg-btn-active" : "bg-btn"
        } px-4 py-2 rounded cursor-pointer text-sm hover:bg-btn-active ease-in-out duration-150`}
      >
        9x9
      </button>
      <button
        onClick={() => onButtonClick(16)}
        className={`${
          boardSize == 16 ? "bg-btn-active" : "bg-btn"
        } px-4 py-2 rounded cursor-pointer text-sm hover:bg-btn-active ease-in-out duration-150`}
      >
        16x16
      </button>
      <button
        onClick={() => onButtonClick(30)}
        className={`${
          boardSize == 30 ? "bg-btn-active" : "bg-btn"
        } px-4 py-2 rounded cursor-pointer text-sm hover:bg-btn-active ease-in-out duration-150`}
      >
        16x30
      </button>
    </>
  );
}
