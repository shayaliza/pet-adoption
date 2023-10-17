"use client";
import Navbar from "@/app/components/navbar";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function Login() {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can perform your login logic here
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email",
                },
              }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="text"
                    id="email"
                    className="w-full p-2 border rounded-md"
                  />
                  <p className="text-red-500 text-sm">
                    {/* {errors.email && errors.email.message} */}
                    {errors?.email?.message}
                  </p>
                </div>
              )}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="password"
                    id="password"
                    className="w-full p-2 border rounded-md"
                  />
                  <p className="text-red-500 text-sm">
                    {/* {errors.password && errors.password.message} */}
                    {errors?.password?.message}
                  </p>
                </div>
              )}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
