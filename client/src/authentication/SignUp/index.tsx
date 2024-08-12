import React from "react";
import { signUpData } from "../../data/sign-up";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import { Select } from "../../components/Forms/Select";
import { Input } from "../../components/Forms/Inputs";
export const SignUp: React.FC = () => {
  return (
    <div className="p-5 rounded shadow-custom-shadow">
      <PageTitle text="Create your account" />
      <form>
        {signUpData.map((item, index) =>
          index === 4 ? (
            <div className="flex flex-col mb-3" key={item.id}>
              <label htmlFor="" className="text-sm capitalize">
                {item.text}
              </label>
              <Select />
            </div>
          ) : (
            <div key={item.id} className="flex flex-col mb-3">
              <label className="text-sm capitalize">{item.text}</label>
              <Input
                type={
                  index === 3
                    ? "email"
                    : index === 5 || index === 6
                    ? "password"
                    : "text"
                }
                id={item.text.replace(/\s/g, "").toLowerCase()}
                placeholder={item.text}
                name={item.text.replace(/\s/g, "").toLowerCase()}
              />
            </div>
          )
        )}
        <Button
          classNames="text-white rounded bg-blue-500 p-2"
          text="Sign Up"
        />
      </form>
    </div>
  );
};
