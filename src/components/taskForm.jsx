import React, {Component} from 'react';

class taskForm extends Component
{

	state ={
		inputValue: ''

	}
	render(){
		return(
			<div class="form-inline">
			  <div class="form-group mb-2">
			    <label for="staticEmail2" class="sr-only"></label>
			    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Enter Task"/>
			  </div>
			  <div class="form-group mx-sm-3 mb-2">
			    <label for="" class="sr-only"></label>
			    <input onChange={this.handleInput} require type="text" ref="txtData" class="form-control" 
			    id="" placeholder="Task Name"
			    value={this.state.inputValue}
			    />
			  </div>
			  <button onClick={() => {this.state.inputValue !=='' && this.props.onAdd(this.state.inputValue); this.setState({inputValue:''});} } class="btn btn-primary mb-2">Add Task</button>
			</div>
			);
	}
	handleInput = (e) =>{
		this.setState({inputValue:e.target.value});
	}
}
export default taskForm;
