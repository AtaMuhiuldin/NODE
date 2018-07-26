import React, {Component} from 'react';

class Clock extends Component
{

	constructor(){
		super();
	

	}
	state ={
		clockTime: '21',
		clockStyle:{
			fontSize: '30px', 
		    align: 'right',
			padding:'10px'
		}
	}

	setTime = () => {
		
		this.setState({clockTime: new Date().toLocaleString()});
	}

	render(){
		setInterval(this.setTime, 1000);

		return(
				<React.Fragment>
					<span className="badge badge-danger" style={this.state.clockStyle}> 
						{this.state.clockTime} 
					</span>	
				</React.Fragment>	
			  );
	}
}

export default Clock;