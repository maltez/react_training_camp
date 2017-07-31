import React, { Component } from 'react';

export class CurrentTime extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: new Date()
        };

        setInterval(() => this.reRender(), 1000);
    }

    reRender() {
        this.setState({currentTime: new Date()});
    }

    render() {
        return (
            <h4>{ this.state.currentTime.toLocaleString() }</h4>
        );
    }
}