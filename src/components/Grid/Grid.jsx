import React from "react";

function Grid({ guesses, secretWord }) {
  const getLetterColor = (letter, index, row) => {
    if (!guesses[row] || guesses[row].length < 5) return "bg-gray-500"; // Default if no guess

    const guess = guesses[row].toUpperCase();
    const word = secretWord.toUpperCase();

    if (letter === word[index]) return "bg-green-500";
    else if (word.includes(letter)) return "bg-yellow-500";
    else {
      return "bg-gray-500";
    }
  };
  return (
    <div className="flex flex-col items-center space-y-0 p-0">
      {Array.from({ length: 6 }).map((_, row) => (
        <div key={row} className="flex flex-row items-center space-x-2 p-1">
          {Array.from({ length: 5 }).map((_, col) => {
            const letter = guesses[row]?.[col] || "";

            return (
              <div
                key={`${row}-${col}`}
                className={`w-10 h-10 flex items-center justify-center border-2 border-gray-500 text-3xl font-bold uppercase text-white ${getLetterColor(
                  letter,
                  col,
                  row
                )}`}
              >
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Grid;
