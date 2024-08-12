import React from "react";

export const TableRow: React.FC = () => {
  return (
    <tr className="odd:bg-white even:bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">Silver</td>
    </tr>
  );
};
