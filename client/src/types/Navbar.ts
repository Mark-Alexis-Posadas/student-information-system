import { Dispatch } from "redux";
import { InitialStateTypes } from "./InitialState";
export interface NavbarTypes {
  isToggle: InitialStateTypes["isToggle"];
  dispatch: Dispatch<any>;
  setIsToggle: () => void;
}
