"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import loginimg from "../../components/Assets/WhatsApp Image 2024-11-05 at 20.44.17_32dc3a0d.jpg";

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState(""); // State for storing mobile number
  const [otp, setOtp] = useState("");                   // State for storing OTP
  const [otpSent, setOtpSent] = useState(false);        // State to check if OTP is sent

  const handleSendOtp = () => {
    // Logic to send OTP to the entered mobile number (e.g., call an API)
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    // Logic to verify the entered OTP
    console.log("OTP Verified:", otp);
  };

  // Handle Google login (can be replaced with actual logic)
  const handleGoogleLogin = () => {
    console.log("Google Login Triggered");
  };

  return (
    <section className="min-h-screen flex justify-center items-center w-full bg-yellow-600">
      <div className="bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
          <p className="text-sm mt-4 text-[#002D74]">
            {otpSent ? "Enter the OTP sent to your mobile number" : "Login with your mobile number"}
          </p>

          <form action="" className="flex flex-col gap-4">
            {!otpSent ? (
              <>
                {/* Mobile Number Input */}
                <input
                  className="p-2 mt-8 rounded-xl border"
                  type="text"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <button
                  className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                  type="button"
                  onClick={handleSendOtp}
                >
                  Send OTP
                </button>
              </>
            ) : (
              <>
                {/* OTP Input */}
                <input
                  className="p-2 mt-8 rounded-xl border"
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button
                  className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                  type="button"
                  onClick={handleVerifyOtp}
                >
                  Verify OTP
                </button>
              </>
            )}
          </form>

          <div className="mt-6 items-center text-gray-100 flex">
            <hr className="border-gray-300 flex-grow" />
            <p className="text-center text-sm mx-4">OR</p>
            <hr className="border-gray-300 flex-grow" />
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium"
          >
            <FcGoogle size={25} className="mr-3" />
            Login with Google
          </button>

          <div className="mt-10 text-sm border-b border-gray-500 py-5">
            <a href="#" className="text-[#002D74] hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <Image
            src={loginimg}
            className="rounded-2xl max-h-[1600px]"
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
