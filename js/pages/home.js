const React = require('react');
const FullScreen = require('../components/fullScreenHeader');

const Home = React.createClass({
	render: function(){
		return	(<FullScreen background="url(http://marshall.org/wp-content/themes/marshall/img/featured-space-policy.jpg)" >
					<h1> Hello {this.props.name} from webpack and react !! </h1>
				</FullScreen>)
	}
})
module.exports = Home;
