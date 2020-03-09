import React from 'react';

const person= (props) => {
    return(
       <div>
            <p onClick={props.click}>Welcome to reactJS {props.name } {props.age} </p>
            <input type="text" onChange={props.changed}></input>
        </div>
    );
}

export default person;