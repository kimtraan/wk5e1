import {useState} from 'react';
import "./NamePicker.css";
import { FiEdit } from "react-icons/fi";

function NamePicker (props) {
    const [editName, setEditName] = useState(false);
    const [name, setName] = useState('');

    /*text in username box becomes saved and stored*/
    function save() {
        props.save(name);
        setEditName(false);

    };
    
    /*saves username that was entered to the input box. disables from 
    editting the input box*/ 
    function ok () {
        props.setUsername(name);
        setEditName(false);

    }

    //if there is no username entered, user can edit the name. if not, username has been set
    if (editName) {
        return (
            <>
            <div></div>
            <input placeholder = "Username" value = {name}
            onChange={e=>setName(e.target.value)}
            >
            </input>
            <button class ='inputbtn' onClick = {save}>OK</button>
            </>
        )
    } else {
        return (
            <>
            <div>{name}</div>
            {/* <button class ='inputbtn' onClick ={() => setEditName(true)} ></button> */}
            <FiEdit size="24" onClick={() => setEditName(true)} />
            </>

        )
    }
     

}

export default NamePicker;




