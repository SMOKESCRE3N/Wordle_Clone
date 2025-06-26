// import React from "react";
// import { Link, NavLink } from "react-router-dom";

// function Intro() {
//   return (
//     <div
//       className="bg-gray-900 text-white flex flex-col items-center h-screen"
//       style={{
//         overflow: "hidden",
//         maxHeight: "87vh",
//       }}
//     >
//       <img
//         src="wordle photo.jpg"
//         alt="Wordle"
//         className="mt-12 h-75 w-auto p-1 mx-auto"
//       />
//       <h1 className="text-3xl font-extrabold mt-4">Wordle</h1>
//       <h2 className="text-xl font-bold mt-2">Get 6 chances to</h2>
//       <h2 className="text-xl font-bold">guess a 5 letter word.</h2>
//       <div className="mt-6">
//         <NavLink
//           to="/play"
//           className={() =>
//             `px-4 py-3 font-bold text-white bg-blue-600 rounded-lg duration-300 ease-in-out hover:bg-blue-500 shadow-md transition-transform block`
//           }
//         >
//           Play
//         </NavLink>
//       </div>
//     </div>
//   );
// }

// export default Intro;

import React from "react";
import { Link, NavLink } from "react-router-dom";

function Intro() {
  return (
    <div
      style={{
        // CHANGED: Enhanced background with gradient and animated particles effect
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '87vh',
        maxHeight: '87vh',
        overflow: 'hidden',
        position: 'relative',
        // CHANGED: Added background animation keyframes via CSS variables
        '--particle-1': '10%',
        '--particle-2': '20%',
        '--particle-3': '30%',
        '--particle-4': '70%',
        '--particle-5': '80%',
      }}
      className="text-white flex flex-col items-center h-screen"
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
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              width: `${60 + index * 20}px`,
              height: `${60 + index * 20}px`,
              left: `${10 + index * 15}%`,
              animation: `float ${6 + index}s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* CHANGED: Added CSS keyframes for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-100px) rotate(180deg); 
            opacity: 0.8; 
          }
        }
        
        @keyframes titleGlow {
          from {
            filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.5));
          }
          to {
            filter: drop-shadow(0 0 30px rgba(255, 215, 0, 0.8));
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* CHANGED: Enhanced image container with glassmorphism */}
      <div
        style={{
          // CHANGED: Added glass container around image
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '20px',
          marginTop: '3rem',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          zIndex: '10',
          position: 'relative',
          animation: 'slideUp 0.8s ease-out',
        }}
      >
        <img
          src="wordle photo.jpg"
          alt="Wordle"
          style={{
            // CHANGED: Enhanced image styling
            height: '300px',
            width: 'auto',
            borderRadius: '15px',
            transition: 'all 0.3s ease',
            filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))',
          }}
          onMouseEnter={(e) => {
            // CHANGED: Added hover effects for image
            e.target.style.transform = 'scale(1.05)';
            e.target.style.filter = 'drop-shadow(0 12px 24px rgba(0, 0, 0, 0.3))';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.filter = 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))';
          }}
        />
      </div>

      {/* CHANGED: Enhanced title with glow effect */}
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: '700',
          marginTop: '2rem',
          // CHANGED: Added gradient text and glow animation
          background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
          animation: 'titleGlow 2s ease-in-out infinite alternate',
          zIndex: '10',
          position: 'relative',
        }}
      >
        Wordle
      </h1>

      {/* CHANGED: Enhanced subtitle styling */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '1rem',
          zIndex: '10',
          position: 'relative',
        }}
      >
        <h2
          style={{
            fontSize: '1.4rem',
            fontWeight: '300',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.6',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          Get 6 chances to
        </h2>
        <h2
          style={{
            fontSize: '1.4rem',
            fontWeight: '300',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.6',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          guess a 5 letter word.
        </h2>
      </div>

      {/* CHANGED: Enhanced Play button with modern effects */}
      <div 
        style={{
          marginTop: '2.5rem',
          zIndex: '10',
          position: 'relative',
        }}
      >
        <NavLink
          to="/play"
          style={{
            // CHANGED: Modern gradient button styling
            background: 'linear-gradient(45deg, #ff6b6b, #ffa500)',
            color: 'white',
            fontSize: '1.2rem',
            padding: '18px 50px',
            borderRadius: '50px',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 8px 25px rgba(255, 107, 107, 0.4)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            userSelect: 'none',
            border: 'none',
          }}
          onMouseEnter={(e) => {
            // CHANGED: Enhanced hover animations
            e.target.style.transform = 'translateY(-3px) scale(1.05)';
            e.target.style.boxShadow = '0 15px 35px rgba(255, 107, 107, 0.6)';
            
            // CHANGED: Added shimmer effect
            const shimmer = document.createElement('div');
            shimmer.style.cssText = `
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
              transition: left 0.5s;
              pointer-events: none;
              z-index: 1;
            `;
            e.target.appendChild(shimmer);
            setTimeout(() => {
              shimmer.style.left = '100%';
              setTimeout(() => shimmer.remove(), 500);
            }, 50);
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
          }}
          onClick={(e) => {
            // CHANGED: Added click animation
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
              e.target.style.transform = '';
            }, 150);
          }}
        >
          Play Now
        </NavLink>
      </div>
    </div>
  );
}

export default Intro;