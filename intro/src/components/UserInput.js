import React, { Component } from 'react'

export default class UserInput extends Component {
    render() {
        return (
            <div>
                <label>Add Person : </label>
                <input type="text" onChange={this.props.eventHandler} />
                <button type="submit" onClick={this.props.eventClick} >Submit </button>
            </div>
        )
    }
}
