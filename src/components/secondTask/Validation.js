import React from 'react';

var validation = (props) => {

    let message =  (<p>Text too short</p>);

    if(props.textLength > 5) {
        message = (<p>Text Long enough</p>);
    }

    return (
        <div>
            {/* {} can be used for if condition */}
            {message}
        </div>
    )
}

export default validation;