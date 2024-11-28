"use client";

import { useState, FormEvent } from "react";

interface ProfileFormData {
  firstName: string;
  email: string;
  phone: string;
}

interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const navigation = ["Profile", "Settings"];
const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState<ProfileFormData>({
    firstName: "",
    email: "",
    phone: "",
  });
  const [passwordData, setPasswordData] = useState<PasswordFormData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileSubmit = (e: FormEvent) => {
    e.preventDefault();
    //backend logic
    setProfileData({
      firstName: "",
      email: "",
      phone: "",
    });
  };

  const handlePasswordSubmit = (e: FormEvent) => {
    e.preventDefault();
    //backend logic
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleLogout = () => {
    //backend logic
  };

  return (
    <div className="h-screen bg-slate-100 w-full pt-20 max-sm:pt-4">
      <div className="max-w-screen-xl mx-auto p-5 max-sm:p-3">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Navigation Section */}
          <div className="flex border-b items-center justify-center gap-4 p-3 max-sm:p-2">
            {navigation.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(item.toLowerCase())}
                className="p-2 rounded-md bg-slate-100 max-sm:p-1"
              >
                <span
                  className={`${
                    activeTab === item.toLowerCase()
                      ? "text-zinc-700 border-b-2 border-emerald-500 font-bold text-lg max-sm:text-base"
                      : "text-zinc-700 hover:text-zinc-900 max-sm:text-sm"
                  }`}
                >
                  {item}
                </span>
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="p-8 min-h-80 max-sm:p-4">
            {activeTab === "profile" && (
              <form onSubmit={handleProfileSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-lg font-bold text-gray-700 max-sm:text-base">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          firstName: e.target.value,
                        })
                      }
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none max-sm:py-2"
                      autoComplete="on"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-lg font-bold text-gray-700 max-sm:text-base">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          email: e.target.value,
                        })
                      }
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none max-sm:py-2"
                      autoComplete="on"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-lg font-bold text-gray-700 max-sm:text-base">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          phone: e.target.value,
                        })
                      }
                      placeholder="Enter your phone number"
                      maxLength={10}
                      minLength={10}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none max-sm:py-2"
                      autoComplete="on"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition duration-200 flex items-center justify-center gap-2 max-sm:py-2 max-sm:text-sm"
                >
                  <i className="ri-save-line"></i>
                  Save Changes
                </button>
              </form>
            )}

            {activeTab === "settings" && (
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
                  <div className="space-y-2">
                    <label htmlFor="currentPassword" className="text-lg font-bold text-gray-700 max-sm:text-base">
                      Current Password
                    </label>
                    <input
                      id="currentPassword"
                      type="password"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          currentPassword: e.target.value,
                        })
                      }
                      placeholder="Enter current password"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none max-sm:py-2"
                      autoComplete="on"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="newPassword" className="text-lg font-bold text-gray-700 max-sm:text-base">
                      New Password
                    </label>
                    <input
                      id="newPassword"
                      type="password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          newPassword: e.target.value,
                        })
                      }
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none max-sm:py-2"
                      autoComplete="on"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-lg font-bold text-gray-700 max-sm:text-base">
                      Confirm New Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          confirmPassword: e.target.value,
                        })
                      }
                      placeholder="Confirm new password"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:outline-none max-sm:py-2"
                      autoComplete="on"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition duration-200 flex items-center justify-center gap-2 max-sm:py-2 max-sm:text-sm"
                >
                  <i className="ri-lock-password-line"></i>
                  Update Password
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
