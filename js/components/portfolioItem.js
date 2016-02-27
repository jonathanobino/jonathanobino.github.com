import React from 'react';

const PortfolioItem = ({item})=>{
		return (
				<div className='portfolioItem'>
					<a href={item.link} target="_blank">
						<figure>
							
							<div className="squareImage" style={{backgroundImage:`url(${item.imageSrc})`}}></div>
							<figcaption><p>{item.description}</p></figcaption>
						</figure>
					</a>
				</div>
			)
}

export default PortfolioItem;
