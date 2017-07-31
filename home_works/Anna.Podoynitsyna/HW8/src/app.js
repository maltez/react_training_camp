import React, { Component } from 'react';
import ReactDom from 'react-dom';
import store from './store';
import { Increment } from './increment';
import { Decrement } from './decrement';
import { Show } from './show';


export class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 1,
            number: 1
        };
    }
    componentWillMount(){
        store.subscribe(
            () => {
                this.setState({count: store.getState().count, number: store.getState().number})
            });
        console.log(store.getState().number);
    }
    render() {
        return <div>
                <h1>Factorial <span>{this.state.number}</span></h1>
                <Decrement/>
                <Show count={this.state.count} number={this.state.number}/>
                <Increment/>
        </div>;
    }
}
ReactDom.render(
    <App />,
   document.getElementById('app'));



