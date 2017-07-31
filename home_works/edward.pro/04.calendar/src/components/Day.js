import React, { Component } from 'react';

export class Day extends Component {
    constructor(props) {
        super(props);

        this.state = {
            day: props.day
        };
    }

    render() {
        return (
            <span>{ this.state.day }</span>
        );
    }
}