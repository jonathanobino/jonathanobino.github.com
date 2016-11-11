import React from 'react'
import {LazyImage} from 'lazy-react'

const getLanguageIcon = (language) => {
	language = language.toLowerCase()
	if(language === 'css')
		language+='-3'

	return (<LazyImage link={`//svgporn.com/logos/${language}.svg`}/>)
}

const GitHubRepo = ({name,html_url,stargazers_count,language,description,owner}) => <div className="repo">
	<h4><a href={html_url} alt={name} target="_blank">{name}</a> {stargazers_count} <i className="fa fa-star"></i></h4>
	<div>
		<small>Description:</small>
		<p>{description}</p>
	</div>
	<div>
		<small>Languagues:</small>
		<div className="spaceBetween">{getLanguageIcon(language)}</div>
	</div>
</div>


export default GitHubRepo