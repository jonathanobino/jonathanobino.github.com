const React = require('react');

const FullScreen = React.createClass({
	render:function(){
		return <div className="full" style={{background:this.props.background}}>
				{this.props.children}
			 </div>
	}
})

module.exports = FullScreen;
