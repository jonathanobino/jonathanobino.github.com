import React from 'react';
import FullScreen from '../components/fullScreenHeader';

const Home = React.createClass({
	render: function(){
		return	(<FullScreen background="url(http://marshall.org/wp-content/themes/marshall/img/featured-space-policy.jpg)" >
					<h1> Hello from about page!! </h1>
				</FullScreen>)
	}
})
export default Home;
