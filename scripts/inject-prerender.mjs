import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const DOCS_INDEX_PATH = './docs/index.html';
const SSR_BUNDLE_PATH = './.prerender/prerender-entry.js';

function findTagEnd(html, startIndex) {
	const tagEnd = html.indexOf('>', startIndex);
	if (tagEnd === -1) {
		throw new Error('Could not find end of #app opening tag.');
	}
	return tagEnd;
}

function findMatchingDivClose(html, openTagStart) {
	let cursor = openTagStart;
	let depth = 0;

	while (cursor < html.length) {
		const nextOpen = html.indexOf('<div', cursor);
		const nextClose = html.indexOf('</div>', cursor);

		if (nextClose === -1) {
			throw new Error('Could not find matching closing </div> for #app.');
		}

		if (nextOpen !== -1 && nextOpen < nextClose) {
			depth += 1;
			cursor = nextOpen + 4;
			continue;
		}

		depth -= 1;
		if (depth === 0) {
			return nextClose;
		}

		cursor = nextClose + 6;
	}

	throw new Error('Could not match closing </div> for #app.');
}

function injectPrerenderMarkup(html, appMarkup) {
	const appOpenMatch = html.match(/<div\s+id=["']app["'][^>]*>/i);
	if (!appOpenMatch || appOpenMatch.index === undefined) {
		throw new Error('Could not find #app root in docs/index.html.');
	}

	const openStart = appOpenMatch.index;
	const openEnd = findTagEnd(html, openStart);
	const closeStart = findMatchingDivClose(html, openStart);

	return `${html.slice(0, openEnd + 1)}${appMarkup}${html.slice(closeStart)}`;
}

function main() {
	const appMarkup = execFileSync('node', [SSR_BUNDLE_PATH], {
		encoding: 'utf8',
		maxBuffer: 10 * 1024 * 1024,
	}).trim();

	if (!appMarkup.startsWith('<')) {
		throw new Error('SSR bundle did not return HTML markup.');
	}

	const docsHtml = readFileSync(DOCS_INDEX_PATH, 'utf8');
	const result = injectPrerenderMarkup(docsHtml, appMarkup);
	writeFileSync(DOCS_INDEX_PATH, result);
	console.log('Injected pre-rendered markup into docs/index.html');
}

main();
