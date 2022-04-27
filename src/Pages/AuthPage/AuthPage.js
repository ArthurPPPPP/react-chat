import React, { useContext, useEffect } from "react";
import { Context } from "../..";
import styles from "./styles.module.scss";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

export const AuthPage = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      navigate("chat");
    }
  }, [user]);
  return (
    <div className={styles.authPage}>
      {loading ? <Loader /> : <button onClick={login}>Auth with Google</button>}
    </div>
  );
};
