"use client";

import { app } from "@/firebase";
import { getAuth, signOut } from "firebase/auth";
import Image from "next/image";
import { useState } from "react";

const ProfilePopup = () => {
  const auth = getAuth(app);
  const [isShowingLogoutPopup, setIsShowingLogoutPopup] = useState(false);

  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  const handleSignOut = () => {
    signOut(auth);
    if (user.role === "user") localStorage.removeItem("user");
    else localStorage.removeItem("admin");
    console.log(auth.currentUser);
    window.location.reload();
  };

  if (user) {
    const imageURL = user.photoURL || "/default-profile.png"; // Fallback image if photoURL is not available
    return (
      <div
        onClick={() => setIsShowingLogoutPopup((prev) => !prev)}
        className="relative"
      >
        <Image
          src={imageURL}
          height={96}
          width={96}
          alt={user.name}
          className="size-14 border borer-2 border-[#10613A] rounded-full"
        />

        {isShowingLogoutPopup && (
          <button
            onClick={handleSignOut}
            className="absolute top-[110%] right-0 bg-red-500 text-white font-medium px-8 py-4 rounded-lg"
          >
            Logout
          </button>
        )}
      </div>
    );
  }
};

export default ProfilePopup;
