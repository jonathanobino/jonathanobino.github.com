import React from 'react';

const FullScreen = React.createClass({

	// getInitialState:function(){
	// 	return {
	// 		firstColor:'rgb(255,255,255)',
	// 		secondColor:'rgb(0,0,0)'
	// 	}
	// },
	render:function(){
		let style = {
			background:this.props.background
		}
		return <div className="full" style={style}>
				{this.props.children}
			 </div>
	},
	componentDidMount:function(){
		// setInterval(()=>{
		// 	let colors = Array.from(new Array(6)).map(elem => Math.ceil(Math.random()*255+1));
		// 	console.log(colors);
		// 	this.setState({
		// 		firstColor:`rgb(${colors[0]},${colors[1]},${colors[2]})`,
		// 		secondColor:`rgb(${colors[3]},${colors[4]},${colors[5]})`
		// 	});
		// 	console.log(this.state);
		// },500)
	}
})

export default FullScreen;
