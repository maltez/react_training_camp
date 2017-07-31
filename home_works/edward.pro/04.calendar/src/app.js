import React, { Component } from 'react';
import { Calendar } from './components/Calendar';
import { CurrentTime } from './components/CurrentTime';
import ReactDom from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <div>
                    <Calendar />
                    <span>Current time: </span>
                    <CurrentTime />
                </div>;
    }
}

ReactDom.render(<App />, document.getElementById('app'));