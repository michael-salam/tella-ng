"use client";
import { app } from "@/firebase";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import React from "react";

const Page = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
          role: "admin",
        };
        localStorage.setItem("admin", JSON.stringify(userInfo));
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  console.log("current user", auth.currentUser);

  const handleSignOut = () => {
    signOut(auth);
    console.log(auth.currentUser);
  };

  return (
    <div>
      <h2>Admin</h2>
      <button
        onClick={handleGoogleSignIn}
        className="py-5 px-10 cursor-pointer rounded-xl text-white bg-[#10613A]"
      >
        Please Sign Up
      </button>

      <button
        onClick={handleSignOut}
        className="py-5 px-10 cursor-pointer rounded-xl text-white bg-[#10613A]"
      >
        Sign out
      </button>
    </div>
  );
};

export default Page;
