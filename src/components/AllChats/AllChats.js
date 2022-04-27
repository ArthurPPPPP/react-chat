import React from "react";
import { ChatsList } from "../ChatsList/ChatsList";

export const AllChats = ({ data, onClickHandle, inputValue }) => {

  const filteredChats = data.filter((chat) => {
    return chat.userName.toLowerCase().includes(inputValue.toLowerCase());
  });
  return <ChatsList data={filteredChats} onClickHandle={onClickHandle} />;
};
