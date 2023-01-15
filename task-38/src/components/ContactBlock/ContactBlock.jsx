import { React, useState, useEffect } from "react";
import "./ContactBlock.css";

export const ContactBlock = ({
    number
}) => {

    const generateId = () => (
        Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
    );
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [contacts, setContact] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (response === "404") {
                    console.log("Error 404");
                }
                return response.json()
            })
            .then((result) => {

                setIsLoaded(true)
                setContact([
                    {
                        id: generateId(),
                        name: result[number].name.split(' ')[0],
                        surname: result[number].name.split(' ')[1],
                        phone: result[number].phone
                    },
                ])
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Error...</div>;
    } else {
        if (contacts !== 0) {
            return (
                <div className="block" id="Block">
                    <div className="firstName">
                        {contacts[0].name}
                    </div>
                    <div className="secondName">
                        {contacts[0].surname}
                    </div>
                    <div className="number">
                        {contacts[0].phone}
                    </div>
                    <div className="deleteBtn">
                        <button
                            onClick={
                                () => {
                                    setContact(contacts.length = 0)
                                }
                            }
                        >
                            Delete
                        </button>
                    </div>
                </div>

            );
        }
    }
}