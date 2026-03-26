export default function ({ children, target, callback }) {
	function clickHandler() {
		const targetPosition =
			document.querySelector(target).getBoundingClientRect().top + 1;
		if (typeof callback === 'function') {
			callback();
		}
		window.scrollBy({
			top: targetPosition,
			behavior: 'smooth',
		});
	}

	// biome-ignore lint/a11y/useKeyWithClickEvents: moving to button requires more useless styling
	// biome-ignore lint/a11y/noStaticElementInteractions: moving to button requires more useless styling
	return <div onClick={clickHandler}>{children}</div>;
}
