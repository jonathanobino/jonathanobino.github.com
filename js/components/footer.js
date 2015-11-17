import React from 'react';

const Footer = React.createClass({
	render: function(){
		return (
			<div className="footer">
			<ul className="inline-list">
				<li><a href="https://twitter.com/jonathanobino" target="_blank"><i className="fa fa-twitter fa-2x"></i></a></li>
				<li><a href="https://github.com/jonathanobino" target="_blank"><i className="fa fa-github fa-2x"></i></a></li>
				<li><a href="http://codepen.io/jonathanobino" target="_blank"><i className="fa fa-codepen fa-2x"></i></a></li>
				<li><a href="https://it.linkedin.com/in/jonathanobino" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a></li>
			</ul>
			</div>
			)
	}
})

export default Footer;
