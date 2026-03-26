function markdownParser(text) {
	return (
		text
			// 1. Gestisce il grassetto (**testo**)
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

			// 2. Gestisce il corsivo (*testo*)
			.replace(/\*(.*?)\*/g, '<em>$1</em>')
	);
}

export default markdownParser;