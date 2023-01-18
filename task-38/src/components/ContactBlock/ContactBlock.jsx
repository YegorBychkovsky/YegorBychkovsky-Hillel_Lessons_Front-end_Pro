import { React, useState, useEffect } from "react";
import "./ContactBlock.css";

export const ContactBlock = ({
    id, name, surname, phone, onRemove
}) => {

    return (
        <div className="block" id="Block">
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

    );
}