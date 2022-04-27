import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBno-cHOT8j0f48ruvb3FMHsil5-Oaf1P0",
  authDomain: "react-chat-aadeb.firebaseapp.com",
  projectId: "react-chat-aadeb",
  storageBucket: "react-chat-aadeb.appspot.com",
  messagingSenderId: "370426656252",
  appId: "1:370426656252:web:a0af71a696921b0c726e79",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export const Context = createContext({ auth });

initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context.Provider value={{ auth }}>
      <App />
    </Context.Provider>
  </BrowserRouter>
);
