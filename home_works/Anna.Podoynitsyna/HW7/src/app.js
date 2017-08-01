import React, { Component } from 'react';
import store from './store';
import ShowTemperature from './showTemperature';
import Timer from './Timer';


export class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            data1: [],
            data2: []
        };
    }
    tick() {
        this.setState({
            date: new Date()
        });
     };
    weatherData() {
        const apiRequest1 = fetch(`http://alexa.tripextras.com/temp/index1.php`)
            .then(function(response){
            return response.json()
        });
        const apiRequest2 = fetch(`http://alexa.tripextras.com/temp/index2.php`)
            .then(function(response){
            return response.json()
        });
        const combinedData = {"apiRequest1":{},"apiRequest2":{}};
        Promise.all([apiRequest1,apiRequest2])
            .then(function(values){
                combinedData["apiRequest1"] = values[0];
                combinedData["apiRequest2"] = values[1];
                return store.dispatch({
                    type: 'FETCH_DATA',
                    payload: combinedData
                });

         });
    };
    componentWillMount(){
        this.weatherData();
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.dataID = setInterval(
            () => this.weatherData(),
            100000
        );
        store.subscribe(
            () => {
                this.setState({data1: store.getState().apiRequest1, data2: store.getState().apiRequest2})
        });
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
        clearInterval(this.dataID);
    }
    render() {
        return <div>
            <h1>{this.state.data1.location}</h1>
            <Timer value = {this.state.date.toLocaleTimeString()}/>
            <h1>Temperature <ShowTemperature value ={((this.state.data1.temperature + this.state.data2.temperature) / 2).toFixed(1)} /></h1>
            <p>Smart Weather <ShowTemperature value = {this.state.data1.temperature}/></p>
            <p>Accurate Weather <ShowTemperature value = {this.state.data2.temperature}/></p>
        </div>;
    }
}





