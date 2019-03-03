import React, { Component } from 'react'
import { connect } from 'react-redux'


class Clicker extends Component {
    render() {
        return (
            <div>
                <p>You've clicked this {this.props.clicks} times.</p>
                <p><button onClick={this.props.increment}>increment</button></p>
            </div>
        )
    }
}

// how to read from redux
const mapStateToProps = (state) => {
    return {
        clicks: state
    }
};

//how to dispatch actions back to redux
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: 'INCREMENT'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Clicker)