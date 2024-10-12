import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import {
  ChangeEvent,
  FormEvent,
  TextAreaEvent,
  SelectEvent,
} from "../../types/Events";
import { FormValues } from "../../types/pages/add-student";

interface Type {
  setStudentDetailsModal: (close: boolean) => void;
  isEditing: boolean;
  setIsEditing: (close: boolean) => void;
  handleFormSubmit: (arg0: FormEvent) => void;
  handleInputChange: (arg0: ChangeEvent | TextAreaEvent | SelectEvent) => void;

  formValues: FormValues;
  setDeleteId: (arg0: null) => void;
}
export const AddStudent: React.FC<Type> = ({
  setStudentDetailsModal,
  isEditing,
  setIsEditing,
  handleFormSubmit,
  handleInputChange,
  formValues,
  setDeleteId,
}) => {
  return (
    <div className="w-full h-full overflow-hidden fixed top-0 left-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="p-5 shadow-custom-shadow rounded bg-white dark:bg-[#1f1f1f] w-[900px]">
        <PageTitle
          text={isEditing ? "Edit Student Details" : "Student Details"}
        />
        <form className="flex flex-wrap gap-3" onSubmit={handleFormSubmit}>
          <div className="flex flex-col w-[calc(50%-0.75rem)]">
            <label className="capitalize text-sm">Studet Roll</label>
            <input
              autoComplete="on"
              onChange={handleInputChange}
              value={formValues.studentRoll}
              type="text"
              name="studentRoll"
              id="student_roll"
              placeholder="student roll"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          <div className="flex flex-col w-[calc(50%-0.75rem)]">
            <label className="capitalize text-sm">Email</label>
            <input
              onChange={handleInputChange}
              value={formValues.email}
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>

          <div className="flex flex-col w-[calc(50%-0.75rem)]">
            <label className="capitalize text-sm">First name</label>
            <input
              onChange={handleInputChange}
              value={formValues.firstName}
              type="text"
              name="firstName"
              id="first_name"
              placeholder="first name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>
          <div className="flex flex-col w-[calc(50%-0.75rem)]">
            <label className="capitalize text-sm">Middle name</label>
            <input
              onChange={handleInputChange}
              value={formValues.middleName}
              type="text"
              name="middleName"
              id="middle_name"
              placeholder="middle name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>
          <div className="flex flex-col w-[calc(50%-0.75rem)]">
            <label className="capitalize text-sm">Last name</label>
            <input
              onChange={handleInputChange}
              value={formValues.lastName}
              type="text"
              name="lastName"
              id="last_name"
              placeholder="last name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>
          <div className="flex flex-col w-[calc(50%-0.75rem)]">
            <label className="capitalize text-sm">Gender</label>
            <select
              value={formValues.gender}
              name="gender"
              id="gender"
              onChange={handleInputChange}
              className="border border-slate-300 p-2 rounded dark:bg-gray-700 dark:border-none"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex flex-col w-[calc(50%-0.75rem)]">
            <label className="capitalize text-sm">Date of Birth</label>
            <input
              onChange={handleInputChange}
              value={formValues.dateOfBirth}
              type="date"
              name="dateOfBirth"
              id="date_of_birth"
              placeholder="date of birth"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>
          <div className="flex flex-col w-[calc(50%-0.75rem)]">
            <label className="capitalize text-sm">Contact</label>
            <input
              onChange={handleInputChange}
              value={formValues.contact}
              type="tel"
              name="contact"
              id="contact"
              placeholder="contact"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </div>
          <div className="flex flex-col w-[calc(50%-0.75rem)]">
            <label className="capitalize text-sm">Present address</label>
            <textarea
              onChange={handleInputChange}
              value={formValues.presentAddress}
              name="presentAddress"
              id="present_address"
              placeholder="present address"
              className="border border-slate-300 rounded p-2 dark:bg-gray-700 dark:border-none"
            ></textarea>
          </div>
          <div className="flex flex-col w-[calc(50%-0.75rem)]">
            <label className="capitalize text-sm">Permanent address</label>
            <textarea
              onChange={handleInputChange}
              value={formValues.permanentAddress}
              name="permanentAddress"
              id="permanent_address"
              placeholder="permanent address"
              className="border border-slate-300 rounded p-2 dark:bg-gray-700 dark:border-none"
            ></textarea>
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="submit"
              classNames="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition duration-200"
            >
              {isEditing ? "Update Student" : "Add Student"}
            </Button>
            <Button
              type="button"
              classNames="text-white bg-gray-300 rounded p-2"
              handleButtonClick={() => {
                setStudentDetailsModal(false), setIsEditing(false);
                setDeleteId(null);
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
