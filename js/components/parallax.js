import React from 'react';
import ReactDom from 'react-dom';

const Parallax = React.createClass({
	render:function(){
		return (<div className="wrapper">
				 <div style={{background:this.props.background}} className="parallax">
				 </div> 
				{this.props.children}
				</div>)
	},
	componentDidMount:function(){
		let wrapper = ReactDom.findDOMNode(this);
		let parallax = wrapper.querySelector('.parallax');
		window.addEventListener('scroll',event => {
			let coordinates = parallax.getBoundingClientRect();
			if(coordinates.top < (window.innerHeight - 50)){
				parallax.style.top = (coordinates.top / 10)*(-1) + "px";
			}
		})
	}
})

export default Parallax;
