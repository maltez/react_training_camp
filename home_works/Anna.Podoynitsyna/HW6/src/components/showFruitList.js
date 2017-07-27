import React, {Component} from 'react';

class ShowFruitList extends Component{
	constructor(props) {
		super(props);		
	}
   
  render(){
    return (
      <div className="filter-list">
      	<ul>
		    {
		        this.props.fruits.map(function(item,index) {
		          return <li key={item.id}><img src={item.img} /><span>{item.name}</span></li>
		        })
		    }
	    </ul>
      </div>
    );
  }
}



export default ShowFruitList;