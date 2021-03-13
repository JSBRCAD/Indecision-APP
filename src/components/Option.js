import React from 'react';

const Option = (props) => (
    <div className="option">
    <p className="option__text">{props.count}.{props.optiontext}</p> 
    {props.optionText}
    <button className="button--link" 
    onClick={(e) => {
    props.handleDeleteOption(props.optionText);
    }}
    >
    remove
    </button>
    </div>

);

export default Option;