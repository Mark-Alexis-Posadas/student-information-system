import React, { useState } from "react";
import { Formik, Field } from "formik";
import axios from "axios";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";

import { SignUpFieldsTypes } from "../../types/authentication/sign-up";
import { Link } from "react-router-dom";
import { Input } from "../../components/Forms/Input";

const initialvalues: SignUpFieldsTypes = {
  name: "",
  email: "",
  gender: "",
  password: "",
  confirmPassword: "",
};
export const SignUp: React.FC = () => {
  const [message, setMessage] = useState<string>("");

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
              <Field
                label="Name"
                name="name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                component={Input}
              />

              <Field
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                placeholder="Email"
                component={Input}
              />

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

              <Field
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                placeholder="Password"
                autoComplete="on"
                component={Input}
              />

              <Field
                label="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                name="confirmPassword"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                placeholder="Confirm Password"
                autoComplete="on"
                component={Input}
              />

              <div className="flex items-center justify-between">
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  classNames="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition duration-200"
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
