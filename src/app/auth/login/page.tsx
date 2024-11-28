"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen bg-slate-100 w-full pt-20  ">
      <div className="max-w-screen-xl mx-auto p-5 max-sm:p-3">
        <div className="p-8 max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden mx-auto max-sm:p-4">
          <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-lg font-bold text-gray-700 max-sm:text-base"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="on"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none max-sm:py-2"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-lg font-bold text-gray-700 max-sm:text-base"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="off"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none max-sm:py-2"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mx-auto sm:w-auto px-8 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition duration-200 flex items-center justify-center gap-2 max-sm:py-2 max-sm:text-sm"
            >
              <i className="ri-login-box-line"></i>
              Sign In
            </button>
          </form>

          <p className="text-gray-600 text-center mt-6 max-sm:text-sm">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="text-emerald-500 hover:text-emerald-600 font-semibold max-sm:text-sm"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
