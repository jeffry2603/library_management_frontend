
import React, { useEffect, useState } from "react";
import logo from "../assets/black-logo.png";
import logo_with_title from "../assets/logo-with-title.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { register, resetAuthSlice } from "../store/slices/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error, message, user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const navigateTo = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    dispatch(register(data));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(resetAuthSlice());
      navigateTo(`/otp-verification/${email}`);
    }
    if (error) {
      toast.error(error);
      dispatch(resetAuthSlice());
    }
  }, [dispatch, isAuthenticated, error, loading]);

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="flex flex-col justify-center md:flex-row h-screen">
        {/* LEFT SIDE */}
        <div className="hidden w-full md:w-1/2 bg-blue-900 text-orinoco-100 md:flex flex-col items-center justify-center p-8 rounded-tr-[80px] rounded-br-[80px]">
          <div className="text-center h-[376px]">
            <div className="flex justify-center mb-12">
              <img
                src={logo_with_title}
                alt="logo"
                className="mb-12 h-44 w-auto"
              />
            </div>
            <p className="text-blue-200 mb-12">
              Already have Account? Sign in now.
            </p>
            <Link
              to={"/login"}
              className="border-2 rounded-lg font-semibold border-orinoco-100 py-2 px-8 hover:bg-orinoco-100 hover:text-blue-900 transition"
            >
              SIGN IN
            </Link>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-orinoco-100 p-8">
          <div className="w-full max-w-sm">
            <div className="flex justify-center mb-12">
              <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-5">
                <h3 className="font-medium text-4xl overflow-hidden text-blue-900">
                  Sign Up
                </h3>
                <img
                  src={logo}
                  alt="logo"
                  className="h-auto w-24 object-cover"
                />
              </div>
            </div>

            <p className="text-blue-800 text-center mb-12">
              Please provide your information to sign up.
            </p>
            <form onSubmit={handleRegister}>
              <div className="mb-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="block md:hidden font-semibold mt-5 text-blue-900">
                <p>
                  Already have Account?
                  <Link
                    to="/login"
                    className="text-sm text-blue-600 hover:underline ml-1"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="border-2 mt-5 border-blue-900 w-full font-semibold bg-blue-900 text-orinoco-100 py-2 rounded-lg hover:bg-orinoco-100 hover:text-blue-900 transition"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
