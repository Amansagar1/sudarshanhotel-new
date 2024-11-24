"use client";
import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import loginimg from "/public/images/img3.jpg";

const LoginPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");   
  const [email, setEmail] = useState("");          
  const [mobileNumber, setMobileNumber] = useState(""); 
  const [password, setPassword] = useState("");    
  const [confirmPassword, setConfirmPassword] = useState("");

  // Debug logging
  useEffect(() => {
    console.log("Auth Status:", status);
    console.log("Session:", session);
  }, [status, session]);

  // Handle session state changes
  useEffect(() => {
    if (status === 'authenticated' && session) {
      console.log("Authenticated, redirecting to rooms...");
      router.push('/rooms');
    }
  }, [status, session, router]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
  
    try {
      if (isSignUp) {
        // Handle sign-up logic
        console.log("Signing up user:", { fullName, email, mobileNumber, password });
  
        // Make a request to your backend to create a new user (with hashed password)
        // After successful sign-up, try logging in with the created email and password
  
        const signUpResult = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
  
        if (signUpResult?.error) {
          setError("Error signing up. Please try again.");
          return;
        }
  
        // Reload the session to reflect the new user details
        const { data: updatedSession } = await fetch("/api/auth/session").then(res => res.json());
  
        // Ensure user session is updated correctly
        if (updatedSession?.user?.name) {
          console.log("Session updated:", updatedSession);
        } else {
          setError("Failed to update session after sign-up.");
          return;
        }
  
        // Automatically redirect to rooms if the sign-up is successful
        router.push("/rooms");
      } else {
        // Handle login logic
        const loginResult = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
  
        if (loginResult?.error) {
          setError("Invalid email or password. Please try again.");
          return;
        }
  
        // Redirect to rooms if login is successful
        router.push("/rooms");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  
  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      setError("");
  
      const result = await signIn("google", {
        redirect: false,
        callbackUrl: "/rooms",
      });
  
      if (result?.error) {
        setError("Failed to sign in with Google. Please try again.");
        return;
      }
  
      router.push(result.url);
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  // const handleGoogleLogin = async () => {
  //   try {
  //     setIsLoading(true);
  //     setError("");
  //     console.log("Initiating Google sign-in...");

  //     const result = await signIn("google", {
  //       redirect: false,
  //       callbackUrl: "/rooms",
  //     });

  //     console.log("Sign-in result:", result);

  //     if (result?.error) {
  //       console.error("Sign-in error:", result.error);
  //       setError("Failed to sign in with Google. Please try again.");
  //       return;
  //     }

  //     if (result?.url) {
  //       console.log("Redirecting to:", result.url);
  //       router.push(result.url);
  //     }
  //   } catch (error) {
  //     console.error("Sign-in exception:", error);
  //     setError("An unexpected error occurred. Please try again.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (isSignUp) {
  //     console.log("User signed up with details:", { fullName, email, mobileNumber, password });
  //   } else {
  //     console.log("User logged in with email:", email);
  //   }
  // };
  // If still loading the session, show loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <section className="min-h-screen flex justify-center items-center w-full bg-yellow-600">
      <div className="bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-[#002D74]">{isSignUp ? "Sign Up" : "Login"}</h2>
          <p className="text-sm mt-4 text-[#002D74]">
            {isSignUp ? "Create a new account" : "Login with your email and password"}
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

<form onSubmit={handleSubmit} className="flex flex-col">
  {/* Full Name (only for Sign Up) */}
  {isSignUp && (
    <input
      className="p-2 mt-2 rounded-xl border"
      type="text"
      name="fullName"
      placeholder="Full Name"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
    />
  )}

  {/* Email Input */}
  <input
    className="p-2 mt-2 rounded-xl border"
    type="email"
    name="email"
    placeholder="Enter Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  {/* Mobile Number Input (only for Sign Up) */}
  {isSignUp && (
    <input
      className="p-2 mt-8 rounded-xl border"
      type="text"
      name="mobileNumber"
      placeholder="Enter Mobile Number"
      value={mobileNumber}
      onChange={(e) => setMobileNumber(e.target.value)}
    />
  )}

  {/* Password Input */}
  <input
    className="p-2 mt-8 rounded-xl border"
    type="password"
    name="password"
    placeholder="Enter Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  {/* Confirm Password Input (only for Sign Up) */}
  {isSignUp && (
    <input
      className="p-2 mt-8 rounded-xl border"
      type="password"
      name="confirmPassword"
      placeholder="Confirm Password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
  )}

  <button
    className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium mt-4"
    type="submit"
  >
    {isSignUp ? "Sign Up" : "Login"}
  </button>
</form>

          <div className="mt-6 items-center text-gray-100 flex">
            <hr className="border-gray-300 flex-grow" />
            <p className="text-center text-sm mx-4">OR</p>
            <hr className="border-gray-300 flex-grow" />
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-gray-50 font-medium disabled:opacity-70 disabled:hover:scale-100"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                <FcGoogle className="mr-3 h-6 w-6" />
                Sign in with Google
              </>
            )}
          </button>

          <div className="mt-10 text-sm border-b border-gray-500 py-5">
            <button
              className="text-[#002D74] hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
            </button>
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
