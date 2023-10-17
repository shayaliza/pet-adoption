"use client";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import React from "react";

function SignUp() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>

          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-md"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded-md"
                placeholder="Your Password"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2 border rounded-md"
                placeholder="Confirm Password"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-4">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link href="login.js" className="text-blue-500">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
