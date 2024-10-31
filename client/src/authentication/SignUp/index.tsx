import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import { Error } from "../../components/Forms/Error";
import { SignUpFieldsTypes } from "../../types/authentication/sign-up";
import { Link } from "react-router-dom";
import { Input } from "../../components/Forms/Input";
import { Select } from "../../components/Forms/Select";

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
                className={`${
                  errors.name ? "border-red-500" : "border-gray-300 "
                } w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-100`}
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                component={Input}
              />
              <ErrorMessage name="name" component={Error} />

              <Field
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                type="email"
                className={`${
                  errors.email ? "border-red-500" : "border-gray-300 "
                } w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-100`}
                placeholder="Email"
                component={Input}
              />
              <ErrorMessage name="email" component={Error} />

              <Field
                label="Gender"
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                onChange={handleChange}
                onBlur={handleBlur}
                name="gender"
                className={`${
                  errors.gender ? "border-red-500" : "border-gray-300 "
                } w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-100`}
                component={Select}
              />
              <ErrorMessage name="gender" component={Error} />

              <Field
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                type="password"
                className={`${
                  errors.password ? "border-red-500" : "border-gray-300 "
                } w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-100`}
                placeholder="Password"
                autoComplete="on"
                component={Input}
              />
              <ErrorMessage name="password" component={Error} />

              <Field
                label="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                name="confirmPassword"
                type="password"
                className={`${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300 "
                } w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-100`}
                placeholder="Confirm Password"
                autoComplete="on"
                component={Input}
              />
              <ErrorMessage name="confirmPassword" component={Error} />

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
