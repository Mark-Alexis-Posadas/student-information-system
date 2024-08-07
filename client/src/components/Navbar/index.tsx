import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faMoon,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setIsToggle } from "../../reducers/toggleSlice";
import { IsToggleType } from "../../types/states/isToggle";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const isToggle = useSelector((state: IsToggleType) => state.toggle.isToggle);

  return (
    <nav className="bg-white p-3 px-4 montserrat border-b border-slate-300">
      <ul className="flex items-center justify-between">
        <li className="flex items-center gap-4">
          <button onClick={() => dispatch(setIsToggle())}>
            <FontAwesomeIcon icon={isToggle ? faXmark : faBars} />
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
