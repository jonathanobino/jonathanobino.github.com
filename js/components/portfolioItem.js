import React from 'react';
// import { Link } from 'react-router'

const PortfolioItem = React.createClass({
	render: function(){
		return (
				<div className='portfolioItem'>
					<a href={this.props.item.link} target="_blank">
						<figure>
							
							<div className="squareImage" style={{backgroundImage:`url(${this.props.item.imageSrc})`}}></div>
							<figcaption><p>{this.props.item.description}</p></figcaption>
						</figure>
					</a>
				</div>
			)
	}
})

export default PortfolioItem;
