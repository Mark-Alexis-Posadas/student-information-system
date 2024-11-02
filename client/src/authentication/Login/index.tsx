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

interface Types {
  isLoggedIn: boolean;
  setIsLoggedIn: (open: boolean) => void;
}

export const Login: React.FC<Types> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isTogglePassword, setIstogglePassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={}
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
        }
      }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="p-5 rounded shadow-custom-shadow w-full max-w-sm">
          <PageTitle text="Sign IN" />

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-3">
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}

              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col mb-3 relative">
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password}</span>
              )}

              <label className="block text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                type={isTogglePassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                placeholder="Password"
                autoComplete="on"
              />
              <button
                className="absolute top-9 right-4"
                type="button"
                onClick={() => setIstogglePassword(!isTogglePassword)}
              >
                <FontAwesomeIcon icon={isTogglePassword ? faEyeSlash : faEye} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <Button
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
    </Formik>
  );
};
