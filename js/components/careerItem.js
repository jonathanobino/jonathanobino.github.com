import React from 'react';
// import { Link } from 'react-router'

const PortfolioItem = React.createClass({
	render: function(){
		let image = this.props.item.imageSrc ? <div className="imgWrapper" style={{backgroundImage:`url(${this.props.item.imageSrc})`}}>
							</div> : <div className="imgWrapper hide-sm"></div>
		let technology  = this.props.item.description.technology ? <p><span className="sans">Technology Involved</span> {this.props.item.description.technology}</p>:null;
		return (
				<div className="row careerItem">
					<div className="large-9 medium-8 small-9 columns description">
						<p><span className="sans">Company</span> <strong>{this.props.item.description.company}</strong></p>
						<p><span className="sans">Role</span> {this.props.item.description.role}</p>
						<p><span className="sans">When</span> {this.props.item.description.when}</p>
					</div>
					<div className="large-3 medium-4 small-3 columns">
						<a href={this.props.item.link} target="_blank">
							{image}
						</a>
					</div>
				</div>
			)
	}
})

export default PortfolioItem;
