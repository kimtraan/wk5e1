import "./App.css";
import TextInput from "./TextInput.js";
import {useState} from 'react';
import Message from "./Message";
import ChatBubble from 'react-chat-bubble';
import Camera from 'react-snap-pic'
import { AiFillEdit } from "react-icons/ai";
import NamePicker from './NamePicker.js';
import "./NamePicker.css";



function App() {
  let [showCamera, setShowCamera] = useState(false)
  let [messages, setMessages] = useState([]);
  let [username, setUsername] = useState("");
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "Kim",
    };
    setMessages([newMessage, ...messages]);

  }

  console.log(messages);
  function takePicture(img) {
    console.log(img)
    setShowCamera(false)
}
  return (
    <div className="App">
      <header className="header">
      {showCamera && <Camera takePicture={takePicture} />}
      <style>
        /*imports poppins font from google*/
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
      </style>
        <div className="logo" />
        <span className="title">Chipchat</span>
        <div className = "username">
          <NamePicker save = {setUsername}/>
        </div>
      </header>
      <div className="messages">
        {messages.map((msg) => {
          return <Message {...msg} />;
        })}
      </div>
      {/* <ChatBubble messages = {...msg} */}
      <TextInput sendMessage={sendMessage}
           showCamera={()=>setShowCamera(true)}
      />
    </div>
  );
}

export default App;