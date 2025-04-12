import Header from "../../components/layout/Header";
import LoginForm from "../components/LoginForm";
import Offers from "../../components/sections/Home/Offers";
import Footers from "../../components/sections/Home/Footers";
import useToggleStore from "../../components/store/useToggleStore";
import SignupForm from "../components/SignupForm";


const LoginSignup = () => {
  const { isFormOpen } = useToggleStore();
 
  return (
    <>
      <Header />
      <main className="flex items-center justify-center h-[700px] relative">
        {/* Login Form */}
        <div
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            isFormOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <LoginForm />
        </div>

        {/* Signup Form */}
        <div
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            isFormOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <SignupForm />
        </div>
      </main>
      <Offers />
      <Footers />
    </>
  );
};

export default LoginSignup;
