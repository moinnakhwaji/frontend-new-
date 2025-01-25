import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import styles from "../style";

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
  
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  
   
    {/* bg-gradient-to-r from-purple-800 via-purple-600 to-black */}
    
    <div className=" bg-[#00040f] text-white font-sans min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-90 w-full max-w-md p-8 rounded-xl shadow-2xl">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-300">
          {isLogin ? "Welcome Back!" : "Create Account"}
        </h1>
        <p className="text-gray-300 text-center mb-8">
          {isLogin ? "Log in to continue exploring." : "Sign up to join the platform."}
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-700 border border-transparent rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-gray-700 border border-transparent rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password (only for Sign Up) */}
          {!isLogin && (
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full bg-gray-700 border border-transparent rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400"
                placeholder="Confirm your password"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-400 focus:outline-none transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="cursor-pointer text-purple-500 hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};
