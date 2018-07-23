import React, {Component} from 'react';

class Counter extends Component{
	state = {
		count:0,
		taskList: [],
		data:"12"
	};

	

	render(){
		return(	

				<React.Fragment>	
					
					<span  className={this.getBadge()}>{ this.formatCount()}</span>
					<ul className="list-group">
						{this.renderConditionalList()}
					</ul>
					<button onClick={this.addMessage} className="btn btn-secondary btn-sm">Incriment</button>
				</React.Fragment>	 
			); 
	}


	
	renderConditionalList(){
		debugger;
		if(this.state.taskList.length === 0)
		{
			return <span className="dadge badge-warning">No Item in List</span>;
		}
		else
		{
			return this.state.taskList.map(task=> <li className="list-group-item list-group-item-success" id={task}>{task}</li>); 
		}
	}


	getBadge(){
		const count = this.state.count;
		let classes = "badge m-2 badge-";
		classes += count === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount(){
		const count = this.state.count;
		return count === 0? "Zero" : count;
	}


	addMessage = () =>{
		this.setState({count : this.state.count + 1});
		  var newArray = this.state.taskList.slice();    
		    newArray.push("Task # " + this.state.count);   
		    this.setState({taskList:newArray});
	}


}

export default Counter; 