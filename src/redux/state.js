const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_MESSAGE_BODY = "UPDATE-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 32 },
        { id: 2, message: "It's my first post", likesCount: 28 },
      ],
      newPostText: "New post",
    },
    messagesPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hi, how are you" },
        { id: 3, message: "Perfect" },
      ],
      newMessageBody: "",
      dialogs: [
        { id: 1, name: "Max" },
        { id: 2, name: "Valera" },
        { id: 3, name: "Sergey" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 3,
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        break;

      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.text;
        this._callSubscriber(this._state);
        break;
      case UPDATE_MESSAGE_BODY:
        this._state.messagesPage.newMessageBody = action.body;
        this._callSubscriber(this._state);
        break;
      case SEND_MESSAGE:
        let body = this._state.messagesPage.newMessageBody;
        this._state.messagesPage.newMessageBody = "";
        this._state.messagesPage.messages.push({ id: 6, message: body });
        this._callSubscriber(this._state);
        break;
      default:
        break;
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text,
  };
};

export const updateNewMessageCreator = (text) => {
  return {
    type: UPDATE_MESSAGE_BODY,
    body: text,
  };
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export default store;
window.state = store;
