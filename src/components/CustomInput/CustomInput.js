import React from "react";
import styles from "./styles.module.scss";

export const CustomInput = ({ placeholder, onChangeHandle, inputValue }) => {
  return (
    <input
      onChange={onChangeHandle}
      className={styles.myInput}
      type="text"
      placeholder={placeholder}
      value={inputValue}
    />
  );
};
