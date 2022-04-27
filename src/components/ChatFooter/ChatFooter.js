import React from "react";
import { SendButton } from "../CustomButtons/SendButton/SendButton";
import { Form } from "../Form/Form";
import styles from "./styles.module.scss";

export const ChatFooter = ({ submitHandler, inputValue, onChangeHandle }) => {
  return (
    <div className={styles.FormBar}>
      <Form
        submitHandler={submitHandler}
        placeholder={"Type your message"}
        inputValue={inputValue}
        onChangeHandle={onChangeHandle}
        button={<SendButton />}
      />
    </div>
  );
};
