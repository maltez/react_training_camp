import React, { Component } from 'react';
import ReactDom from 'react-dom';
import CommentList from './components/CommentList';

class App extends Component {
    constructor(props) {
        super(props);
       
    }
  
    render() {

        return  <div>
                <CommentList />
            </div>;
    }
}

ReactDom.render(
    <App />,
   document.getElementById('app'));

