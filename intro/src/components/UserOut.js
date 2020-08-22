import React, { Component } from 'react'
import Person from './Person'
export default class UserOutput extends Component {
    render() {
        return (
            <div>
                {/* <p>Hello, {this.props.username}. </p> */}
                {this.props.showData && this.props.persons.map((person, index) => {
                    return (
                        <Person click={() => this.checkKeyHandler(index)} key={person.id} name={person.name} time={person.time}></Person>
                    )
                })}
            </div>
        )
    }
}
