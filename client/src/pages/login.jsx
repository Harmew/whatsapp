import React, { useEffect } from "react";

// Auth
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Next
import Image from "next/image";
import { useRouter } from "next/router";

// Icons
import { FcGoogle } from "react-icons/fc";

// Axios
import axios from "axios";

// Utils
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";

// Context
import { useStateProvider } from "@/context/StateContext";

// Constants
import { reducerCases } from "@/context/constants";

function login() {
  const router = useRouter();

  const [{ userInfo, newUser }, dispatch] = useStateProvider();

  useEffect(() => {
    if (userInfo?.id && !newUser) router.push("/");
  }, [userInfo, newUser, router]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName: name, email, photoURL: profileImage },
    } = await signInWithPopup(firebaseAuth, provider);

    try {
      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });
        if (!data.status) {
          dispatch({
            type: reducerCases.SET_NEW_USER,
            newUser: true,
          });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: { name, email, profileImage, status: "" },
          });
          router.push("/onboarding");
        } else {
          const {
            id,
            name,
            email,
            profilePicture: profileImage,
            status,
          } = data;
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              id,
              name,
              email,
              profileImage,
              status,
            },
          });
          router.push("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image
          src="/whatsapp.gif"
          alt="Whatsapp"
          width={100}
          height={100}
          priority={true}
        />
        <span className="text-3xl">Whastapp</span>
      </div>
      <button
        className="flex items-center justify-center gap-4 bg-search-input-container-background p-4 rounded-lg"
        onClick={handleLogin}
      >
        <FcGoogle className="text-2xl" />
        <span className="text-white text-2xl">Login with Google</span>
      </button>
    </div>
  );
}

export default login;
