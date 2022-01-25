import React from "react";
import "./TextInput.css";
import {useState} from "react";

function TextInput() {
    const [text, setText] = useState('')
    return (
        <footer className = "footer">
            <input className="text-input" placeholder ="write a message..." />
            <button className="send">↑</button> 
        </footer>
    );
}

export default TextInput;