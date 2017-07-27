import React, {Component} from 'react';
import CurrentTime from './CurrentTime';

class DayNames extends Component {
	render() {
		return (
			<div className="row day-names">
				{props.dayNames.map((day, index) => <div key={index} className="day">{day}</div>)}
			</div>
		);
	}
}

class Calendar extends Component {
	constructor(props) {
		super(props);
		let date = new Date();
		this.state = {
			year: date.getFullYear(),
			month: date.getMonth(),
			dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
			monthNamesFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		};

		this.createCalendar = this.createCalendar.bind(this);
		this.getDay = this.getDay.bind(this);
	}

	getDay(date) {
		let day = date.getDay();
		if (day == 0) day = 7;
		return day - 1;
	}

	createCalendar() {
		let mon = 8;
		let d = new Date(2017, mon);
		let table = [];

		for (let i = 0; i < this.getDay(d); i++) {
			table.push('');
		}
		while (d.getMonth() == mon) {
			table.push(d.getDate());

			d.setDate(d.getDate() + 1);
		}

		if (this.getDay(d) != 0) {
			for (let i = this.getDay(d); i < 7; i++) {
				table.push('');
			}
		}
		return table;
	}

	render() {
		return (
			<div className="container">
				<div>{this.state.monthNamesFull[this.state.month + 1]} {this.state.year}</div>
				<div className="calendar__body">
					<DayNames dayNames={this.state.dayNames}/>
					{this.createCalendar().map((day, index) => <div className="day" key={index}>{day}</div>)}
				</div>
				<CurrentTime />
			</div>
		)
	}
}

export default Calendar;
