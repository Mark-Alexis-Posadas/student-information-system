import React, { useState } from "react";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import { ChangeEvent, SelectEvent } from "../../types/Events";
import { SignUpFieldsTypes } from "../../types/authentication/sign-up";

const initialFormValues: SignUpFieldsTypes = {
  name: "",
  email: "",
  gender: "",
  password: "",
};
export const SignUp: React.FC = () => {
  const [formValues, setFormValues] =
    useState<SignUpFieldsTypes>(initialFormValues);

  const handleInputValuesChange = (e: ChangeEvent | SelectEvent) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-5 rounded shadow-custom-shadow w-full max-w-sm">
        <PageTitle text="Create your account" />

        <form>
          <div className="flex flex-col mb-3">
            <label className="block text-gray-700" htmlFor="firstName">
              Name
            </label>
            <input
              onChange={handleInputValuesChange}
              value={formValues.name}
              name="name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Name"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleInputValuesChange}
              value={formValues.email}
              name="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="block text-gray-700" htmlFor="gender">
              Gender
            </label>
            <select
              onChange={handleInputValuesChange}
              value={formValues.gender}
              name="gender"
              id="gender"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="flex flex-col mb-3">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              onChange={handleInputValuesChange}
              value={formValues.password}
              name="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Password"
            />
          </div>
          <Button
            type="submit"
            classNames="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition duration-200"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
