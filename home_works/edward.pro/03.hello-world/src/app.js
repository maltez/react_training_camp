import React, { Component } from 'react';
import ReactDom from 'react-dom';

class HelloWorld extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return  <div>
                    <h1>Hello World</h1>
                    <p>This is React application</p>
                </div>;
    }
}

ReactDom.render(<HelloWorld />, document.getElementById('app'));