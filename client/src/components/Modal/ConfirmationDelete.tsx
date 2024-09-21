import { FC } from "react";
interface ToggleDelete {
  handleCancelDelete: () => void;
  handleProceedDelete: () => void;
  deleteId: string | null;
}
export const ConfirmationDelete: FC<ToggleDelete> = ({
  handleCancelDelete,
  handleProceedDelete,
  deleteId,
}) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="w-[900px] bg-white p-5 rounded flex flex-col">
        <h1>are you sure to delete this item?</h1>
        <div className="flex items-center gap-3">
          <button
            className="text-white p-2 rounded bg-red-500"
            onClick={handleCancelDelete}
          >
            cancel
          </button>
          <button
            className="text-white p-2 rounded bg-blue-500"
            onClick={() => handleProceedDelete(deleteId)}
          >
            proceed
          </button>
        </div>
      </div>
    </div>
  );
};
