import React, { useState, useEffect } from "react";
import Keyboard from "../Keyboard/Keyboard";
import Grid from "../Grid/Grid";
import wordList from "../../wordList";

// function Home() {
//   const [guesses, setGuesses] = useState(Array(6).fill(""));
//   const [currentRow, setCurrentRow] = useState(0);

//   const handleKeyPress = (key) => {
//     console.log(`Key pressed: ${key}`);

//     // Logic to add letters to grid
//     // setGuesses((prevguesses) => {
//     //   const newguesses = [...prevguesses]; //syntax to copy a parameter into another variable
//     //   if (newguesses[currentRow].length < 5) {
//     //     newguesses[currentRow] += key;
//     //   }

//     //   return newguesses;
//     // });
//     setGuesses((prevGuesses) => {
//       const newGuesses = prevGuesses.map((row, rowIndex) =>
//         rowIndex === currentRow
//           ? key === "BACKSPACE"
//             ? row.slice(0, -1) // Remove last character on Backspace
//             : row.length < 5 && key !== "ENTER"
//             ? [...row, key] // Add letter if space is available
//             : row
//           : row
//       );

//       return newGuesses;
//     });

//     if (key === "ENTER" && guesses[currentRow].length === 5 && currentRow < 5) {
//       setCurrentRow((prevRow) => prevRow + 1); // Move to the next row
//     }
//   };

//   //physical keyboard input
//   useEffect(() => {
//     const handlePhysicalKeyPress = (e) => {
//       const key = e.key.toUpperCase();
//       if (/^[A-Z]$/.test(key) || key === "ENTER" || key === "BACKSPACE") {
//         handleKeyPress(key);
//       }
//     };

//     window.addEventListener("keydown", handlePhysicalKeyPress);

//     return () => {
//       window.removeEventListener("keydown", handlePhysicalKeyPress);
//     };
//   }, [currentRow]);

//   return (
//     <>
//       <div className="bg-gray-600">
//         <h1 className="text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">
//           Wordle
//         </h1>
//       </div>
//       <div>
//         <Grid guesses={guesses} />
//         <Keyboard onKeyPress={handleKeyPress} />
//       </div>
//     </>
//   );
// }

// export default Home;

function Home() {
  const [guesses, setGuesses] = useState(Array(6).fill(""));
  const [currentRow, setCurrentRow] = useState(0);
  const [secretWord, setSecretWord] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (wordList.length > 0) {
      setSecretWord(
        wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()
      );
    }
  }, []);

  const handleKeyPress = (key) => {
    if (gameOver) return;

    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];

      if (key === "BACKSPACE") {
        newGuesses[currentRow] = newGuesses[currentRow].slice(0, -1);
      } else if (key.length === 1 && /^[A-Z]$/.test(key)) {
        if (newGuesses[currentRow].length < 5) {
          newGuesses[currentRow] += key;
        }
      } else if (key === "ENTER") {
        if (newGuesses[currentRow].length !== 5) return prevGuesses;

        if (!wordList.includes(newGuesses[currentRow].toUpperCase())) {
          // alert("Invalid word!");
          return prevGuesses;
        }

        if (newGuesses[currentRow].toUpperCase() === secretWord) {
          alert("Congratulations! You guessed the word correctly.");
          setGameOver(true);
          return newGuesses;
        }

        return newGuesses;
      }

      return newGuesses;
    });

    // Move to next row **outside** setGuesses
    if (key === "ENTER") {
      setCurrentRow((prevRow) => {
        if (prevRow < 5) return prevRow + 1;
        alert(`Game over! The word was: ${secretWord}`);
        setGameOver(true);
        return prevRow;
      });
    }
  };

  useEffect(() => {
    const handlePhysicalKeyPress = (event) => {
      const key = event.key.toUpperCase();
      if (/^[A-Z]$/.test(key) || key === "ENTER" || key === "BACKSPACE") {
        handleKeyPress(key);
      }
    };

    window.addEventListener("keydown", handlePhysicalKeyPress);
    return () => window.removeEventListener("keydown", handlePhysicalKeyPress);
  }, [currentRow, gameOver]);

  return (
    <>
      <div className="bg-gray-900">
        <div className="bg-gray-900">
          <h1 className="text-6xl p-8 flex items-center justify-center font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">
            Wordle
          </h1>
        </div>
        <div>
          <Grid guesses={guesses} secretWord={secretWord} />
          <Keyboard onKeyPress={handleKeyPress} />
        </div>
      </div>
    </>
  );
}

export default Home;
