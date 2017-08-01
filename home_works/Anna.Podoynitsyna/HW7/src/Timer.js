import React, { Component } from 'react';

export class Timer extends Component{
    render(){

        return(
            <span>{this.props.value}<sup>o</sup>C</span>
        );
    }
}
export default Timer;
