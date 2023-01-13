import React, {useState , use} from 'react';


export const ToDoBlock = ({
    title, addStatusFunc, tasks, compFunc, statusActive
}) => {
    let [selected, setSelected] = useState(false)

    const handleChange = () => {
        addStatusFunc(selected);
        setSelected((value) => !value);
        tasks.sort(compFunc)
    }
    return (
        <div className={'block'}>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    checked={selected}
                />
            <label className={'label'}>
                <h4 className={'title'}>{title}</h4>
            </label>
        </div>
    );
}
