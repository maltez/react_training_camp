import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Calendar from './components/Calendar';
import Clock from './components/Clock';

class Welcome extends Component {
    constructor(props) {
        super(props);
       
    }

  
    render() {

        return  <div>
                <Clock />
                <Calendar/>
            </div>;
    }
}



ReactDom.render(
    <Welcome />,
   document.getElementById('app'));

