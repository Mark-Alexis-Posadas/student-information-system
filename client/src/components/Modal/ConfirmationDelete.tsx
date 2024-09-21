import { FC } from "react";
interface ToggleDelete {
  setIsToggleDelete: (close: boolean) => void;
}
export const ConfirmationDelete: FC<ToggleDelete> = ({ setIsToggleDelete }) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="w-[900px] bg-white p-5 rounded flex flex-col">
        <h1>are you sure to delete this item?</h1>
        <div className="flex items-center gap-3">
          <button
            className="text-white p-2 rounded bg-red-500"
            onClick={() => setIsToggleDelete(false)}
          >
            cancel
          </button>
          <button className="text-white p-2 rounded bg-blue-500">
            proceed
          </button>
        </div>
      </div>
    </div>
  );
};
