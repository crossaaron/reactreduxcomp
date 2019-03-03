import React, { Component } from 'react'


export default class Clicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicks: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({clicks: this.state.clicks + 1})
    }

    render() {
        return (
            <div>
                <p>You've clicked this {this.state.clicks} times.</p>
                <p><button onClick={this.handleClick}>increment</button></p>
            </div>
        )

    }
}