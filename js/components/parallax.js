import React from 'react';
import ReactDom from 'react-dom';

const Parallax = React.createClass({
	getInitialState(){
		return {
			blurriness:0,
			translate:0
		}
	},
	render(){
		const style ={
			background:this.props.background,
			transform:`translate3d(0px,${this.state.translate}px,0px)`
		}
		return (<div className="wrapper">
				 <div style={style} className="parallax">
				 </div> 
					 <div className="container">
						 <div className="content">
						 {this.props.children}
						 </div>
					 </div>
				</div>)
	},
	componentDidMount(){
		const wrapper = ReactDom.findDOMNode(this);
		// const parallax = wrapper.querySelector('.parallax');
		window.addEventListener('scroll',event => {
			// let coordinates = parallax.getBoundingClientRect();
			let wrapperCoord = wrapper.getBoundingClientRect();
			
			if(wrapperCoord.bottom > -50){
				const translate = ~~((wrapperCoord.top * -1)/3);
				window.requestAnimationFrame(()=>{
					this.setState({translate})	
				})
				// requestAnimFrame(()=>{
				// 	if(wrapperCoord.bottom <= secondLimit){
				// 	let blur = Math.floor(((secondLimit - wrapperCoord.bottom)/30));
				// 	blur = blur > 4 ? 4 : blur > 0 ? blur : 1 ;
				// 		if(blur != this.state.blurriness){
				// 			//console.log('set blur:',blur);
				// 			parallax.style.webkitFilter = `blur(${blur}px)`;
				// 			parallax.style.filter = `blur(${blur}px)`;
				// 			this.setState({blurriness:blur})
				// 		}
				// 	} else if(!ticking){
				// 		if(this.state.blurriness != 0){
				// 			ticking = true;
				// 			parallax.style.webkitFilter = '';
				// 			parallax.style.filter = '';
				// 			//console.log('set blur:',0);
				// 			this.setState({blurriness:0})
				// 			ticking = false;
				// 		}
				// 	}
				// })
			} 
			// else if(!ticking){
			// 	if(this.state.blurriness != 0){
			// 		ticking = true;
			// 		parallax.style.webkitFilter = '';
			// 		parallax.style.filter = '';
			// 		// console.log('set blur:',0);
			// 		this.setState({blurriness:0})
			// 		ticking = false;
			// 	}
			// }
		})
	}
})

export default Parallax;
