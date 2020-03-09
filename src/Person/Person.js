import React from 'react';

const person= (props) => {
    return(
       <div>
            <p onClick={props.click}>Welcome to reactJS {props.name } {props.age} </p>
            <h1>heading1</h1>
            <input type="text" onChange={props.changed}></input>
        </div>
    );
}

export default person;