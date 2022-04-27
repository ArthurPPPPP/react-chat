import React from "react";
import { ChatItem } from "../Items/ChatItem/ChatItem";
import styles from "./chatList.module.scss";

export const ChatsList = ({ data, onClickHandle }) => {
  
  return (
    <ul className={styles.chats}>
      {data.map((data) => (
        <ChatItem data={data} key={data.id} onClickHandle={onClickHandle} />
      ))}
    </ul>
  );
};
