import markdownParser from '../API/markdownParser';
import TechStack from './techStack';

const PortfolioItem = ({ item }) => {
	return (
		<div className="row careerItem" >
			<a href={item.link} target="_blank" style={{
			cursor: `${item.link ? 'pointer' : 'initial'}`,
		}}>
			{item.link && <span className='go'>-></span>}
				<div className="columns">
					<p className="monoFont">{item.description.when}</p>
					<p>
						<strong>{item.description.role}</strong>
					</p>
					<p>
						{/* <a href={item.link} target="_blank">
							@ {item.description.company}
						</a> */}
						<span className="location">@ {item.description.company}</span>
					</p>
					{/** biome-ignore lint/security/noDangerouslySetInnerHtml: needed for markdown parser */}
					<p className="description" dangerouslySetInnerHTML={{
							__html: markdownParser(item.description.text),
						}}
					></p>
					<p>
						<TechStack techStack={item.description.technology || []} />
					</p>
				</div>
			</a>
		</div>
	);
};

export default PortfolioItem;
