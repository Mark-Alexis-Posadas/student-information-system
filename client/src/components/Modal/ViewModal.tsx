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
    return null;
  }

  return (
    <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] transition-opacity duration-300 ease-in-out">
      <ul className="w-full max-w-[600px] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform">
        <button
          className="bg-red-600 text-white rounded-full p-2 ml-auto mb-4 w-10 h-10 flex items-center justify-center transition-transform transform hover:scale-105"
          onClick={() => setIsToggleView(false)}
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <li className="flex items-center gap-3 mb-4">
          <b className="text-md">Student Roll:</b>
          <span className="text-sm text-gray-700">{view.studentRoll}</span>
        </li>
        <li className="flex items-center gap-3 mb-4">
          <b className="text-md">First Name:</b>
          <span className="text-sm text-gray-700">{view.firstName}</span>
        </li>
        <li className="flex items-center gap-3 mb-4">
          <b className="text-md">Middle Name:</b>
          <span className="text-sm text-gray-700">{view.middleName}</span>
        </li>
        <li className="flex items-center gap-3 mb-4">
          <b className="text-md">Last Name:</b>
          <span className="text-sm text-gray-700">{view.lastName}</span>
        </li>
        <li className="flex items-center gap-3 mb-4">
          <b className="text-md">Gender:</b>
          <span className="text-sm text-gray-700">{view.gender}</span>
        </li>
        <li className="flex items-center gap-3 mb-4">
          <b className="text-md">Date of Birth:</b>
          <span className="text-sm text-gray-700">{view.dateOfBirth}</span>
        </li>
        <li className="flex items-center gap-3 mb-4">
          <b className="text-md">Contact:</b>
          <span className="text-sm text-gray-700">{view.contact}</span>
        </li>
        <li className="flex items-center gap-3 mb-4">
          <b className="text-md">Present Address:</b>
          <span className="text-sm text-gray-700">{view.presentAddress}</span>
        </li>
        <li className="flex items-center gap-3 mb-4">
          <b className="text-md">Permanent Address:</b>
          <span className="text-sm text-gray-700">{view.permanentAddress}</span>
        </li>
      </ul>
    </div>
  );
};
