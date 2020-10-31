import React from 'react';

var userOutput = (props) => {
    return (
        <div>
            <p>hello this is {props.name}</p>
            <p>I am {props.age} </p>
        </div>
    )
}

export default userOutput;