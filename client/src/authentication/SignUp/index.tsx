import React, { useState } from "react";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
// import { SignUpFieldsTypes } from "../../types/authentication/sign-up";

export const SignUp: React.FC = () => {
  return (
    <div className="p-5 rounded shadow-custom-shadow">
      <PageTitle text="Create your account" />

      <form>
        <div className="flex flex-col mb-3">
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="First name"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="middleName">Middle Name</label>
          <input
            name="middleName"
            type="text"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="Middle name"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="Last name"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="gender">Gender</label>
          <select
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
            name="password"
            type="password"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
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
