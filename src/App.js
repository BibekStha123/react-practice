  import React, { Component, useState} from 'react';
  import logo from './logo.svg';
  import './App.css';

  import Counter from './components/counter';
  import Person from './components/Person/Person';
  import UserOutput from './components/Output';
  import UserInput from './components/Input';
  import person from './components/Person/Person';
  import Validation from './components/secondTask/Validation';
  import Char from './components/secondTask/CharComp';

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
    //the way of initializing the variable.
    state = {
      persons : [
        { name:'Jhon', age: 30},
        { name:'celine', age: 20},
        { name:'Bibek', age: 24}
      ],
      otherState: 'some other value',
      showPerson: false
    }

    switchNameHandler = (newName, newAge) => {
      // this.state.persons.name = 'jhonny'; CAN NOT DO THIS

      //  In class based component, changing on the state will only change the specified object state, leaving other state untouched
      //setState method is available from Component
      this.setState({
        persons: [
          { name: newName, age: 30},
          { name: 'ema', age: newAge},
          { name: 'Bibek', age: 27}
        ]
      })
    }

    //change name on typing on inut field // two way binding
    nameChangeHandler = (event) => {
      this.setState({
        persons: [
          { name: event.target.value, age: 30},
          { name: event.target.value, age: 20},
          { name: event.target.value, age: 27}
        ]
      });
    }

    //show or hide person
    tooglePersonHandler = () => {
      const show = this.state.showPerson;
      this.setState({
        showPerson : !show
      });
    }

    deletePersonHandler = (index) => {
      const oldPersons = this.state.persons;
      oldPersons.splice(index,1);
      this.setState({
        persons: oldPersons
      })
    }

    render() {

      //inline css is written inside the render function
      const style = {
        backgroundColor: 'green'
      }

      // can assign null, if don't want to display anything
      let persons = (
        <p>Click the above button to display persons.</p>
      );

      //display or hide persons
      if(this.state.showPerson) {
        persons = (   
          <div>
            {this.state.persons.map((person, index) => {
              // to pass index/param in function, use bind method
              return <Person 
                      name={person.name} 
                      age={person.age} 
                      deletePerson={this.deletePersonHandler.bind(this, index)} 
                      change={this.nameChangeHandler} 
                    />
            })}
            {/* <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }/>
            <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } click={this.switchNameHandler.bind(this, 'josh')}
            change={this.nameChangeHandler}  />
            <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }> My hobbie is to sing. </Person> */}
          </div>
        );
          
        style.backgroundColor = 'red';

      }

      //dynamically add new class
      const classess = ['blue', 'bold'].join(' '); //blue bold, two class

      const checkPerson = [];

      if(this.state.persons.length <= 2) {
        checkPerson.push('red'); //adding a css class 
      }

      if(this.state.persons.length <=1 ){
        checkPerson.push('bold');
      }

      return (
        <div className="App">
          <h2 className={classess}>Hello</h2>
          {/* need to join checkPerson array with space to remove comma*/}
          <p className={checkPerson.join(' ')}>Persons list</p> 
          <Counter/>
          {/* if () is used in function, function will be called on render */}
          <button className="btn btn-primary" onClick={this.switchNameHandler.bind(this, 'Jhonny', 19)}>Switch Name</button>
          <br/><button style={style} onClick={this.tooglePersonHandler}>Toogle Person</button>
          {/* conditional statement; bad way*/}

          {/* { this.state.showPerson ? 
            <div>
              <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }/>
              <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } click={this.switchNameHandler.bind(this, 'josh')}
              change={this.nameChangeHandler}  />
              <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }> My hobbie is to sing. </Person>
            </div>
            : <p>Click the above button to display persons.</p>
          } */}

          {/* conditional statement; recommended way*/}
          {persons}

        </div>
      );
    }
  }


  //first assignment 

  // class App extends Component {

  //   //state is a reserved keyword and can only be used in class based component, not in functional based.
  //   state = {
  //     persons : [
  //       { name:'Jhon', age: 30},
  //       { name:'celine', age: 20},
  //       { name:'Bibek', age: 24}
  //     ]
  //   }

  //   changeNameHandler = () => {
  //     this.setState({
  //       persons: [
  //         { name:'Joshep', age: 30},
  //         { name:'celine', age: 20},
  //         { name:'Bibek', age: 24}
  //       ]
  //     });
  //   }

  //   updateNameHandler = (event) => {
  //     this.setState({
  //       persons: [
  //           { name:'Joshep', age: 30},
  //           { name:'celine', age: 20},
  //           { name: event.target.value, age: 24}
  //         ]
  //     })
  //   }

  //   render() {
  //     return (
  //       <div className="App">
  //         <UserOutput name={this.state.persons[0].name} age={this.state.persons[0].age}/>
  //         <UserOutput name={this.state.persons[1].name} age={this.state.persons[1].age}/>
  //         <UserOutput name={this.state.persons[2].name} age={this.state.persons[2].age}/>
  //         <UserInput change={this.updateNameHandler} currentName={this.state.persons[2].name}/>

  //         <button onClick={this.changeNameHandler}>Change Name</button>
  //       </div>
  //     );
  //   }
  // }

  //second assignment
  // class App extends Component {

  //   state = {
  //     userText: ''
  //   }

  //   inputChangeHandler = (event) => {
  //     this.setState({
  //       userText : event.target.value  
  //     });
  //   }

  //   deleteCharHandler = (index) => {
  //     const text = this.state.userText.split('');
  //     text.splice(index, 1);
  //     const updatedText = text.join('');
  //     this.setState({
  //       userText: updatedText
  //     })
  //   }

  //   render() {

  //     const charList = this.state.userText.split('').map( (ch, index) => {
  //       return <Char 
  //               character={ch}
  //               key = {index}
  //               clicked = {() => this.deleteCharHandler(index)}
  //             />
  //     })

  //     return (
  //       <div>
  //         <input 
  //           type="text"
  //           onChange={this.inputChangeHandler}
  //           value= {this.userText}
  //         />
  //         <p>{this.state.userText}</p>
  //         <Validation textLength={this.state.userText.length}/>
  //         {charList}
  //       </div>
  //     )
  //   }
  // }

  export default App;
