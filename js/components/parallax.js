import React from 'react';
import ReactDom from 'react-dom';

const Parallax = React.createClass({
	render:function(){
		return (<div className="wrapper">
				 <div style={{background:this.props.background}} className="parallax">
				 </div> 
				 <div className="container">
				 	{this.props.children}
				 </div>
				</div>)
	},
	componentDidMount:function(){
		let wrapper = ReactDom.findDOMNode(this);
		let parallax = wrapper.querySelector('.parallax');
		const requestAnimFrame = (function(){
		       return  window.requestAnimationFrame       ||
		           window.webkitRequestAnimationFrame ||
		           window.msRequestAnimationFrame ||
		           window.oRequestAnimationFrame ||
		           window.mozRequestAnimationFrame    ||
		           function( callback ){
		               window.setTimeout(callback, 16);
		           };
		   })();
		window.addEventListener('scroll',event => {

			let coordinates = parallax.getBoundingClientRect();
			if(coordinates.top < (window.innerHeight - 50)){
				requestAnimFrame(()=>{
					parallax.style.top = (coordinates.top / 2)*(-1) + "px";
				})
			}
		})
	}
})

export default Parallax;
