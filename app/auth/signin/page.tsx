"use client";
import { app } from "@/firebase";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
// import { signInWithRedirect } from "firebase/auth";

const userString = localStorage.getItem("user");
const user = userString ? JSON.parse(userString) : null;

if (user && user.role === "user") redirect("/send-a-report");

const Page = () => {
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    photoURL: "",
    role: "user",
  });

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(formData));
    setFormData({
      email: "",
      password: "",
      photoURL: "",
      role: "user",
    });

    window.location.reload();

    // Here you would typically handle the sign-in logic with email and password
    console.log("Email:", formData.email, "Password:", formData.password);
  };

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    setIsLoadingSignIn(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
          role: "user",
        };
        localStorage.setItem("user", JSON.stringify(userInfo));
        setIsLoadingSignIn(false);
        console.log(user);
        window.location.reload();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        const credential = GoogleAuthProvider.credentialFromError(error);
        setIsLoadingSignIn(false);
      });
  };

  console.log("current user", auth.currentUser);

  const handleSignOut = () => {
    signOut(auth);
    console.log(auth.currentUser);
  };

  return (
    <main>
      <h1 className="text-center mb-4 mt-20">Sign in to Tella</h1>
      <p className="text-center mb-8 text-gray-600 max-w-[40ch] mx-auto">
        Securely access your account and manage your Tella experience.
      </p>

      <form onSubmit={handleSubmitForm} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email">Email</label>

          <input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mt-2 bg-[#10613A]/5 rounded-lg"
            required
          />
        </div>

        <div className="mb-8">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={formData.password}
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 mt-2 bg-[#10613A]/5 rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#10613A] text-white font-medium rounded-lg hover:bg-[#0d4f2a] transition-colors"
        >
          Sign In
        </button>

        <p className="my-8 text-center">OR</p>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="py-4 w-full font-medium px-8 flex items-center mx-auto justify-center gap-4 cursor-pointer rounded-lg text-[#10613A] border-2 border-[#10613A]"
        >
          <span>Sign in with Google</span>
          {isLoadingSignIn ? (
            <div className="border-2 border-[#10613A] border-t-transparent size-5 rounded-full animate-spin" />
          ) : (
            <Image
              src="/google-logo.svg"
              height={96}
              width={96}
              alt="Google logo"
              className="size-5"
            />
          )}
        </button>
      </form>

      {/* <button
        onClick={handleSignOut}
        className="py-5 px-10 cursor-pointer rounded-xl text-white bg-[#10613A]"
      >
        Sign out
      </button> */}
    </main>
  );
};

export default Page;
