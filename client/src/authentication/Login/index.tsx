import React, { useState } from "react";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";

import { Link } from "react-router-dom";

export const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-5 rounded shadow-custom-shadow w-full max-w-sm">
        <PageTitle text="Sign IN" />

        <form>
          <div className="flex flex-col mb-3">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Password"
            />
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
  );
};
