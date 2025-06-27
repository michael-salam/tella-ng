import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleIcon from "@/app/Assets/Google Icon.png";

import { useRouter } from "next/navigation";

export const GoogleAuth = () => {
  const router = useRouter();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <button
      onClick={() => handleGoogleSignIn()}
      className="flex border-b cursor-pointer hover:scale-105 transition-all rounded-lg bg-primary/10 py-3 px-4 items-center gap-5 font-semibold"
    >
      <Image className="h-6 w-6" src={GoogleIcon} alt="Icon" />
      <h4 className="md:text-base text-sm font-normal">Sign In With Google</h4>
    </button>
  );
};
