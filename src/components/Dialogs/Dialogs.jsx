import React from "react";
import { sendMessageCreator, updateNewMessageCreator } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((data) => (
    <DialogItem name={data.name} id={data.id} />
  ));

  let messagesElements = props.state.messages.map((data) => (
    <Message message={data.message} id={data.id} />
  ));

  let newMessageBody = props.state.newMessageBody;

  let onChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageCreator(body));
  };

  let onClick = () => {
    props.dispatch(sendMessageCreator());
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div className={s.textareaWrapper}>
          <textarea
            type="text"
            placeholder="Type here your message..."
            onChange={onChange}
            value={newMessageBody}
          />
          <button onClick={onClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
