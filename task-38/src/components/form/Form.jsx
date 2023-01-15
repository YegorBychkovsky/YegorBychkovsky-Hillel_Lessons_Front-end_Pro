import { React, useState, useEffect } from 'react';
import "./Form.css";
export const FormContact = ({
    onAdd,
}) => {
    const [contact, setContact] = useState([]);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    // function HandleSubmitForm(params) {
    //     useEffect(() => {
    //         setContact([
    //             {
    //                 id: generateId(),
    //                 name: name,
    //                 surname: surname,
    //                 phone: phone
    //             }
    //         ])
    //     }, [])
    //     console.log(contact);
    // }
    const generateId = () => (
        Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
    );
    return (

        <><input
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)} />
            <br />
            <input
                type="text"
                placeholder='Surname'
                value={surname}
                onChange={(e) => setSurname(e.target.value)} />
            <br />
            <input
                type="text"
                placeholder='Phone'
                value={phone}
                onChange={(e) => {
                    setPhone(e.target.value);
                }}
            />
            <br />
            <button
                type='submit'
                onClick={() => {
                    onAdd(
                        name, surname, phone
                    );
                    // HandleSubmitForm()
                }}
            >
                Submit
            </button>
            <br />
            <button
                onClick={
                    () => {
                        document.getElementById("newFrom").style.display = "none"
                    }
                }
            >
                Cancel
            </button></>
    );
};
