import React, { useState } from "react";
import axios from "axios";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import { ChangeEvent, SelectEvent, FormEvent } from "../../types/Events";
import { SignUpFieldsTypes } from "../../types/authentication/sign-up";
import { Link } from "react-router-dom";

const initialFormValues: SignUpFieldsTypes = {
  name: "",
  email: "",
  gender: "",
  password: "",
  confirmPassword: "",
};
export const SignUp: React.FC = () => {
  const [formValues, setFormValues] =
    useState<SignUpFieldsTypes>(initialFormValues);
  const [message, setMessage] = useState<string>("");

  const handleInputValuesChange = (e: ChangeEvent | SelectEvent) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        formValues
      );
      setMessage(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      console.log((error as Error).message);
      setMessage("Error register user");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-5 rounded shadow-custom-shadow w-full max-w-sm">
        <PageTitle text="Create your account" />

        <form onSubmit={handleFormSubmit}>
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
              autoComplete="on"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="block text-gray-700" htmlFor="password">
              Confirm Password
            </label>
            <input
              onChange={handleInputValuesChange}
              value={formValues.confirmPassword}
              name="confirmPassword"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Confirm Password"
              autoComplete="on"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              classNames="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition duration-200"
              handleButtonClick={handleFormSubmit}
            >
              Submit
            </Button>
            <Link className="text-sm" to="/login">
              Already have an account?
            </Link>
            {message && <p className="mt-4 text-red-500">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};
