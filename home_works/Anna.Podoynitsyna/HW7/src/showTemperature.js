import React, { Component } from 'react';

export class ShowTemperature extends Component{
    render(){

        return(
            <span>{this.props.value}<sup>o</sup>C</span>
        );
    }
}
export default ShowTemperature;
