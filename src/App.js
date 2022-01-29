import "./App.css";
import TextInput from "./TextInput.js";
import {useState} from 'react';
import Message from "./Message";
import ChatBubble from 'react-chat-bubble';

function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "Kim",
    };
    setMessages([newMessage, ...messages]);
  }
  console.log(messages);

  return (
    <div className="App">
      <header className="header">
      <style>
        /*imports poppins font from google*/
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
      </style>
        <div className="logo" />
        <span className="title">Chipchat</span>
      </header>

      <div className="messages">
        {messages.map((msg) => {
          return <Message {...msg} />;
        })}
      </div>
      {/* <ChatBubble messages = {...msg} */}
      <TextInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;