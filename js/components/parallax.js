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
			background:this.props.background
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
		const parallax = wrapper.querySelector('.parallax');
		const {height} = wrapper.getBoundingClientRect();
		let translate = 0;
		const handleScroll = () => {
				parallax.style.transform = `translate3d(0px,${translate}px,0px)`;
		}

		window.addEventListener('scroll',event => {
			if((height - window.scrollY) > 50){
				console.log('here');
				translate = parseInt(window.scrollY/3);	
				window.requestAnimationFrame(handleScroll);			
			} 
		})
	},
	shouldComponentUpdate(nextProps, nextState){
		return this.state.translate != nextState.translate;
	}
})

export default Parallax;
