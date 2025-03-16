import React from "react";
import { Link, NavLink } from "react-router-dom";

function Intro() {
  return (
    <div
      className="bg-gray-900 text-white flex flex-col items-center h-screen"
      style={{
        overflow: "hidden",
        maxHeight: "89vh",
      }}
    >
      <img
        src="/wordle1.jpg"
        alt="Wordle"
        className="h-60 w-auto p-3 mx-auto"
      />
      <h1 className="text-xl font-extrabold mt-4">Wordle</h1>
      <h2 className="font-bold mt-2">Get 6 chances to</h2>
      <h2 className="font-bold">guess a 5 letter word.</h2>
      <div className="mt-6">
        <NavLink
          to="/play"
          className={() =>
            `px-4 py-2 text-white bg-blue-600 rounded-lg duration-300 ease-in-out hover:bg-blue-500 shadow-md transition-transform block`
          }
        >
          Play
        </NavLink>
      </div>
    </div>
  );
}

export default Intro;
