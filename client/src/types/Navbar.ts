import { InitialStateTypes } from "./InitialState";
export interface NavbarTypes {
  isToggle: InitialStateTypes["isToggleSidebar"];
  isToggleTheme: InitialStateTypes["isToggleTheme"];
  handleToggleSidebar: () => void;
  handleToggleTheme: () => void;
}
