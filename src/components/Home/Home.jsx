import React, { useState, useEffect } from "react";
import Keyboard from "../Keyboard/Keyboard";
import Grid from "../Grid/Grid";
import wordList from "../wordList";

// Enhanced larger Balloon component for celebration
const Balloon = ({ color, left, delay }) => {
  return (
    <div 
      className="absolute bottom-0 animate-float"
      style={{ 
        left: `${left}%`, 
        animationDelay: `${delay}s`,
        animationDuration: `${8 + Math.random() * 6}s` // Longer duration for larger balloons
      }}
    >
      {/* Balloon - much larger now */}
      <div 
        className="w-12 h-16 md:w-32 md:h-40 rounded-full shadow-lg relative"
        style={{ 
          backgroundColor: color,
          backgroundImage: `radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 50%)` 
        }}
      >
        {/* Balloon knot */}
        <div className="absolute -bottom-2 left-1/2 w-6 h-6 -translate-x-1/2 transform rotate-45 rounded-br-full" 
          style={{ backgroundColor: color, filter: 'brightness(80%)' }}>
        </div>
        
        {/* String */}
        <div className="absolute w-1 h-16 bg-gray-200 bottom-0 left-1/2 -translate-x-1/2 transform" 
          style={{ 
            bottom: '-16px',
            transformOrigin: 'top',
            animation: `swingString ${2 + Math.random()}s ease-in-out infinite alternate`
          }}>
        </div>
      </div>
    </div>
  );
};

// Confetti piece component
const ConfettiPiece = ({ color, left, size, delay }) => {
  // Randomly choose between rectangle and circle shapes
  const isCircle = Math.random() > 0.7;
  const rotation = Math.random() * 360;
  
  return (
    <div 
      className="absolute bottom-0 animate-confetti"
      style={{ 
        left: `${left}%`, 
        animationDelay: `${delay}s`,
        animationDuration: `${3 + Math.random() * 4}s`
      }}
    >
      <div 
        style={{ 
          backgroundColor: color,
          width: `${size}px`,
          height: isCircle ? `${size}px` : `${size * 1.5}px`,
          borderRadius: isCircle ? '50%' : '2px',
          transform: `rotate(${rotation}deg)`
        }}>
      </div>
    </div>
  );
};

// Celebration component with balloons and confetti
const Celebration = () => {
  const balloonColors = [
    '#FF5252', // Red
    '#FFCA28', // Yellow
    '#66BB6A', // Green
    '#42A5F5', // Blue
    '#AB47BC', // Purple
    '#FF7043', // Orange
    '#EC407A', // Pink
    '#26C6DA'  // Teal
  ];
  
  const confettiColors = [
    '#FF5252', '#FFCA28', '#66BB6A', '#42A5F5', 
    '#AB47BC', '#FF7043', '#EC407A', '#26C6DA',
    '#FFF176', '#4FC3F7', '#AED581', '#FFB74D',
    '#BA68C8', '#4DD0E1', '#F06292', '#7986CB'
  ];
  
  const balloons = [];
  const confetti = [];
  
  // Create 15 huge balloons with random positions and delays
  for (let i = 0; i < 15; i++) {
    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    const left = 5 + Math.random() * 90; // Random position from 5-95% (avoiding edge cut-off)
   // const delay = Math.random() * 1; // Random delay between 0-4s
    
    balloons.push(
      <Balloon key={`balloon-${i}`} color={color} left={left} />
    );
  }
  
  // Create 100 confetti pieces
  for (let i = 0; i < 300; i++) {
    const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    const left = Math.random() * 300;
    const size = 3 + Math.random() * 20; // Random size between 3-10px
    const delay = Math.random() * 1;
    
    confetti.push(
      <ConfettiPiece key={`confetti-${i}`} color={color} left={left} size={size} delay={delay} />
    );
  }
  
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {balloons}
      {confetti}
    </div>
  );
};

