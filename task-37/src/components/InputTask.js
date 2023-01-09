import React from 'react';


export const InputTask = ({
  title,
}) => {
    return (
        <div className={'block'}>
                <input
                    type="checkbox"
                    className={'1233'}
                />
            <label className={'label'}>
                <h4 className={'title'}>{title}</h4>
            </label>
            <button
                onClick={() => {}}
                aria-label="Remove"
                className={'taskButton'}
            >Delete</button>
            {/* <button
                onClick={() => {
                    // if (confirm("Are you sure?")) {}
                }}
                aria-label="Remove"
                className={'qweryy'}
            /> */}
        </div>
    );
}