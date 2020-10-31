import { render } from '@testing-library/react';
import React from 'react';

//these are called stateless or presentational component; as no state has been used.

//props is the attributes which is passed from where the components has been used [something like one way binding in angular]
var person = (props) => {
    return (
        <div>
            <p>I am {props.name}. I am {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;