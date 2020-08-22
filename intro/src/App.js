import React, { Component } from 'react';
import { Person, UserInput, UserOutput } from './components'
import './App.css';

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "George",
        time: 12
      },
      {
        id: 2,
        name: "Stella",
        time: 5
      },
      {
        id: 3,
        name: "James",
        time: 10
      }
    ],
    showData: true,
    inputName : ''
  }

  // changeNameHandler = () => {
  //   // console.log("its")
  //   this.setState({
  //     persons: [
  //       {
  //         id: 1,
  //         name: "George 1 ",
  //         time: 12
  //       },
  //       {
  //         id: 2,
  //         name: "Stella 1 ",
  //         time: 5
  //       },
  //       {
  //         id: 3,
  //         name: "James 1 ",
  //         time: 10
  //       }
  //     ]
  //   })
  // }
  createPersonHandler = () => {
    // const persons = this.state.persons -> 
    const persons = [...this.state.persons] //
    const id = persons[persons.length-1].id + 1
    const name = this.state.inputName
    const time = 7 
    
    persons.push({id, name, time})
    this.setState({persons})
    console.log(persons)
  }
  namePersonHandler = (e) => {
    const person = e.target.value
    this.setState({inputName : person})
    console.log(person)
  }
  toggleShowHandler = () => {
    let toggle = this.state.showData
    this.setState({
      showData: !toggle
    })
    console.log(toggle)
  }

  checkKeyHandler = (pIndex) => {
    console.log(pIndex)
  }
  render() {
    const style = {
      backgroundColor: "lightblue",
      padding: "5px 10px",
      cursor: "pointer"
    }
    return (
      <div className="App">
        <h1>Basic </h1>
        <p>Belajar CRUD</p>
        <UserInput eventHandler={(e) => this.namePersonHandler(e)} eventClick={() => this.createPersonHandler()}/>
        <button style={style} onClick={() => this.toggleShowHandler()}>Toggle</button>
        <UserOutput showData={this.state.showData} persons={this.state.persons} checkKeyHandler={this.checkKeyHandler} />

        {/* <button
          style={style}
          onClick={() => this.changeNameHandler()}
        >Change
          </button>
           */}
        {JSON.stringify(this.state.persons)}

      </div>
    );
  }
}

export default App;
