import React from 'react';

const Section = React.createClass({
	render: function(){
		return (<div className="panel" style={{background: this.props.background}}>
				<div className={this.props.isRow ? 'row' : ''}>
					{this.props.children}
				</div>
			</div>)
	}
})

export default Section
