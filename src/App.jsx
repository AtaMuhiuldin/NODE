import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskCollection from './components/taskCollection';
import NavBar from './components/navBar';
    
class App extends Component {
	


	constructor(){
		super();
		this.state.btnType = this.state.info;
		this.state.mode = this.state.simpleMode;
	}

	state = {
		taskCollection : [	
		],

		info:'info',
		success: 'success',
		btnType: '',
		editMode : 'edit', 
		simpleMode : 'simple',
		mode : '', 
		countValue : 1

	};

  render() {
    return(
       <React.Fragment>

       		 {/*randering naviagation bar and passing contoles  */}
            <NavBar onAdd={this.addTask} onReset={this.resettaskCollection} clockTime={this.state.clockTime} />
            
           <TaskCollection
           taskCollection={this.state.taskCollection} 
           onDelete={this.deleteTask} 
           onReset={this.resetTaskCollection}
           onIncriment={this.incrementCounter}
           onDecriment={this.decrimentCounter}        
           onSave={this.saveData}
           onModeChange={this.setModes}
           />

       </React.Fragment>    
       
    );
  }


  	// will reset all the persons assigend on their tasks to Zero 
  	resettaskCollection = () =>{
  		this.setState(
  			this.state.taskCollection.map(m => {
  			m.value = 0;
  			return m;})		
  		);
  	}	

  	// delete a task from collection
  	deleteTask = counterId =>{
		const taskCollection = this.state.taskCollection.filter(c => c.id !== counterId.id );
		this.setState({ taskCollection });
	}

	// decriment number of persons on a task
	incrementCounter = (task) =>{
		const taskCollection = [...this.state.taskCollection];
		const index = taskCollection.indexOf(task);
		taskCollection[index] = {...task};
		taskCollection[index].value++;
		this.setState({taskCollection});	
	}


	// increment number of persons on a task
	decrimentCounter = (task) =>{

		const taskCollection = [...this.state.taskCollection];
		const index = taskCollection.indexOf(task);
		taskCollection[index] = {...task};
		taskCollection[index].value--;
		this.setState({taskCollection});	
	}


	// Save any edited Task discription/data
	saveData = (task ,data1) => {

		const taskCollection = [...this.state.taskCollection];
		const index = taskCollection.indexOf(task);
	    taskCollection[index] = {...task};
	    taskCollection[index].data = data1;
		this.setState({taskCollection: taskCollection});
		
	}

	// Add task to Collection 
	addTask = (value) =>{
		const taskCollection = [...this.state.taskCollection];
		taskCollection.push({id: this.state.countValue, value:0 , data : value, btnType : "info", mode: "simple", txtV : "display-none", lblV:"visible", btnName : "edit"})
		this.setState({taskCollection});
		var v = this.state.countValue;
		v++;
		this.setState({countValue:v});
	}



	// manage front end to edit and save the task discription
	setModes = (task ,mode, btnType) => {
		const taskCollection = [...this.state.taskCollection];
		const index = taskCollection.indexOf(task);
	    taskCollection[index] = {...task};
	
		if(mode === "edit")
		{
			taskCollection[index].lblV = "visible";
	    	taskCollection[index].txtV = "display-none";
	    	taskCollection[index].btnName = "edit"
	    	taskCollection[index].mode = "simple";
		}
		else
		{
		
	    	taskCollection[index].lblV = "display-none";
	    	taskCollection[index].txtV = "visible";
	    	taskCollection[index].btnName = "save"
	    	taskCollection[index].mode = "edit";
		}
		this.setState({taskCollection});
		
	}
	



}

export default App;
