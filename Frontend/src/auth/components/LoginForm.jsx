import { useState } from "react";
import useToggleStore from "../../components/store/useToggleStore";
import useValidation from "../../components/store/useValidation";

const LoginForm = () => {
  const { toggleForm } = useToggleStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { errors, touched, validateLogin, resetValidation } = useValidation();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateLogin(formData);
    if (isValid) {
      console.log("Form Submitted", formData);
    }
  };

  const handleToggleForm = () => {
    resetValidation();
    toggleForm();
  }

  return (
    <div className="relative w-[350px] py-10 px-5 bg-white rounded-lg shadow-lg overflow-hidden">
      <h1 className="text-center font-semibold text-4xl">Log in</h1>
      <div className="mt-10">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleInput}
              value={formData.email}
            />
            {/* When you have wrong email they have error */}
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
              name="password"
              placeholder="Password"
              onChange={handleInput}
              value={formData.password}
            />
            {/* When you have wrong password they have error */}
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
            <button className="w-full bg-blue-500  text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
              Login
            </button>
            <button
              type="button"
              onClick={handleToggleForm}
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

export default LoginForm;
