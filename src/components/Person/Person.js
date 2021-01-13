import React from 'react';
import './Person.css';

//these are called stateless or presentational component; as no state has been used.

//props is the attributes which is passed from where the components has been used [something like one way binding in angular]
var person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name}. I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}/>&nbsp;
            <button className="btn btn-danger" onClick={props.deletePerson}>Delete</button>
        </div>
    )
}

export default person;