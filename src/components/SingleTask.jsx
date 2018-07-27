import React, {Component} from 'react';

class SingleTask extends Component
{


	state = {

		jobStyle:{width: '500px'},
		empCountStyle:{width : '100px'},

		btnName: 'edit',
		data: '',
		flag: true
	}


	render(){
		
		return(	

				<React.Fragment>	
					

					{/*will initialize input data to task discription to prevent readOnly inputbox*/}
					{this.initializeData()}
					
					{/*button to incriment numebr of person assigned to a task*/}
					<button 
						key={0}
						onClick={() =>  this.props.onIncriment(this.props.task) } 
						className="btn btn-secondary btn-sm"> +
					</button>

					{/*button to Decriment numebr of person assigned to a task*/}
					<button  
						key={1}								
						onClick={() =>  this.props.onDecriment(this.props.task) } 
						className="btn btn-secondary btn-sm glyphicon glyphicon-minus">- 
					</button>

					{/*shows number of Employes assigned a task*/}
					<span
						 style={this.state.empCountStyle}  
						 key={2}
						 className={this.getBadge()}>
						 	{"Persons " +this.formatCount()}
				    </span>



					{/*input box to edit a task */}
					<input 
						type="text" 
						style={this.state.jobStyle}  
						key={3}
						className={this.props.task.txtV}   
						onChange={this.handleChange} 
						value={this.state.data}
					/>
					

					
						 {/*this span is showing save value of task*/}
						<span  key={4}
							className={this.props.task.lblV}> 
							{this.state.data}
						</span>


							{/*manageData is a function that is saveing data to collection*/}
					<button key={5} onClick={this.manageData }  className={"btn  m-2 btn-sm btn-"+this.props.task.btnType}>{this.props.task.btnName}</button>
					
							{/*on Click this button will delete the task from collection*/}
					<button key={6} onClick={() => {this.props.onDelete({id:this.props.task.id}) } }  className="btn btn-danger m-2 btn-sm">Delete</button>
					<br/>
				</React.Fragment>	 
			); 
	}
	
 		

 	   // logic will prevent readOnly input box 	
	initializeData = () =>{
		if(this.state.flag === true) {
			this.state.data  = this.props.task.data;
		}
		
	}

	

	handleChange = (event) => {
		event.preventDefault();
		this.setState({flag:false});
		this.setState({ data :event.target.value});
	}


	// will save data to collection
 	manageData = () => {
 		if(this.props.task.mode === "edit"){
 			this.props.onSave(this.props.task , this.state.data);
 			this.props.onModeChange(this.props.task, this.props.task.mode, "info");
 		}
 		else{
 			this.props.onModeChange(this.props.task,this.props.task.mode, "success");
 		}
 	}		


 	// manage color of person counter tag .. show warning color on Zero persons on a task
	getBadge(){
		const personsOnTask = this.props.task.value;
		let classes = "badge m-2 badge-";
		classes += personsOnTask === 0 ? "warning" : "primary";
		return classes;
	}

	// will show "Zero" in 0 value
	formatCount(){
		const personsOnTask = this.props.task.value;
		return personsOnTask === 0 ? "Zero" : personsOnTask;
	}

}

export default SingleTask;