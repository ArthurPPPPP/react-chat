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
    await signInWithPopup(auth, provider).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.email;
      alert(errorMessage);
      const credential = GoogleAuthProvider.credentialFromError(error);
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
