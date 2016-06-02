import React from 'react'
import {LazyBackgroundImage as LazyImage} from './lazyImage'

const PortfolioItem = ({item})=>{
		return (
				<div className='portfolioItem'>
					<a href={item.link} target="_blank">
						<figure>
							<LazyImage className="squareImage" link={item.imageSrc}></LazyImage>							
							<figcaption><p>{item.description}</p></figcaption>
						</figure>
					</a>
				</div>
			)
}

export default PortfolioItem

//<LazyBackgroundImage className="squareImage" link={item.imageSrc}></LazyBackgroundImage>
