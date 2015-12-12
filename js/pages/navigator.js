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

const Home = React.createClass({
	render: function(){
		return	(<div>
					<div className="offCanvas"></div>
					<div className="mainWrapper">
					{this.props.children}
					</div>
				</div>);
	},
	clickHandler: function(event){
		const element = ReactDom.findDOMNode(this);
		$(element).children('.offCanvas').toggleClass('show');
		$(element).children('.mainWrapper').toggleClass('show');
	}
})
export default Home;
