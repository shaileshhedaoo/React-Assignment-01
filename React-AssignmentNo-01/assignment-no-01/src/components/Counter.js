import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    decrement = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    };

    render() {
        return (
            <div>
                <h1>Counter Demo</h1>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.increment} style={{ marginRight: '10px' }}>
                    Increment Counter
                </button>
                <button onClick={this.decrement}>
                    Decrement Counter
                </button>
            </div>
        );
    }
}

export default Counter;
