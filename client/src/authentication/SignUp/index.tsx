import { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import { Error } from "../../components/Forms/Error";
import { SignUpFieldsTypes } from "../../types/authentication/sign-up";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Forms/Input";
import { Select } from "../../components/Forms/Select";

const initialvalues: SignUpFieldsTypes = {
  name: "",
  email: "",
  gender: "",
  password: "",
  confirmPassword: "",
};

const Schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  gender: Yup.string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Invalid gender selection"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match") // Ensure it matches the password
    .required("Confirm Password is required"),
});

export const SignUp: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={initialvalues}
      validationSchema={Schema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await axios.post(
            "http://localhost:4000/api/auth/register",
            values
          );
          setMessage(response.data.message);
          console.log(response.data.message);
          navigate("/login");
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
              <ErrorMessage name="name" component={Error} />
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
              <ErrorMessage name="email" component={Error} />
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
              <ErrorMessage name="gender" component={Error} />
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
              <ErrorMessage name="password" component={Error} />
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
              <ErrorMessage name="confirmPassword" component={Error} />
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
