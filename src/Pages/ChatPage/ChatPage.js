import React, { useContext, useEffect, useState } from "react";
import { Chat } from "../../components/Chat/Chat";
import { ChatListHeader } from "../../components/Headers/ChatListHeader/ChatListHeader";
import { ChatHeader } from "../../components/Headers/ChatHeader/ChatHeader";
import Split from "react-split";
import styles from "./styles.module.scss";
import { database } from "../../DataBase/database";
import { loadMessage } from "../../api/request";
import { ChatFooter } from "../../components/ChatFooter/ChatFooter";
import { Footer } from "../../components/Footer/Footer";
import { AllChats } from "../../components/AllChats/AllChats";
import { Context } from "../..";
import { useAuthState } from "react-firebase-hooks/auth";
import { Notification } from "../../components/Notification/Notification";

export const ChatPage = () => {
  const [data, setData] = useState(database);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [searcValue, setSearchValue] = useState("");
  const [active, setActive] = useState(false);

  const { auth } = useContext(Context);

  const [user] = useAuthState(auth);

  useEffect(() => {
    setData(JSON.parse(window.localStorage.getItem("chats")));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("chats", JSON.stringify(data));
  }, [data]);

  const addMessage = (mes) => {
    const a = [...data];
    const m = a[index].messages;
    m.push(mes);
    a[index].message = m;
    setData(a);
  };
  useEffect(() => {
    if (message && data[index].online) {
      const timer = setTimeout(() => {
        createMessage(message, false);
      }, 10000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [message]);
  const getMessage = async () => {
    try {
      const data = await loadMessage();
      setMessage(data.value);
    } catch (err) {
      setError(err);
    }
  };

  const onClickChat = (id) => {
    const objIndex = data.findIndex((obj) => obj.id == id);
    setIndex(objIndex);
  };

  const createMessage = (mes, own) => {
    const message = {
      id: data[index].messages[data[index].messages.length - 1].id + 1,
      messageText: mes,
      messageDate: new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      own: own,
    };
    addMessage(message);
  };

  const sorteArray = () => {
    const arr = data.sort((a, b) => {
      return (
        new Date(b.messages[b.messages.length - 1].messageDate) -
        new Date(a.messages[a.messages.length - 1].messageDate)
      );
    });
    return arr;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const value = e.target[0].value;
    if (value) {
      createMessage(value, true);
      getMessage();
      setIndex(0);
    }
    setInputValue("");
    setActive(true);
  };
  const onChangeHandle = (e) => {
    setInputValue(e.target.value);
  };
  const onSearchHandle = (e) => {
    setSearchValue(e.target.value);
  };
  const sortedArray = sorteArray();
  const messages = sortedArray[index].messages;

  return (
    <div className={styles.chatPage}>
      <Notification active={active} />
      <Split
        direction="horizontal"
        sizes={[25, 75]}
        className={styles.container}
        cursor="col-resize"
        gutterSize={3}
      >
        <div className={styles.chatList}>
          <ChatListHeader
            onChangeHandle={onSearchHandle}
            inputValue={searcValue}
            user={user}
          />
          <h1 id={styles.chats}>Chats</h1>
          <AllChats
            data={data}
            onClickHandle={onClickChat}
            inputValue={searcValue}
          />
        </div>
        <div className={styles.chat}>
          <ChatHeader data={data[index]} />
          <Chat chatData={messages} avatar={data[index].avatarURL} />
          <ChatFooter
            submitHandler={submitHandler}
            onChangeHandle={onChangeHandle}
            inputValue={inputValue}
          />
        </div>
      </Split>
      <Footer />
    </div>
  );
};
