import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-black shadow-lg">
      <img
        src="/wordle photo.png"
        alt="Wordle"
        className="h-16 w-auto  p-2.5 transition-transform transform hover:scale-200"
      />

      <div>
        <NavLink
          to=""
          className={() =>
            `px-4 py-2 text-white bg-blue-600 rounded-lg duration-300 ease-in-out hover:bg-blue-500 shadow-md transition-transform`
          }
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/signup"
          className={() =>
            `px-4 py-2 text-white bg-blue-600 rounded-lg  duration-300 ease-in-out hover:bg-blue-500 shadow-md transition-all`
          }
        >
          Sign Up
        </NavLink>
      </div>
    </header>
  );
}
