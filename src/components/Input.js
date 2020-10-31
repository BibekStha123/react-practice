import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

var userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.change}/>
        </div>
    )
}

export default userInput;