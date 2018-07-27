import React, {Component} from 'react';

class SingleCounter extends Component
{
	
	constructor(){
		super();
	
	}

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
					

					//// initializing Input Value to Task Name that entered 
					{this.initializeData()}
					
					<button key={0}
					onClick={() =>  this.props.onIncriment(this.props.counter) } 
					className="btn btn-secondary btn-sm"> +</button>

					<button  key={1}
					onClick={() =>  this.props.onDecriment(this.props.counter) } 
					className="btn btn-secondary btn-sm glyphicon glyphicon-minus">- </button>

					<span style={this.state.empCountStyle}  key={2}
					className={this.getBadge()}>{"Persons " +this.formatCount()}</span>




					<input type="text" style={this.state.jobStyle}  key={3}
					className={this.props.counter.txtV}   
					onChange={this.handleChange} 
					value={this.state.data}
					/>
					

					
					
						<span  key={4}
							className={this.props.counter.lblV}> 
							{this.state.data}
						</span>



					<button key={5} onClick={this.manageData }  className={"btn  m-2 btn-sm btn-"+this.props.counter.btnType}>{this.props.counter.btnName}</button>
					
					<button key={6} onClick={() => {this.props.onDelete({id:this.props.counter.id}) } }  className="btn btn-danger m-2 btn-sm">Delete</button>
					<br/>
				</React.Fragment>	 
			); 
	}
	
 		
	initializeData = () =>{
		if(this.state.flag === true) {
			this.state.data  = this.props.counter.data;
		}
		
	}

	
	handleChange = (event) => {
		event.preventDefault();
		this.setState({flag:false});
		this.setState({ data :event.target.value});
	}

	getLabel = () =>{
		if(this.props.counter.mode === "simple"){
					   return(<span  key={4}
								className={this.props.counter.lblV}> 
								{this.props.counter.data}
							</span>);		
		}	
		else{
			 return(<span  key={4}
				className={this.props.counter.lblV}> 
				{this.state.data}
				</span>);
		}
	}

 	manageData = () => {
 		if(this.props.counter.mode === "edit"){
 			console.log(this.state.data);
 		
 			this.props.onSave(this.props.counter , this.state.data);
 			// this.changeMode();
 			this.props.onModeChange(this.props.counter, this.props.counter.mode, "info");
 		}
 		else{
 			// this.changeMode();
 			this.props.onModeChange(this.props.counter,this.props.counter.mode, "success");
 		}
 	}		


	getBadge(){
		const count = this.props.counter.value;
		let classes = "badge m-2 badge-";
		classes += count === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount(){
		const count = this.props.counter.value;
		return count === 0 ? "Zero" : count;
	}




}

export default SingleCounter;