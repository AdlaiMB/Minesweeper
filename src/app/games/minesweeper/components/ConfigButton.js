export default function ConfigButton({
  boardSize,
  disableButtons,
  onButtonClick,
}) {
  const buttonColor = { 8: "", 9: "", 16: "", 30: "" };

  for (let size in buttonColor) {
    if (disableButtons) {
      buttonColor[size] = "bg-btn-unactive";
      continue;
    }

    if (boardSize == size) {
      buttonColor[size] = "bg-btn-active";
    } else {
      buttonColor[size] = "bg-btn";
    }
  }

  return (
    <div
      id="game-buttons"
      className="flex flex-wrap gap-2 w-full font-[family-name:var(--font-geist-mono)]"
    >
      <button
        id="game-buttons-8x8"
        className={`${buttonColor[8]} py-4 basis-24 rounded-sm grow text-sm ${
          disableButtons ? "" : "hover:bg-btn-active"
        } ease-in-out duration-150`}
        disabled={disableButtons}
        onClick={() => {
          // Logic to reset the game to 8x8 configuration
          onButtonClick([8, 8]);
        }}
      >
        8x8
      </button>
      <button
        id="game-buttons-9x9"
        className={`${buttonColor[9]} py-4 basis-24 rounded-sm grow text-sm  ${
          disableButtons ? "" : "hover:bg-btn-active"
        } ease-in-out duration-150`}
        disabled={disableButtons}
        onClick={() => {
          // Logic to reset the game to 8x8 configuration
          onButtonClick([9, 9]);
        }}
      >
        9x9
      </button>
      <button
        id="game-buttons-16x16"
        className={`${
          buttonColor[16]
        } py-4 basis-24 rounded-sm grow hidden md:block text-sm ${
          disableButtons ? "" : "hover:bg-btn-active"
        } ease-in-out duration-150`}
        disabled={disableButtons}
        onClick={() => {
          // Logic to reset the game to 8x8 configuration
          onButtonClick([16, 16]);
        }}
      >
        16x16
      </button>
      <button
        id="game-buttons-16x30"
        className={`${
          buttonColor[30]
        } py-4 basis-24 rounded-sm grow hidden xl:block text-sm ${
          disableButtons ? "" : "hover:bg-btn-active"
        } ease-in-out duration-150`}
        disabled={disableButtons}
        onClick={() => {
          // Logic to reset the game to 8x8 configuration
          onButtonClick([16, 30]);
        }}
      >
        16x30
      </button>
    </div>
  );
}
