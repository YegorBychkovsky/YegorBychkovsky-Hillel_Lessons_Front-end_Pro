import React, { useCallback, useState } from 'react';


export const InputPlus = ({
    onAdd,
}) => {
    const [inputValue, setInputValue] = useState("")
    return (
        <div>
            <input 
                className='newItem'
                value={inputValue}
                onChange={(event)=>{
                    setInputValue(event.target.value)
                }}
            ></input>
            <button 
            className="button"
            onClick={() => {
                onAdd(inputValue)
                setInputValue('');
            }}
            aria-label="Add">
                Add</button>
        </div>
    );
}