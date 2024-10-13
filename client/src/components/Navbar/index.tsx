import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { NavbarTypes } from "../../types/Navbar";
import { Link } from "react-router-dom";

const Navbar: React.FC<NavbarTypes> = ({
  isToggle,
  isToggleTheme,
  handleToggleSidebar,
  handleToggleTheme,
}) => {
  const [isToggleLogout, setIsToggleLogout] = useState(false);

  return (
    <nav className="bg-white dark:bg-black p-3 px-4 montserrat border-b border-slate-300 dark:border-gray-600">
      <ul className="flex items-center justify-between">
        <li className="flex items-center gap-4 dark:text-white">
          <button onClick={handleToggleSidebar}>
            <FontAwesomeIcon icon={isToggle ? faXmark : faBars} />
          </button>
          <h3 className="font-bold dark:text-white">
            Student information system - admin
          </h3>
        </li>
        <li className="flex items-center gap-3 dark:text-white">
          <img src="" alt="" />

          <span>Administrator admin</span>
          <button onClick={handleToggleTheme}>
            <FontAwesomeIcon icon={isToggleTheme ? faSun : faMoon} />
          </button>
          <button onClick={() => setIsToggleLogout(!isToggleLogout)}>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {isToggleLogout && (
            <ul>
              <li>
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
