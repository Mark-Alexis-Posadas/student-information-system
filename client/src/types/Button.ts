import { OnSubmitEvent } from "./Events";

export interface ButtonTypes {
  type: "submit" | "reset" | "button" | undefined;
  text?: string;
  classNames: string;
  children?: React.ReactNode;
  handleButtonClick?: (e: OnSubmitEvent) => void;
}
