import React from "react";
import { signUpData } from "../../data/sign-up";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import { Select } from "../../components/Forms/Select";
export const SignUp: React.FC = () => {
  return (
    <>
      <PageTitle text="Create your account" />
      <form>
        {signUpData.map((item, index) =>
          index === 4 ? (
            <div className="flex flex-col mb-3">
              <label htmlFor="" className="text-sm capitalize">
                {item.text}
              </label>
              <Select />
            </div>
          ) : (
            <div key={item.id} className="flex flex-col mb-3">
              <label className="text-sm capitalize">{item.text}</label>
              <input
                type={
                  index === 3
                    ? "email"
                    : index === 5 || index === 6
                    ? "password"
                    : "text"
                }
                placeholder={item.text}
                className="border border-slate-300 p-2 rounded"
              />
            </div>
          )
        )}
        <Button
          classNames="text-white rounded bg-blue-500 p-2"
          text="Sign Up"
        />
      </form>
    </>
  );
};
