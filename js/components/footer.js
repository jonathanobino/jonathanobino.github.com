import React from 'react';

const Footer = React.createClass({
	getInitialState:function(){
		let thisYear = new Date().getFullYear();
		return{
			year: thisYear
		}
	},
	render: function(){
		return (
			<div className="footer">
			<ul className="inline-list">
				<li><a href="https://twitter.com/jonathanobino" target="_blank"><i className="fa fa-twitter fa-2x"></i></a></li>
				<li><a href="https://github.com/jonathanobino" target="_blank"><i className="fa fa-github fa-2x"></i></a></li>
				<li><a href="http://codepen.io/jonathanobino" target="_blank"><i className="fa fa-codepen fa-2x"></i></a></li>
				<li><a href="https://it.linkedin.com/in/jonathanobino" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a></li>
				<li><a href="https://medium.com/@threobin" target="_blank"><i className="fa fa-medium fa-2x"></i></a></li>
			</ul>
			<p className="text-center">
				Jonathan Obino © {this.state.year}
			<br/>
				P.IVA: 01771730932
			</p>
			<p className="text-center credits">Made with <span className="fa fa-heart heart"></span> and <img src="http://svgporn.com/logos/react.svg" alt="React JS"/></p>
			</div>
			)
	}
})

export default Footer;
