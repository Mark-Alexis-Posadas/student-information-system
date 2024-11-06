import { OnSubmitEvent } from "./Events";

export interface ButtonTypes {
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  classNames: string;
  children?: React.ReactNode;
  handleButtonClick?: (e: OnSubmitEvent) => void;
}
