// import { LazyImage } from 'lazy-react';
// import getSVGIcon from '../API/getSVGIcon';

// const getLanguageIcon = (language) => {
// 	return <LazyImage link={getSVGIcon(language)} alt={language} />;
// };

const GitHubRepo = ({
	name,
	html_url,
	stargazers_count,
	// language,
	description,
	// owner,
}) => (
	<div className="repo">
		<h3>
				{name}
			{' '}
			<span className='stars'>{stargazers_count} <i className="fa fa-star"></i></span>
		</h3>
			{/* <small>Description:</small> */}
			<p>{description}</p>
			<p><a href={html_url} target='_blank'>View on Github -></a></p>
	</div>
);

export default GitHubRepo;
