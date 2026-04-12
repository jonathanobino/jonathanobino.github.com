import getSVGIcon from '../API/getSVGIcon';
import { LazyImage } from 'lazy-react';

const technologies = [
	'react',
	'typescript-icon',
	'redux',
	'sass',
	'webpack',
	// 'parcel-icon',
	'vite-icon-dark',
	'nodejs',
	'mongodb-icon',
	// 'express',
];

const WhatIUse = () => {
	return (
		<div className="row main">
			<div className="columns">
				<h3>Some of the technologies I've worked with:</h3>
				<ul className="inline-list same-height-child">
					{technologies.map((el) => (
						<li key={el}>
							<LazyImage link={getSVGIcon(el)} alt={el} title={el} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default WhatIUse;
