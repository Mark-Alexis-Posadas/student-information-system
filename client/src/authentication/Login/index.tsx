import { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";

import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent } from "../../types/Events";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Error } from "../../components/Forms/Error";
import { Input } from "../../components/Forms/Input";

interface Types {
  isLoggedIn: boolean;
  setIsLoggedIn: (open: boolean) => void;
}

const Schema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password required"),
});

export const Login: React.FC<Types> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isTogglePassword, setIstogglePassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Schema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await axios.post(
            "http://localhost:4000/api/auth/login",
            values
          );

          console.log(response.data);
          if (response.data === "Success") {
            navigate("/");
            setIsLoggedIn(true);
          }
        } catch (error: any) {
          console.log(error.message);
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
            <PageTitle text="Sign IN" />

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-3">
                <ErrorMessage name="email" component={Error} />
                <Field
                  type="text"
                  name="email"
                  label="Email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  component={Input}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                />
              </div>

              <div className="flex flex-col mb-3 relative">
                <ErrorMessage name="password" component={Error} />
                <Field
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  component={Input}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                />

                <button
                  className="absolute top-9 right-4"
                  type="button"
                  onClick={() => setIstogglePassword(!isTogglePassword)}
                >
                  <FontAwesomeIcon
                    icon={isTogglePassword ? faEyeSlash : faEye}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  classNames="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition duration-200"
                >
                  Login
                </Button>
                <Link className="text-sm" to="/sign-up">
                  Create Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};
