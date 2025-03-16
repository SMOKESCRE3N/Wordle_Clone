import React from "react";

const keyboardRows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
function Keyboard({ onKeyPress }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      {keyboardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.split("").map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className="w-10 h-12 bg-gray-300 rounded-md text-xl font-bold hover:bg-gray-400 active:bg-gray-500"
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <div className="flex gap-2 mt-0">
        <button
          onClick={() => onKeyPress("Backspace")}
          className="w-16 h-12 bg-gray-300 rounded-md text-xl font-bold hover:bg-gray-400 active:bg-gray-500"
        >
          ⌫
        </button>
        <button
          onClick={() => onKeyPress("Enter")}
          className="w-16 h-12 bg-gray-300 rounded-md text-xl font-bold hover:bg-gray-400 active:bg-gray-500"
        >
          ⏎
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
