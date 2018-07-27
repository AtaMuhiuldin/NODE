import React, {Component} from 'react';
import SingleTask from './SingleTask';


class TaskCollection extends Component
{
	render(){
		return(
				<div>
					 {/*Iterating the task Collection and displaying it 
						SingleTask is a Controlled Component so we kept 
						all the action in Top Parent and Passing them to child 
						for call of action
					  */}
					{ this.props.taskCollection.map(task => <SingleTask 
						key={task.id}						
						task={task}
						onDelete={this.props.onDelete}
						onIncriment={this.props.onIncriment}
						onDecriment={this.props.onDecriment}
						onSave={this.props.onSave}
						onModeChange={this.props.onModeChange} 
						>
						 <span>Product</span>
						</SingleTask>

						) }
				</div>
			);
	}
}

export default TaskCollection;