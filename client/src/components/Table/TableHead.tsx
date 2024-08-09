import React from "react";

interface TableHeadType {
  item: any;
}
export const TableHead: React.FC<TableHeadType> = ({ item }) => {
  return <th className="px-6 py-3">{item.text}</th>;
};
