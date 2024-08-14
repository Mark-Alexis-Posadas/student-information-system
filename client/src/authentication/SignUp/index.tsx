import React, { useState } from "react";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { handleFields, handleSubmit } from "../../reducers/signUpSlice";
import { SignUpFieldsTypes } from "../../types/authentication/sign-up";
import { Alert } from "../../components/Alert";

export const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const allValues = useAppSelector((state) => state.formFields.submittedValues);
  const formFields = useAppSelector((state) => state.formFields.formFields);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showError, setShowError] = useState<boolean>(false);

  const validateName = (name: string) => /^[A-Za-z\-'\s]+$/.test(name);

  const validatePassword = (password: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  };

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};
    setShowError(false);

    if (
      !validateName(formFields.firstName) ||
      formFields.firstName.length < 1
    ) {
      newErrors.firstName =
        "First name is required and should only contain letters, hyphens, or apostrophes.";
    }

    if (
      formFields.middleName &&
      (!validateName(formFields.middleName) || formFields.middleName.length < 1)
    ) {
      newErrors.middleName =
        "Middle name should only contain letters, hyphens, or apostrophes.";
    }

    if (!validateName(formFields.lastName) || formFields.lastName.length < 1) {
      newErrors.lastName =
        "Last name is required and should only contain letters, hyphens, or apostrophes.";
    }

    if (!/\S+@\S+\.\S+/.test(formFields.email)) {
      newErrors.email = "A valid email address is required.";
    }

    if (!validatePassword(formFields.password)) {
      newErrors.password =
        "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, and one number.";
    }

    if (formFields.password !== formFields.confirmPassword) {
      newErrors.confirmPassword = "Passwords must match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowError(true);
      return false;
    }

    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch(
      handleFields({ fieldName: name as keyof SignUpFieldsTypes, value })
    );
  };

  const handleSubmitValues = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFields()) {
      dispatch(handleSubmit());
    }
  };

  return (
    <div className="p-5 rounded shadow-custom-shadow">
      {showError && (
        <div className="mb-4">
          {Object.values(errors).map((error, index) => (
            <Alert key={index} text={error} classNames="text-red-800" />
          ))}
        </div>
      )}

      <PageTitle text="Create your account" />
      {allValues.map((val) => (
        <div key={val.email}>
          <h1>{val.firstName}</h1>
          <h1>{val.middleName}</h1>
          <h1>{val.lastName}</h1>
          <h1>{val.email}</h1>
          <h1>{val.gender}</h1>
          <h1>{val.password}</h1>
          <h1>{val.confirmPassword}</h1>
        </div>
      ))}

      <form onSubmit={handleSubmitValues}>
        <div className="flex flex-col mb-3">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleChange}
            value={formFields.firstName}
            name="firstName"
            type="text"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="First name"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="middleName">Middle Name</label>
          <input
            onChange={handleChange}
            value={formFields.middleName}
            name="middleName"
            type="text"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="Middle name"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleChange}
            value={formFields.lastName}
            name="lastName"
            type="text"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="Last name"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={formFields.email}
            name="email"
            type="email"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="gender">Gender</label>
          <select
            onChange={handleChange}
            value={formFields.gender}
            name="gender"
            id="gender"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="password">Password</label>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={handleChange}
            value={formFields.confirmPassword}
            name="confirmPassword"
            type="password"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="Confirm Password"
          />
        </div>
        <Button classNames="text-white rounded bg-blue-500 p-2">Submit</Button>
      </form>
    </div>
  );
};
