import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import hamilVan from './assets/hamilVan.png';

class App extends Component{

	constructor(props) {
		super(props);
		this.keyState = {};

		this.state = {
			x: 120,
			y: 120,
		};

		this.move = this.move.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keydown',this.handleKeyDown,true);    
		document.addEventListener('keyup',this.handleKeyUp,true);
		setInterval(this.move, 80);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown',this.handleKeyDown,true);    
		document.removeEventListener('keyup',this.handleKeyUp,true);
		removeInterval(this.move, 200);
	}

	move(){
		console.log('move');
		const { x, y } = this.state;
		const keyState = this.keyState;
		let newX = x;
		let newY = y;
		if (keyState[37] || keyState[65]){ // left
			newX -= 20;
	    }    
	    if (keyState[39] || keyState[68]){ // right
	    	newX += 20;
	    }
	    if (keyState[38] || keyState[87]){ // up
	    	newY += 20;
	    }    
	    if (keyState[40] || keyState[83]){ // down
	        newY -= 20;
	    }
	    this.setState({x: newX, y: newY});
	}

	handleKeyDown(e){
	    this.keyState[e.keyCode || e.which] = true;
	}

	handleKeyUp(e){
		this.keyState[e.keyCode || e.which] = false;
	}
	

	render(){
		const { x, y } = this.state;
		console.log('Rendering!', x, y);
		return(
			<div className="App">
				<div id="mapFrame">
					<div id="mover" style={{ bottom: y, left: x }}/>
				</div>
			</div>
		);
	}
}

export default hot(module)(App);