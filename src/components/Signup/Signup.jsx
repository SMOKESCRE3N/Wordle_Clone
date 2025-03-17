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
  return (
    <>
      <div
        className="bg-gray-900 h-screen"
        style={{
          overflow: "hidden",
          maxHeight: "89vh",
        }}
      >
        <h2 className="bg-yellow-300 flex items-center justify-center">
          Sign Up
        </h2>

        <div className="flex flex-col items-center justify-center p-12 gap-4 ">
          <input
            type="text"
            className="border-2 border-gray-400 rounded-md text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder=" username"
          />
          <input
            type="number"
            className="border-2 border-gray-400 rounded-md text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" password"
          />
          <button
            className="bg-gray-700 text-white p-3 rounded-md hover:bg-gray-400 active:scale-95 transition-all"
            onClick={handleSubmit}
          >
            Submit
          </button>
          {submitted ? (
            <>
              <h2 className="text-xl  text-white font-semibold">
                Welcome {username}
              </h2>
              <NavLink
                to="/play"
                className={() =>
                  `px-4 py-2 text-white bg-blue-600 rounded-lg duration-300 p-16 ease-in-out hover:bg-blue-500 shadow-md transition-transform`
                }
              >
                Play
              </NavLink>
            </>
          ) : (
            <h3 className="text-xl"></h3>
          )}
        </div>
      </div>
    </>
  );
}
