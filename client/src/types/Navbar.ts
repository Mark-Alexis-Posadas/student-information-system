import { InitialStateTypes } from "./InitialState";
export interface NavbarTypes {
  isToggle: InitialStateTypes["isToggle"];
  handleToggleTheme: () => void;
  handleToggleSidebar: () => void;
}
