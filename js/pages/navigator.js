import React from 'react';
import FullScreen from '../components/fullScreenHeader';

const Home = React.createClass({
	render: function(){
		return	(<div>
					<div>
						<div className="small-4 columns right navigator">
							<h3 className="right"> hello </h3>
						</div>
					</div>
					{this.props.children}
				</div>);
	}
})
export default Home;
