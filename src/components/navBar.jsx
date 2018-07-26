import React, { Component } from 'react';
import Clock from './clock';
import TaskForm from'./taskForm';

class NavBar extends Component
{

 
	

    render(){
    	
    	return(
    		<React.Fragment>
    			<nav className="navbar navbar-light bg-light">
				     <TaskForm onAdd={this.props.onAdd} />   
   
				  <button onClick={this.props.onReset} className="btn btn-danger btn-sm">Reset Number of Persons</button>
					<br/> 	
				   <Clock />
				</nav>	
    		</React.Fragment>
    	);
    }
  

}

export default NavBar;