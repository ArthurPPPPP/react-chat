import React from "react";
import { ChatPage } from "./Pages/ChatPage/ChatPage";
import styles from "./styles.module.scss";
import {Route, Routes } from "react-router-dom";
import { AuthPage } from "./Pages/AuthPage/AuthPage";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
