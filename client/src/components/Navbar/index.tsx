import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setIsToggle } from "../../reducers/toggleSlice";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <nav className="bg-white p-3 px-4 montserrat border-b border-slate-300">
      <ul className="flex items-center justify-between">
        <li className="flex items-center gap-4">
          <button onClick={() => dispatch(setIsToggle())}>
            <FontAwesomeIcon icon={faBars} />
          </button>
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
