import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  setIsToggleSidebar,
  setIsToggleTheme,
} from "../../reducers/toggleSlice";

const Navbar: React.FC = () => {
  const isToggleTheme = useAppSelector((state) => state.toggle.isToggleTheme);
  const isToggleSidebar = useAppSelector(
    (state) => state.toggle.isToggleSidebar
  );
  const dispatch = useAppDispatch();

  const handleToggleSidebar = () => {
    dispatch(setIsToggleSidebar());
  };
  const handleToggleTheme = () => {
    dispatch(setIsToggleTheme());
  };

  return (
    <nav className="bg-white p-3 px-4 montserrat border-b border-slate-300">
      <ul className="flex items-center justify-between">
        <li className="flex items-center gap-4">
          <button onClick={handleToggleSidebar}>
            <FontAwesomeIcon icon={isToggleSidebar ? faXmark : faBars} />
          </button>
          <h3 className="font-bold">Student information system - admin</h3>
        </li>
        <li className="flex items-center gap-3">
          <img src="" alt="" />

          <span>Administrator admin</span>
          <button onClick={handleToggleTheme}>
            <FontAwesomeIcon icon={isToggleTheme ? faSun : faMoon} />
          </button>
          <FontAwesomeIcon icon={faCaretDown} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
