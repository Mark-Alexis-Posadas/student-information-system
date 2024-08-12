import React from "react";
interface PageTitleType {
  text: string;
}
export const PageTitle: React.FC<PageTitleType> = ({ text }) => {
  return <h1 className="text-xl mb-5 font-bold">{text}</h1>;
};
