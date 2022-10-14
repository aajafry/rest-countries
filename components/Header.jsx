import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export default function Header({ theme, setTheme }) {
  return (
    <div className="flex flex-col md:flex-row justify-between py-8 px-12 shadow-lg bg-slate-200 text-slate-800 dark:bg-slate-600  dark:text-white ">
      <h2 className=" text-2xl">Where in the world ?</h2>
      <span className=" flex items-center mt-4 md:mt-0">
        {theme === "light" ? (
          <FontAwesomeIcon
            className="w-4 mr-4"
            icon={faMoon}
            onClick={() => setTheme("dark")}
          />
        ) : (
          <FontAwesomeIcon
            className="w-4 mr-4"
            icon={faSun}
            onClick={() => setTheme("light")}
          />
        )}
      </span>
    </div>
  );
}
