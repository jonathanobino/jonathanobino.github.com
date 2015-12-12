import React from 'react';
import ReactDom from 'react-dom';

const Parallax = React.createClass({
	render:function(){
		return (<div className="wrapper">
				 <div style={{background:this.props.background}} className="parallax">
				 </div> 
					 <div className="container">
						 <div className="content">
						 {this.props.children}
						 </div>
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
		               window.setTimeout(callback, 1000/60);
		           };
		   })();
		window.addEventListener('scroll',event => {
			let coordinates = parallax.getBoundingClientRect();
			let wrapperCoord = wrapper.getBoundingClientRect();
			if(coordinates.top < (window.innerHeight - 50) && coordinates.bottom > 0){
				requestAnimFrame(()=>{
					parallax.style.transform = `translate3d(0px,${Math.round((coordinates.top / 2))*(-1)}px,0px)`;
					if(wrapperCoord.bottom < (window.innerHeight / 2)){
					parallax.style.webkitFilter = `blur(${Math.round(((wrapperCoord.bottom - window.innerHeight/2 )  / 10))*(-1)}px)`;
					parallax.style.filter = `blur(${Math.round(((wrapperCoord.bottom - window.innerHeight/2 )  / 10))*(-1)}px)`;
					} else {
						parallax.style.webkitFilter = `blur(0px)`;
						parallax.style.filter = `blur(0px)`;
					}
				})
			}
		})
	}
})

export default Parallax;
