const getLanguageIcon = (language) => {
	language = language.toLowerCase();
	switch (language) {
		case 'css':
			language += '-3';
			break;
		case 'html':
			language += '-5';
			break;
		case 'angular':
		case 'nodejs':
			language += '-icon';
			break;
		default:
			break;
	}

	//return `//s3-us-west-2.amazonaws.com/svgporn.com/logos/${language}.svg`
	return `//cdn.svgporn.com/logos/${language}.svg`;
};

export default getLanguageIcon;
