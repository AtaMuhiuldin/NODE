import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navBar';
    
class App extends Component {
	
	constructor(){
		super();
		this.state.btnType = this.state.info;
		this.state.mode = this.state.simpleMode;
	}


	state = {

	

		counters : [
			
			
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
            <NavBar onAdd={this.addTask} onReset={this.resetCounters} clockTime={this.state.clockTime} />

           <Counters
           counters={this.state.counters} 
           onDelete={this.deleteCounter} 
           onReset={this.resetCounters}
           onIncriment={this.incrementCounter}
           onDecriment={this.decrimentCounter}        
           onSave={this.saveData}
           onModeChange={this.setModes}
           />

       </React.Fragment>    
       
    );
  }

  	resetCounters = () =>{
  		console.log("reseting...");
  		
  		
  		this.setState(
  			
  			this.state.counters.map(m => {
  			m.value = 0;
  			return m;})		
  		);
  	}	


  	deleteCounter = counterId =>{
		const counters = this.state.counters.filter(c => c.id !== counterId.id );
		this.setState({ counters });
	}

	incrementCounter = (counter) =>{

		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = {...counter};
		counters[index].value++;
		this.setState({counters});	
	}

	decrimentCounter = (counter) =>{

		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = {...counter};
		counters[index].value--;
		this.setState({counters});	
	}

	saveData = (counter ,data1) => {

		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
	    counters[index] = {...counter};
	   
	    counters[index].data = data1;
	  	debugger;
		this.setState({counters: counters});
		debugger;
	}
	
	addTask = (value) =>{
		const counters = [...this.state.counters];
		counters.push({id: this.state.countValue, value:0 , data : value, btnType : "info", mode: "simple", txtV : "display-none", lblV:"visible", btnName : "edit"})
		this.setState({counters});
		var v = this.state.countValue;
		v++;
		this.setState({countValue:v});
	}

	setModes = (counter ,mode, btnType) => {
		
		// this.state.mode = mode;
		// this.state.btnType = btnType;

		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
	    counters[index] = {...counter};
	
		if(mode === "edit")
		{
			counters[index].lblV = "visible";
	    	counters[index].txtV = "display-none";
	    	counters[index].btnName = "edit"
	    	counters[index].mode = "simple";
  			
			
		}
		else
		{
		
	    	counters[index].lblV = "display-none";
	    	counters[index].txtV = "visible";
	    	counters[index].btnName = "save"
	    	counters[index].mode = "edit";
		}
		this.setState({counters});
		
	}
	



}

export default App;
