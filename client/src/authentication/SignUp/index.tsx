import React from "react";

import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { handleFields, handleSubmit } from "../../reducers/signUpSlice";

export const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const allValues = useAppSelector((state) => state.formFields.submittedValues);
  const formFields = useAppSelector((state) => state.formFields.formFields);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch(handleFields({ fieldName: name, value }));
  };

  const handleSubmitValues = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(handleSubmit());
  };

  return (
    <div className="p-5 rounded shadow-custom-shadow">
      <PageTitle text="Create your account" />
      {allValues.map((val) => (
        <>
          <h1>{val.firstName}</h1>
          <h1>{val.middleName}</h1>
          <h1>{val.lastName}</h1>
          <h1>{val.email}</h1>
          <h1>{val.gender}</h1>
          <h1>{val.password}</h1>
          <h1>{val.confirmPassword}</h1>
        </>
      ))}

      <form onSubmit={handleSubmitValues}>
        <div className="flex flex-col mb-3">
          <label htmlFor="">First Name</label>
          <input
            onChange={handleChange}
            value={formFields.firstName}
            name="firstName"
            type="text"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="first name"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="">Middle Name</label>
          <input
            onChange={handleChange}
            value={formFields.middleName}
            name="middleName"
            type="text"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="middle name"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="">Last Name</label>
          <input
            onChange={handleChange}
            value={formFields.lastName}
            name="lastName"
            type="text"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="last name"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="">Email</label>
          <input
            onChange={handleChange}
            value={formFields.email}
            name="email"
            type="email"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="email"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="">Gender</label>
          <select
            onChange={handleChange}
            value={formFields.gender}
            name="gender"
            id=""
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="">Password</label>
          <input
            onChange={handleChange}
            value={formFields.password}
            name="password"
            type="password"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="">Confirm Password</label>
          <input
            onChange={handleChange}
            value={formFields.confirmPassword}
            name="confirmPassword"
            type="password"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="Confirm Password"
          />
        </div>
        <Button classNames="text-white rounded bg-blue-500 p-2">submit</Button>
      </form>
    </div>
  );
};
