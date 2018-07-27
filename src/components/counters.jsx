import React, {Component} from 'react';
import SingleCounter from './singleCounter';


//// Counters = Task Collection 
//// Counter =  Single Task

//// Counters is Basically Randerring The list of Task 
class Counters extends Component
{


	
	render(){
		return(
				<div>
					

					//// mapped the list of Tasks and Randered the list of taks 
					//// passed their corrospondin values to sub module
					{ this.props.counters.map(counter => <SingleCounter 
						key={counter.id}						
						counter={counter}
						onDelete={this.props.onDelete}
						onIncriment={this.props.onIncriment}
						onDecriment={this.props.onDecriment}
						onSave={this.props.onSave}
						onModeChange={this.props.onModeChange} 
						>

						 <span>Product</span>
						</SingleCounter>

						) }
				</div>
			);
	}



}

export default Counters;