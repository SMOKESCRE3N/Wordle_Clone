// import React, { useState, useEffect } from "react";
// import Keyboard from "../Keyboard/Keyboard";
// import Grid from "../Grid/Grid";
// import wordList from "../wordList";

//   function Home() {
//     const [guesses, setGuesses] = useState(Array(6).fill(""));
//     const [currentRow, setCurrentRow] = useState(0);
//     const [secretWord, setSecretWord] = useState("");
//     const [gameOver, setGameOver] = useState(false);
//     const [message, setMessage] = useState("");
//     const [showMessage, setShowMessage] = useState(false);

//     useEffect(() => {
//       if (wordList.length > 0) {
//         setSecretWord(
//           wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()
//         );
//       }
//     }, []);

//     // Function to show a temporary message
//     const displayTemporaryMessage = (msg) => {
//       setMessage(msg);
//       setShowMessage(true);
      
//       // Hide the message after 1.5 seconds
//       setTimeout(() => {
//         setShowMessage(false);
//       }, 1500);
//     };

//     const handleKeyPress = (key) => {
//       if (gameOver) return;

//       if (key === "Enter") {
//         // Only process Enter if current guess is exactly 5 letters
//         if (guesses[currentRow].length === 5) {
//           // Check if word is valid
//           if (!wordList.includes(guesses[currentRow].toLowerCase())) {
//             displayTemporaryMessage("Not in word list");
//             return;
//           }

//           // Check if word matches secret word
//           if (guesses[currentRow].toUpperCase() === secretWord) {
//             setGameOver(true);
//             displayTemporaryMessage("Magnificent!");
//             return;
//           }

//           // Move to next row only if we're not at the last row
//           if (currentRow < 5) {
//             setCurrentRow(currentRow + 1);
//           } else {
//             setGameOver(true);
//             displayTemporaryMessage(`The word was: ${secretWord}`);
//           }
//         } else {
//           // Display message if trying to submit word with less than 5 letters
//           displayTemporaryMessage("Not enough letters");
//         }
//         return;
//       }

//       setGuesses((prevGuesses) => {
//         const newGuesses = [...prevGuesses];

//         if (key === "Backspace") {
//           // Handle backspace - remove last character
//           newGuesses[currentRow] = newGuesses[currentRow].slice(0, -1);
//         } else if (key.length === 1 && /^[A-Z]$/.test(key)) {
//           // Handle letter key - add if we have room
//           if (newGuesses[currentRow].length < 5) {
//             newGuesses[currentRow] += key;
//           }
//         }

//         return newGuesses;
//       });
//     };
    
//     useEffect(() => {
//       const handlePhysicalKeyPress = (event) => {
//         let key = event.key;
//         if (key.length === 1 && key.match(/^[a-z]$/)) {
//           key = key.toUpperCase();
//         }
        
//         if (/^[A-Z]$/.test(key) || key === "Enter" || key === "Backspace") {
//           handleKeyPress(key);
//         }
//       };

//       window.addEventListener("keydown", handlePhysicalKeyPress);
//       return () => window.removeEventListener("keydown", handlePhysicalKeyPress);
//     }, [currentRow, gameOver, guesses]);

//     return (
//       <>
//         <div className="bg-gray-900 min-h-screen">
//           <div className="bg-gray-900">
//             <h1 className="text-6xl p-8 flex items-center justify-center font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">
//               Wordle
//             </h1>
//           </div>
          
//           {/* Toast message container */}
//           {showMessage && (
//             <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
//               <div className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg font-medium text-center text-sm">
//                 {message}
//               </div>
//             </div>
//           )}
          
//           <div>
//             <Grid guesses={guesses} secretWord={secretWord} />
//             <Keyboard onKeyPress={handleKeyPress} />
//           </div>
//         </div>
//       </>
//     );
//   }

// export default Home;
