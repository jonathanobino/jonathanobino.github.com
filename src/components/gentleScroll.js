export default function ({ children, target }) {
	function clickHandler() {
		const targetPosition =
			document.querySelector(target).getBoundingClientRect().top + 1;
		// if (typeof beforeScroll == 'function') {
		//   beforeScroll().then(() => {
		//     window.scrollTo({
		//       top: targetPosition,
		//       behavior: 'smooth',
		//     });
		//   });
		// } else {
		//   window.scrollTo({
		//     top: targetPosition,
		//     behavior: 'smooth',
		//   });
		// }
		window.scrollBy({
			top: targetPosition,
			behavior: 'smooth',
		});
	}

	// biome-ignore lint/a11y/useKeyWithClickEvents: moving to button requires more useless styling
	// biome-ignore lint/a11y/noStaticElementInteractions: moving to button requires more useless styling
	return <div onClick={clickHandler}>{children}</div>;
}
