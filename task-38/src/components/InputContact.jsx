import { React } from "react";

export const InputContact = ({
    id, name, surname, phone, onRemove
}) => {
    return (
        <div className="block" id="contactBlockNew">
            <div className="firstName">
                {name}
            </div>
            <div className="secondName">
                {surname}
            </div>
            <div className="number">
                {phone}
            </div>
            <div className="deleteBtn">
                <button
                    aria-label="remove"
                    onClick={
                        () => {
                            console.log(id);
                            onRemove(id)
                        }
                    }
                >
                    Delete
                </button>
            </div>
        </div>
    )
}