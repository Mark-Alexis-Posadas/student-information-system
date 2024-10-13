import { useState, useEffect } from "react";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent } from "../../types/Events";

interface Types {
  isLoggedIn: boolean;
  setIsLoggedIn: (open: boolean) => void;
}

export const Login: React.FC<Types> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn) {
      setIsLoggedIn(JSON.parse(storedIsLoggedIn));
    }
  }, [setIsLoggedIn]);

  // Update localStorage whenever isLoggedIn changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        { email, password }
      );
      console.log(response.data);
      if (response.data === "Success") {
        navigate("/");
        setIsLoggedIn(true);
      } else {
        alert("You are not registered to this service");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-5 rounded shadow-custom-shadow w-full max-w-sm">
        <PageTitle text="Sign IN" />

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-3">
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

          <div className="flex flex-col mb-3">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Password"
              autoComplete="on"
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
