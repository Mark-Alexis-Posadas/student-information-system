import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import { FormEvent } from "../../types/Events";
import { SignUpFieldsTypes } from "../../types/authentication/sign-up";
import { Link } from "react-router-dom";

const initialvalues: SignUpFieldsTypes = {
  name: "",
  email: "",
  gender: "",
  password: "",
  confirmPassword: "",
};
export const SignUp: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Formik
      initialValues={initialvalues}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await axios.post(
            "http://localhost:4000/api/auth/register",
            values
          );
          setMessage(response.data.message);
          console.log(response.data.message);
        } catch (error) {
          console.log((error as Error).message);
          setMessage("Error register user");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
      }) => (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="p-5 rounded shadow-custom-shadow w-full max-w-sm">
            <PageTitle text="Create your account" />

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-3">
                <label className="block text-gray-700" htmlFor="firstName">
                  Name
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.gender}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                  placeholder="Confirm Password"
                  autoComplete="on"
                />
              </div>
              <div className="flex items-center justify-between">
                <Button
                  disabled={isSubmitting}
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
      )}
    </Formik>
  );
};
