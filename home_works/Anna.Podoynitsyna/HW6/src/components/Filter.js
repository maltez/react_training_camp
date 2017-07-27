import React, {Component} from 'react';
import ShowFruitList from './ShowFruitList';

class Filter extends Component{
	constructor(props) {
		super(props);
		this.state={
			items: []
		}		
	} 

 filterList(event) {
    var updatedList = this.props.fruits;
    updatedList = updatedList.filter(function(item){
      return item.name.toString().toLowerCase().search(
        event.target.value.toString().toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }
  
  render(){
    return (
      <div className="filter-list">
         <input type="text" placeholder="Search" onChange={this.filterList.bind(this)}/>
	    <ShowFruitList fruits={this.state.items} />
      </div>
    );
  }
}

export default Filter;