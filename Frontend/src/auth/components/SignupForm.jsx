import React from "react";
import useToggleStore from "../../components/store/useToggleStore";
import { useState } from "react";
import useValidation from "../../components/store/useValidation";

const SignupForm = () => {
  const { toggleForm } = useToggleStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { errors, touched, validateSignup, resetValidation } = useValidation();

  const handleInput = (event) => {
    const {name, value} = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateSignup(formData);
    if (isValid) {
      console.log("Form Submiited", formData);
    }
  };

  const handleToggleForm = () => {
    resetValidation();
    toggleForm();
  }

  return (
    <div className="relative w-[350px] py-10 px-5 bg-white rounded-lg shadow-lg overflow-hidden">
      <h1 className="text-center font-semibold text-4xl">Sign in</h1>
      <div className="mt-10">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Name
            </label>
            <input
              className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleInput}
              value={formData.name}
            />
            {touched && errors.name && (
              <p className="text-red-500">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="Email address"
              name="email"
              onChange={handleInput}
              value={formData.email}
            />
            {touched && errors.email && (
              <p className="text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              value={formData.password}
            />
            {touched && errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={handleToggleForm}
              className="w-full bg-blue-500  text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
            <button
              type="submit"
              className="w-full bg-blue-500  text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
