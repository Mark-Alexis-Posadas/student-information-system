import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faMoon } from "@fortawesome/free-solid-svg-icons";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-3 px-4 montserrat">
      <ul className="flex items-center justify-between">
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faBars} />
          <h3 className="font-bold">Student information system - admin</h3>
        </li>
        <li className="flex items-center gap-3">
          <img src="" alt="" />

          <span>Administrator admin</span>
          <FontAwesomeIcon icon={faMoon} />
          <FontAwesomeIcon icon={faCaretDown} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
