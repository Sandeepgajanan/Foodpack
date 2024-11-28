"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="h-screen bg-slate-100 w-full pt-4 ">
      <div className="max-w-screen-xl mx-auto p-5 max-sm:p-3">
        <div className="max-w-md mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="p-8 max-sm:p-4">
            <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
              Create Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                autoComplete="on"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none max-sm:py-2"
                required
              />

              <input
                type="email"
                name="email"
                autoComplete="on"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none max-sm:py-2"
                required
              />

              <input
                type="tel"
                name="phone"
                autoComplete="on"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none max-sm:py-2"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none max-sm:py-2"
                required
                autoComplete="off"
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none max-sm:py-2"
                required
                autoComplete="off"
              />

              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 max-sm:py-2"
              >
                <i className="ri-user-add-line text-lg"></i>
                Create Account
              </button>
            </form>

            <p className="text-gray-500 text-center mt-6 max-sm:text-sm">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-emerald-500 hover:text-emerald-600 font-medium max-sm:text-sm"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
