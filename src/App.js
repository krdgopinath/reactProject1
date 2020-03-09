import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    person:[
      {name:"max",age:29},
      {name:"gopi", age:30}
    ]
  }

  switchNameHandler=()=> {
   this.setState({
    person:[
      {name:"33333",age:29},
      {name:"gopi", age:30}
    ]

   })
  }

  changeHandler=(event) =>
  {
    this.setState({
      person:[
        {name:event.target.value,age:29},
        {name:"gopi", age:30}
      ]
  
     })
  }

  render() {
    return (
      <div className="App">
         <h1>Gopinath</h1>
         <h2>testing</h2>
         <button onClick={this.switchNameHandler}>click here</button>
         <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.switchNameHandler} > hi</Person>
         <Person name={this.state.person[1].name} age={this.state.person[1].age} changed={this.changeHandler} > hi</Person>
      </div>
    );
  }
}

export default App;
