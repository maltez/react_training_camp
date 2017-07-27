import React, {Component} from 'react';
import Filter from './Filter';
import ShowFruitList from './ShowFruitList';

class FruitList extends Component{
	constructor(props) {
		super(props);		
	}
 
  componentWillMount(){
    this.state = {
    	fruits: [				
		{
			id: "1",
			name: "apple",
			img: "./img/apple.jpg"
		},
		{
			id: "2",
			name: "pineapple",
			img: "./img/pinapple.jpg"
		},
		{
			id: "3",
			name: "orange",
			img: "./img/orange.jpg"
		},
		{
			id: "4",
			name: "banana",
			img: "./img/banana.jpg"
		}],
       items: []
   }
  }
  
  render(){
  	console.log(this.state.fruits);
    return (
        <div className="filter-list">
		    <div className="full-list">
			    <ShowFruitList fruits={this.state.fruits} />
		    </div>
            <Filter fruits={this.state.fruits} />
        </div>
    );
  }
}



export default FruitList;