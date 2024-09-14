export interface ButtonTypes {
  type: "submit" | "reset" | "button" | undefined;
  text?: string;
  classNames: string;
  children?: React.ReactNode;
}
