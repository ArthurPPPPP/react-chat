import React from "react";
import { CustomInput } from "../CustomInput/CustomInput";
import styles from "./styles.module.scss";

export const Form = ({
  submitHandler,
  placeholder,
  onChangeHandle,
  inputValue,
  button,
}) => {
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <CustomInput
        placeholder={placeholder}
        onChangeHandle={onChangeHandle}
        inputValue={inputValue}
      />
      {button}
    </form>
  );
};
