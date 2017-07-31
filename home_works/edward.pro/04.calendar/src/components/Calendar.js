import React, { Component } from 'react';
import { Day } from './Day';

export class Calendar extends Component {
    constructor(props) {
        super(props);

        let date = new Date();
        date.setDate(1);
        date.setMonth(date.getMonth() + 1 < 11 ? date.getMonth() + 1 : 0);

        this.state = {
            date: date,
            weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
            calendar: []
        };

        for (let day = 1; day <= new Date(date.getFullYear(), date.getMonth() + 1 < 11 ? date.getMonth() + 1 : 0, 0).getDate(); day++) {

            this.state.calendar.push(<Day day={day} />);

        }
    }

    render() {
        return (
            <div>
                <h1>Calendar of August</h1>
                <table>
                    <thead>
                        <tr>
                        {
                            this.state.weekDays.map((item, index) => (
                            <td key={index}>{item}</td>
                            ))
                        }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><Day day="1" /></td>
                            <td><Day day="2" /></td>
                            <td><Day day="3" /></td>
                            <td><Day day="4" /></td>
                            <td><Day day="5" /></td>
                            <td><Day day="6" /></td>
                        </tr>
                        <tr>
                            <td><Day day="7" /></td>
                            <td><Day day="8" /></td>
                            <td><Day day="9" /></td>
                            <td><Day day="10" /></td>
                            <td><Day day="11" /></td>
                            <td><Day day="12" /></td>
                            <td><Day day="13" /></td>
                        </tr>
                        <tr>
                            <td><Day day="14" /></td>
                            <td><Day day="15" /></td>
                            <td><Day day="16" /></td>
                            <td><Day day="17" /></td>
                            <td><Day day="18" /></td>
                            <td><Day day="19" /></td>
                            <td><Day day="20" /></td>
                        </tr>
                        <tr>
                            <td><Day day="21" /></td>
                            <td><Day day="22" /></td>
                            <td><Day day="23" /></td>
                            <td><Day day="24" /></td>
                            <td><Day day="25" /></td>
                            <td><Day day="26" /></td>
                            <td><Day day="27" /></td>
                        </tr>
                        <tr>
                            <td><Day day="28" /></td>
                            <td><Day day="29" /></td>
                            <td><Day day="30" /></td>
                            <td><Day day="31" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}