function Home() {
  const [guesses, setGuesses] = useState(Array(6).fill(""));
  const [currentRow, setCurrentRow] = useState(0);
  const [secretWord, setSecretWord] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    if (wordList.length > 0) {
      setSecretWord(
        wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()
      );
    }
  }, []);

  // Function to show a temporary message
  const displayTemporaryMessage = (msg) => {
    setMessage(msg);
    setShowMessage(true);
    
    // Hide the message after 1.5 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 1500);
  };

  const handleKeyPress = (key) => {
    if (gameOver) return;

    if (key === "Enter") {
      // Only process Enter if current guess is exactly 5 letters
      if (guesses[currentRow].length === 5) {
        // Check if word is valid
        if (!wordList.includes(guesses[currentRow].toLowerCase())) {
          displayTemporaryMessage("Not in word list");
          return;
        }

        // Check if word matches secret word
        if (guesses[currentRow].toUpperCase() === secretWord) {
          setGameOver(true);
          displayTemporaryMessage("Magnificent!");
          // Trigger celebration animation
          setShowCelebration(true);
          return;
        }

        // Move to next row only if we're not at the last row
        if (currentRow < 5) {
          setCurrentRow(currentRow + 1);
        } else {
          setGameOver(true);
          displayTemporaryMessage(`The word was: ${secretWord}`);
        }
      } else {
        // Display message if trying to submit word with less than 5 letters
        displayTemporaryMessage("Not enough letters");
      }
      return;
    }

    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];

      if (key === "Backspace") {
        // Handle backspace - remove last character
        newGuesses[currentRow] = newGuesses[currentRow].slice(0, -1);
      } else if (key.length === 1 && /^[A-Z]$/.test(key)) {
        // Handle letter key - add if we have room
        if (newGuesses[currentRow].length < 5) {
          newGuesses[currentRow] += key;
        }
      }

      return newGuesses;
    });
  };
  
  useEffect(() => {
    const handlePhysicalKeyPress = (event) => {
      let key = event.key;
      if (key.length === 1 && key.match(/^[a-z]$/)) {
        key = key.toUpperCase();
      }
      
      if (/^[A-Z]$/.test(key) || key === "Enter" || key === "Backspace") {
        handleKeyPress(key);
      }
    };

    window.addEventListener("keydown", handlePhysicalKeyPress);
    return () => window.removeEventListener("keydown", handlePhysicalKeyPress);
  }, [currentRow, gameOver, guesses]);

  return (
   <>
    <div 
      style={{
        // CHANGED: Enhanced background with gradient and animated particles
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* CHANGED: Added floating background particles */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: '1',
          pointerEvents: 'none',
        }}
      >
        {/* Floating particles */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '50%',
              width: `${40 + index * 15}px`,
              height: `${40 + index * 15}px`,
              left: `${5 + index * 15}%`,
              animation: `float ${8 + index * 0.5}s ease-in-out infinite`,
              animationDelay: `${index * 0.8}s`,
            }}
          />
        ))}
      </div>

      

      {showCelebration && <Celebration />}

      {/* CHANGED: Enhanced header with glassmorphism effect */}
      <div 
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          zIndex: '10',
        }}
      >
        <h1 
          style={{
            fontSize: '4rem',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            textTransform: 'uppercase',
            // CHANGED: Enhanced gradient text with glow animation
            background: 'linear-gradient(45deg, #4facfe, #00f2fe, #10b981)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% 200%',
            animation: 'titleGlow 3s ease-in-out infinite alternate',
            textShadow: '0 0 30px rgba(79, 172, 254, 0.5)',
            position: 'relative',
            zIndex: '10',
            // CHANGED: Added responsive font sizing
            '@media (max-width: 768px)': {
              fontSize: '2.5rem',
              padding: '1.5rem',
            }
          }}
        >
          Wordle
        </h1>
      </div>

      {/* CHANGED: Enhanced toast message with glassmorphism */}
      {showMessage && (
        <div 
          style={{
            position: 'fixed',
            top: '5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: '50',
            animation: 'slideDown 0.3s ease-out',
          }}
        >
          <div 
            style={{
              // CHANGED: Modern toast styling with glassmorphism
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(15px)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '50px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              fontWeight: '600',
              textAlign: 'center',
              fontSize: '0.95rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              minWidth: '200px',
              animation: 'popIn 0.4s ease-out',
            }}
          >
            {message}
          </div>
        </div>
      )}

      {/* CHANGED: Enhanced celebration container */}
      {showCelebration && (
        <div
          style={{
            position: 'relative',
            zIndex: '100',
          }}
        >
          <Celebration />
        </div>
      )}

      {/* CHANGED: Enhanced game content container */}
      <div
        style={{
          position: 'relative',
          zIndex: '10',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem 1rem',
          gap: '2rem',
        }}
      >
        {/* CHANGED: Enhanced Grid container */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(15px)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            animation: 'popIn 0.6s ease-out',
            animationDelay: '0.2s',
            animationFillMode: 'both',
          }}
        >
          <Grid 
            guesses={guesses} 
            secretWord={secretWord} 
            style={{
              // CHANGED: Additional styling can be passed to Grid component
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
            }}
          />
        </div>

        
          <Keyboard 
            onKeyPress={handleKeyPress}
            style={{
              // CHANGED: Additional styling can be passed to Keyboard component
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
            }}
          />
       

      {/* CHANGED: Added subtle overlay for better contrast */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.05)',
          zIndex: '0',
          pointerEvents: 'none',
        }}
      />
    </div>
    </div>
  </>
  );

  

}

// Add necessary CSS for balloon and confetti animations
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% {
      transform: translateY(100%) rotate(0deg);
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    100% {
      transform: translateY(-120vh) rotate(${Math.random() > 0.5 ? '+' : '-'}${5 + Math.random() * 15}deg);
      opacity: 0;
    }
  }
  
  @keyframes confetti {
    0% {
      transform: translateY(0) rotateX(0) rotateY(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) rotateX(${360 * Math.random()}deg) rotateY(${360 * Math.random()}deg);
      opacity: 0;
    }
  }
  
  @keyframes swingString {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(0) rotate(10deg);
    }
  }
  
  .animate-float {
    animation-name: float;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    animation-fill-mode: forwards;
  }
  
  .animate-confetti {
    animation-name: confetti;
    animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
    animation-fill-mode: forwards;
  }
`;
document.head.appendChild(style);

export default Home;


