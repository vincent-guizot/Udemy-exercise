import React, { Component } from 'react'

export default class Person extends Component {
    render() {
        return (
            <div>
                <p onClick={this.props.click}>Good morning, {this.props.name} it's {this.props.time}AM</p>
        <p>{this.props.children}</p>
            </div>
        )
    }
}
