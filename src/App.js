import React, { Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/counter';
import Person from './components/Person';

//these are called statefull component; as state has been used via useState  or state.

// function App() {
//   // useState is used to perform the change on state in functional component, like state provided by Component used in class based
//   //useState hooks always returns two parameter; first one is object state and second is function to change the state
//   //array destructuring
//   const [ personsState, setPersonsState] = useState({
//     persons : [
//       { name:'Jhon', age: 30},
//       { name:'celine', age: 20},
//       { name:'Bibek', age: 24}
//     ],
//     otherState: 'some other value'
//   });

//   console.log(personsState);

//   // NOTE: Using useState hooks in functional component for manipulating the state, it will override the whole state.But in class based component, only specified state is changed
  
//   //need to add other state manually
//   const [otherState, setOtherState] = useState({
//     otherState: 'some other value'
//   })

//   console.log(personsState, otherState);
  
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name:'Jhonny', age: 30},
//         { name:'celine', age: 20},
//         { name:'Bibek', age: 27}
//       ]
//     })
//   }

//     return (
//       <div className="App">
//         <h2>Hello</h2>
//         <Counter/>
//         {/* if () is used in function, function will be called on render */}
//         <button className="btn btn-primary" onClick={switchNameHandler}>Switch Name</button>
//         <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age }/>
//         <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }/>
//         <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age }> My hobbie is to sing. </Person>
//       </div>
//     );
// }

class App extends Component {

  //state is a reserved keyword and can only be used in class based component, not in functional based.
  state = {
    persons : [
      { name:'Jhon', age: 30},
      { name:'celine', age: 20},
      { name:'Bibek', age: 24}
    ],
     otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // this.state.persons.name = 'jhonny'; CAN NOT DO THIS

    //  In class based component, changing on the state will only change the specified object state, leaving other state untouched
    //setState method is available from Component
    this.setState({
      persons: [
        { name: newName, age: 30},
        { name:'celine', age: 20},
        { name:'Bibek', age: 27}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Jhon', age: 30},
        { name: event.target.value, age: 20},
        { name:'Bibek', age: 27}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Hello</h2>
        <Counter/>
        {/* if () is used in function, function will be called on render */}
        <button className="btn btn-primary" onClick={this.switchNameHandler.bind(this, 'Jhonny')}>Switch Name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }/>
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } click={this.switchNameHandler.bind(this, 'josh')}
         change={this.nameChangeHandler}  />
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }> My hobbie is to sing. </Person>
      </div>
    );
  }
}

export default App;
