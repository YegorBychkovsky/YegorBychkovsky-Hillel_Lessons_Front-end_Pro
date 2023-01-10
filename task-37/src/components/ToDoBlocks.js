import React, {useState} from 'react';


export const ToDoBlocks = ({
    title, addStatusFunc
}) => {
    const [inputValue, setInputValue] = useState("passive")

    return (
        <div className={'block'}>
                <input
                    type="checkbox"
                    className={'checkbox'}
                    value={inputValue}
                    onMouseMove={(event)=>{
                        setInputValue(event.target.value = "active")
                        addStatusFunc(inputValue)
                        console.log(inputValue);
                    }}
                    // onChange={(event)=>{
                    //     setInputValue(event.target.value = "active")
                    //     addStatusFunc(inputValue)
                    //     console.log(inputValue);
                    // }}
                />
            <label className={'label'}>
                <h4 className={'title'}>{title}</h4>
            </label>
            <button
                onClick={() => {}}
                aria-label="Remove"
                className={'toDoButton'}
            >Delete</button>
        </div>
    );
}

// я тут написал "onMouseMove" вместо "onChange", так как мне приходится дважны нажимать на чекбокс чтобы добавить статус "active", можете сами в этом убедится. Возможно существует какой-то особый хендлер для чекбоксов, но с "onChange" я столкнулся с проблемой, что код вроде как исполняется сразу (лог со строчки 23 появляется, но статус там "passive", я так понимаю, что просто рендерится обновленное значение "value" с первого раза, но все равно в самом массиве значение меняетс только после 2-го нажатия)
