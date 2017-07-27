import React, { Component } from 'react';
import ReactDom from 'react-dom';
import FruitList from './components/FruitList';

class App extends Component {
    constructor(props) {
        super(props);
       
    }
  
    render() {

        return  <div>
                <FruitList />
            </div>;
    }
}

ReactDom.render(
    <App />,
   document.getElementById('app'));

