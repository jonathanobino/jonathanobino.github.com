import { LazyBackgroundImage as LazyImage } from 'lazy-react';

const PortfolioItem = ({ item }) => {
	return (
		<div className="portfolioItem">
			<a href={item.link} target="_blank" rel="noreferrer">
				<figure>
					<LazyImage
						className="squareImage"
						link={item.imageSrc}
						offset={200}
					></LazyImage>
					<figcaption>
						<p>{item.description}</p>
					</figcaption>
				</figure>
			</a>
		</div>
	);
};

export default PortfolioItem;
