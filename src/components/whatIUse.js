import getSVGIcon from '../API/getSVGIcon';
import { LazyImage } from 'lazy-react';

const WhatIUse = () => {
	return (
		<div className="row main">
			<div className="medium-2 large-2 columns text-right">
				<h2>What I use</h2>
			</div>
			<div className="medium-10 large-10 columns">
				<ul className="inline-list same-height-child">
					<li>
						<LazyImage link={getSVGIcon('html')} alt="HTML5" />
					</li>
					<li>
						<LazyImage link={getSVGIcon('sass')} alt="SASS" />
					</li>
					<li>
						<LazyImage link={getSVGIcon('react')} alt="React JS" />
					</li>
					<li>
						<LazyImage link={getSVGIcon('typescript')} alt="typescript" />
					</li>
					<li>
						<LazyImage link={getSVGIcon('webpack')} alt="webpack" />
					</li>
					<li>
						<LazyImage link={getSVGIcon('nodejs')} alt="Node JS" />
					</li>
					<li>
						<LazyImage link={getSVGIcon('express')} alt="Express" />
					</li>
					<li>
						<LazyImage link={getSVGIcon('mongodb')} alt="Mongo DB" />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default WhatIUse;
