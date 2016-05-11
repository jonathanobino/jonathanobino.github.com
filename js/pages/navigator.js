import React from 'react';
import ReactDom from 'react-dom';
import Footer from '../components/footer';
const $ = require('jquery');

/*menu

<div className="row">
	<div className="small-4 columns right navigator">
		<p><span className="fa fa-bars right" onClick={this.clickHandler}></span></p>
	</div>
</div>*/

const Menu = React.createClass({
	render: function(){
		return	(<div>
					<div className="offCanvas">
						<p><span className="fa fa-bars right" onClick={this.clickHandler}></span></p>
						<ul>
							<li>Prova</li>
							<li>Prova</li>
							<li>Prova</li>
						</ul>
					</div>
					<div className="mainWrapper">
						<div className="flexFloating"><p><span className="fa fa-bars right" onClick={this.clickHandler}></span></p></div>
					{this.props.children}
					</div>
				</div>);
	},
	clickHandler: function(event){
		const element = ReactDom.findDOMNode(this);
		$(element).children('.offCanvas').toggleClass('show');
		// $(element).children('.mainWrapper').toggleClass('show');
	}
})
export default Menu;
