import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Student } from "../../types/pages/student-list";

interface ViewTypes {
  view: Student | null;
  setIsToggleView: (open: boolean) => void;
}
export const ViewModal: FC<ViewTypes> = ({ view, setIsToggleView }) => {
  if (!view) {
    return null; // or handle loading/error state if necessary
  }

  return (
    <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <ul className="w-[900px] bg-white p-5 rounded flex flex-col">
        <button
          className="bg-red-600 text-white rounded-full p-2 ml-auto w-10 h-10 flex items-center justify-center"
          onClick={() => setIsToggleView(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <li className="flex items-center gap-2 mb-3">
          <b className="text-sm">Student roll</b>:
          <span className="text-sm text-gray-500">{view.studentRoll}</span>
        </li>
        <li className="flex items-center gap-2 mb-3">
          <b className="text-sm">First name</b>:
          <span className="text-sm text-gray-500">{view.firstName}</span>
        </li>
        <li className="flex items-center gap-2 mb-3">
          <b className="text-sm">Middle name</b>:
          <span className="text-sm text-gray-500">{view.middleName}</span>
        </li>
        <li className="flex items-center gap-2 mb-3">
          <b className="text-sm">Last name</b>:
          <span className="text-sm text-gray-500">{view.lastName}</span>
        </li>
        <li className="flex items-center gap-2 mb-3">
          <b className="text-sm">Gender</b>:
          <span className="text-sm text-gray-500">{view.gender}</span>
        </li>
        <li className="flex items-center gap-2 mb-3">
          <b className="text-sm">Date of Birth</b>:
          <span className="text-sm text-gray-500">{view.dateOfBirth}</span>
        </li>
        <li className="flex items-center gap-2 mb-3">
          <b className="text-sm">Contact</b>:
          <span className="text-sm text-gray-500">{view.contact}</span>
        </li>
        <li className="flex items-center gap-2 mb-3">
          <b className="text-sm">Present address</b>:
          <span className="text-sm text-gray-500">{view.presentAddress}</span>
        </li>
        <li className="flex items-center gap-2 mb-3">
          <b className="text-sm">Permanent address</b>:
          <span className="text-sm text-gray-500">{view.permanentAddress}</span>
        </li>
      </ul>
    </div>
  );
};
