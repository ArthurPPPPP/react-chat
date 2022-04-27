import React from "react";
import { Avatar } from "../../Avatar/Avatar";
import { Form } from "../../Form/Form";
import styles from "./styles.module.scss";

export const ChatListHeader = ({ onChangeHandle, inputValue, user }) => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.myAvatar}>

    
        <Avatar
          avatarURL={ user ? user.photoURL :
            "https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
          }
          isOnline={true}
        />
      </div>

      <Form
        placeholder={"Search or start new chat"}
        inputValue={inputValue}
        onChangeHandle={onChangeHandle}
      />
    </header>
  );
};
