import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface ToggleDelete {
  handleCancelDelete: () => void;
  handleProceedDelete: () => void;
  deleteId: string | null;
}
export const ConfirmationDelete: FC<ToggleDelete> = ({
  handleCancelDelete,
  handleProceedDelete,
}) => {
  return (
    <div className="flex items-center justify-center fixed w-full top-0 left-0 min-h-screen bg-[rgba(0,0,0,0.4)]">
      <div className="bg-white rounded dark:bg-gray-700 p-5 w-[600px] text-center">
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="text-red-600 text-8xl"
        />
        <h1 className="mt-10 text-xl font-bold text-black dark:text-white">
          Are you sure to delete this item?
        </h1>
        <p className="my-5 text-black dark:text-white">
          You won't be able to revert this!
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            className="text-white p-2 rounded bg-red-500"
            onClick={handleCancelDelete}
          >
            cancel
          </button>
          <button
            className="text-white p-2 rounded bg-blue-500"
            onClick={handleProceedDelete}
          >
            proceed
          </button>
        </div>
      </div>
    </div>
  );
};
