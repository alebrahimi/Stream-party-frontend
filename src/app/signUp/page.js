"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useUserStore } from "../../store/useUser";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();

  useEffect(() => {
    if (password !== checkPassword) {
      setErrMsg("Passwords do not match");
    } else {
      setErrMsg("");
    }
  }, [checkPassword, password]);

  const submitSignUp = async (e) => {
    e.preventDefault();

    if (checkPassword === "" || password === "" || password !== checkPassword) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        router.push("/");
      } else {
        console.error("Account creation failed.");
        const data = await response.json();
        setErrMsg(data.message || "Account creation failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred while creating the account.", error);
      setErrMsg("An error occurred. Please try again.");
    }

    setName("");
    setEmail("");
    setPassword("");
    setCheckPassword("");
    setErrMsg("");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="/logo.png"
            width={36}
            height={36}
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-ellipsis">
            create a new account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-ellipsis"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-ellipsis"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-ellipsis"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="checkPassword"
                  className="block text-sm font-medium leading-6 text-ellipsis"
                >
                  Retype the password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="checkPassword"
                  name="checkPassword"
                  type="password"
                  onChange={(e) => setCheckPassword(e.target.value)}
                  value={checkPassword}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <p className="text-red-500 mb-2">{errMsg}</p>
            <div>
              <button
                type="submit"
                onClick={submitSignUp}
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-ellipsis shadow-sm hover:bg-blue:600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
            <Link
              href={"/signIn"}
              className="flex justify-end underline text-blue-500 text-lg "
              style={{ marginTop: "5px" }}
            >
              SignIn
            </Link>{" "}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
