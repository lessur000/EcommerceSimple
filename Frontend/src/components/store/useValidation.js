import { create } from "zustand";

const useValidation = create((set) => ({
  errors: {}, //error validation
  touched: {},

  //validate login form
  validateLogin: (values) => {
    const newErrors = {};

    if (!values.email) newErrors.email = "Email is Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Invalid Email";
    }

    if (!values.password) newErrors.password = "Password is Required";
    else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    set({ errors: newErrors });
    return Object.keys(newErrors).length === 0;
  },

  //validate signup form
  validateSignup: (values) => {
    const newErrors = {};

    if (!values.name) newErrors.name = "Name is Required";
    else if (values.name.length < 8) {
      newErrors.name = "Name must be at least 8 characters";
    }

    if (!values.email) newErrors.email = "Email is Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Invalid Email";
    }

    if (!values.password) newErrors.password = "Password is Required";
    else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    set({ errors: newErrors });
    return Object.keys(newErrors).length === 0;
  },

  //touch fields
  setTouched: (field) => {
    set((state) => ({
      touched: { ...state.touched, [field]: true },
    }));
  },

  resetValidation: () => {
    set({ errors: {}, touched: {} });
  },
}));

export default useValidation;
