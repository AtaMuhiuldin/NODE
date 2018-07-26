import React, {Component} from 'react';
import SingleCounter from './singleCounter';

class Counters extends Component
{


	
	render(){
		return(
				<div>
					
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