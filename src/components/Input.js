import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

var userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.change} value={props.currentName}/>
        </div>
    )
}

export default userInput;