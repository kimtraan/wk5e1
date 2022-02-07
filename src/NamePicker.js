import {useState} from 'react';
import "./NamePicker.css";

function NamePicker (props) {
    const [editName, setEditName] = useState(false);
    const [name, setName] = useState('');
    return (
        <>
        <div></div>
        <input class = 'input'></input>
        <button class ='input'></button>
        </>

    )
}

export default NamePicker;




