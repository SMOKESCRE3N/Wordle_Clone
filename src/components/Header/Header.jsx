// import React from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="flex items-center justify-between p-2 bg-gray-900 shadow-lg">
//       <img
//         src="wordle1.png"
//         alt="Wordle"
//         className="h-20 w-auto ml-2 mt-1 p-1 transition-transform  hover:scale-150"
//       />

//       <div className="flex gap-4 w-64">
//       <div >
//         <NavLink
//           to=""
//           className=
//             "flex-1 px-4 py-3 font-bold text-white bg-blue-600 rounded-lg duration-300 ease-in-out hover:bg-blue-500 transition-transform transform hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
          
//         >
//           Home
//         </NavLink>
//       </div>
//       <div>
//         <NavLink
//           to="/signup"
//           className=
//             "flex-1 px-4 py-3 font-bold text-white bg-blue-600 rounded-lg duration-300 ease-in-out hover:bg-blue-500 transition-transform transform hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
          
//         >
//           Sign Up
//         </NavLink>
//       </div>
//       </div>
//     </header>
//   );
// }
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header 
      style={{
        // CHANGED: Enhanced header styling with gradient background and glassmorphism
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
      className="flex items-center justify-between p-4"
    >
      {/* CHANGED: Enhanced logo section with container styling */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <img
          src="wordle1.png"
          alt="Wordle"
          style={{
            height: '80px',
            width: 'auto',
            // CHANGED: Enhanced logo hover effects with glow
            transition: 'all 0.3s ease',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
          }}
          className="ml-2 mt-1 p-1"
          onMouseEnter={(e) => {
            // CHANGED: Added dynamic hover effects
            e.target.style.transform = 'scale(1.5)';
            e.target.style.filter = 'drop-shadow(0 8px 16px rgba(255, 215, 0, 0.4))';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))';
          }}
        />
        {/* CHANGED: Added Wordle text next to logo
        <span
          style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'white',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          Wordle
        </span> */}
      </div>

      {/* CHANGED: Enhanced navigation section */}
      <nav 
        style={{
          display: 'flex',
          gap: '16px',
        }}
      >
        {/* CHANGED: Enhanced Home button with gradient and glassmorphism */}
        <NavLink
          to=""
          style={{
            // CHANGED: Modern button styling with gradients and glass effects
            background: 'linear-gradient(45deg, rgba(79, 172, 254, 0.9), rgba(0, 242, 254, 0.9))',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '50px',
            fontWeight: '600',
            textDecoration: 'none',
            border: 'none',
            boxShadow: '0 4px 15px rgba(79, 172, 254, 0.4)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
            // CHANGED: Prevent text selection for better UX
            userSelect: 'none',
          }}
          onMouseEnter={(e) => {
            // CHANGED: Enhanced hover animations
            e.target.style.transform = 'translateY(-2px) scale(1.05)';
            e.target.style.boxShadow = '0 8px 25px rgba(79, 172, 254, 0.6)';
            
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
            `;
            e.target.appendChild(shimmer);
            setTimeout(() => {
              shimmer.style.left = '100%';
              setTimeout(() => shimmer.remove(), 500);
            }, 50);
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 4px 15px rgba(79, 172, 254, 0.4)';
          }}
        >
          Home
        </NavLink>

        {/* CHANGED: Enhanced Sign Up button with different gradient */}
        <NavLink
          to="/signup"
          style={{
            // CHANGED: Different gradient for visual distinction
            background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.9), rgba(255, 165, 0, 0.9))',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '50px',
            fontWeight: '600',
            textDecoration: 'none',
            border: 'none',
            boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
            userSelect: 'none',
          }}
          onMouseEnter={(e) => {
            // CHANGED: Consistent hover effects with different colors
            e.target.style.transform = 'translateY(-2px) scale(1.05)';
            e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.6)';
            
            // CHANGED: Shimmer effect for Sign Up button
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
            `;
            e.target.appendChild(shimmer);
            setTimeout(() => {
              shimmer.style.left = '100%';
              setTimeout(() => shimmer.remove(), 500);
            }, 50);
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.4)';
          }}
        >
          Sign Up
        </NavLink>
      </nav>
    </header>
  );
}
