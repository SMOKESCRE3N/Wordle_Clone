import React, { useState } from "react";
import { NavLink } from "react-router";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents the form from refreshing or redirecting the page upon submission.
    if (username.trim() !== "" && password.trim() !== "") {
      setSubmitted(true);
    }
  };
  // return (
  //   <>
  //     <div
  //       className="bg-gray-900 h-screen"
  //       style={{
  //         overflow: "hidden",
  //         maxHeight: "87vh",
  //       }}
  //     >
  //       <h1 className="bg-yellow-500 text-xl font-bold flex items-center justify-center h-12">
  //         Welcome back!
  //       </h1>

  //       <div className="flex flex-col items-center justify-center p-12 gap-4 ">
  //         <input
  //           type="text"
  //           className="border-2 border-gray-400 rounded-md text-white"
  //           value={username}
  //           onChange={(e) => setUsername(e.target.value)}
  //           placeholder=" username"
  //         />
  //         <input
  //           type="number"
  //           className="border-2 border-gray-400 rounded-md text-white"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           placeholder=" password"
  //         />
  //         <button
  //           className="bg-gray-700 text-white p-3 rounded-md hover:bg-gray-400 active:scale-95 transition-all"
  //           onClick={handleSubmit}
  //         >
  //           Submit
  //         </button>
  //         {submitted ? (
  //           <>
  //             <h2 className="text-xl  text-white font-semibold">
  //               Welcome {username}
  //             </h2>
  //             <NavLink
  //               to="/play"
  //               className={() =>
  //                 `px-4 py-2 text-white bg-blue-600 rounded-lg duration-300 p-16 ease-in-out hover:bg-blue-500 shadow-md transition-transform`
  //               }
  //             >
  //               Play
  //             </NavLink>
  //           </>
  //         ) : (
  //           <h3 className="text-xl"></h3>
  //         )}
  //       </div>
  //     </div>
  //   </>
  // );

  return (
  <>
    <div 
      style={{
        // Enhanced background with gradient and animated particles
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Floating background particles */}
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

      {/* CSS keyframes for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-80px) rotate(180deg); 
            opacity: 0.6; 
          }
        }
        
        @keyframes titleGlow {
          from {
            filter: drop-shadow(0 0 20px rgba(79, 172, 254, 0.5));
          }
          to {
            filter: drop-shadow(0 0 30px rgba(79, 172, 254, 0.8));
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes popIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Enhanced header with glassmorphism effect */}
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
            fontSize: '2rem',
            padding: '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            // Enhanced gradient text with glow animation
            background: 'linear-gradient(45deg, #4facfe, #00f2fe, #10b981)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% 200%',
            animation: 'titleGlow 3s ease-in-out infinite alternate',
            textShadow: '0 0 30px rgba(79, 172, 254, 0.5)',
            position: 'relative',
            zIndex: '10',
          }}
        >
          Welcome back!
        </h1>
      </div>

      {/* Main content container */}
      <div
        style={{
          position: 'relative',
          zIndex: '10',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 1rem',
          minHeight: 'calc(100vh - 5rem)',
        }}
      >
        {/* Enhanced login form container */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(15px)',
            borderRadius: '20px',
            padding: '3rem 2.5rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            animation: 'popIn 0.6s ease-out',
            animationDelay: '0.2s',
            animationFillMode: 'both',
            width: '100%',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {/* Username input */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            onFocus={(e) => {
              e.target.style.border = '1px solid rgba(79, 172, 254, 0.5)';
              e.target.style.boxShadow = '0 0 20px rgba(79, 172, 254, 0.3)';
            }}
            onBlur={(e) => {
              e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          />

          {/* Password input */}
          <input
            type="number"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            onFocus={(e) => {
              e.target.style.border = '1px solid rgba(79, 172, 254, 0.5)';
              e.target.style.boxShadow = '0 0 20px rgba(79, 172, 254, 0.3)';
            }}
            onBlur={(e) => {
              e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          />

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            style={{
              background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
              border: 'none',
              borderRadius: '12px',
              padding: '1rem 2rem',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 16px rgba(79, 172, 254, 0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 12px 24px rgba(79, 172, 254, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 16px rgba(79, 172, 254, 0.3)';
            }}
            onMouseDown={(e) => {
              e.target.style.transform = 'scale(0.98)';
            }}
            onMouseUp={(e) => {
              e.target.style.transform = 'translateY(-2px)';
            }}
          >
            Submit
          </button>

          {/* Success message and play button */}
          {submitted && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                animation: 'fadeIn 0.5s ease-out',
                marginTop: '1rem',
              }}
            >
              <h2
                style={{
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: '600',
                  textAlign: 'center',
                  background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Welcome {username}!
              </h2>

              <NavLink
                to="/play"
                style={{
                  background: 'linear-gradient(45deg, #10b981, #34d399)',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '1rem 2.5rem',
                  color: 'white',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 16px rgba(16, 185, 129, 0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 24px rgba(16, 185, 129, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 16px rgba(16, 185, 129, 0.3)';
                }}
              >
                Play
              </NavLink>
            </div>
          )}
        </div>
      </div>

      {/* Subtle overlay for better contrast */}
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
  </>
);
}

