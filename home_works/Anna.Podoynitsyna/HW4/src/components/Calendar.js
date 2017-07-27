import React, { Component } from 'react';
import  { render } from 'react-dom';

class Calendar extends Component {
	constructor(props) {
        super(props);        
        this.dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    };
        
    render() {
    	const days =[];
		for(let i = 1; i <= 31; i++) {
			days.push(i);
		}
    	
      	const dayNames = this.dayNames.map((item, index) => (
			<span  className="day" key={index}>{item} </span>
		))

		const day = days.map((item, index) => (	
			<span className="day" key={index}>{item}</span>
		))

        return (
         	<div>
	            <p>
					{dayNames}
				</p>
				<p>
					{day}
				</p>
			</div>
		)
	}
};

export default Calendar;