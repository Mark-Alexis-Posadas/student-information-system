import { Dispatch } from "redux";
import { SidebarTypes } from "./Sidebar";
export interface NavbarTypes {
  isToggle: SidebarTypes["isToggle"];
  dispatch: Dispatch<any>;
}
