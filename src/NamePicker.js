import {useState} from 'react';
import "./NamePicker.css";

function NamePicker (props) {
    const [editName, setEditName] = useState(false);
    const [name, setName] = useState('');

    function save() {
        props.save(name);
        setEditName(false);

    };

    // username(e) {
    //     this.setState ({
    //         name: e.target.value;
    //     });
    //     // console.log(name);
    // }

    if (editName) {
        return (
            <>
            <div></div>
            <input placeholder = "Username" value = {name}
            onChange={e=>setName(e.target.value)}
            >
            </input>
            <button class ='inputbtn' onClick = {save}></button>
            </>
        )
    } else {
        return (
            <>
            <div>{name}</div>
            <button class ='inputbtn' onClick ={() => setEditName(true)} ></button>
            </>

        )
    }
     

}

export default NamePicker;




