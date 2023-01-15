import { React, useState, useEffect } from 'react';
import "./Form.css";
export const FormContact = ({
    onAdd,
}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
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
