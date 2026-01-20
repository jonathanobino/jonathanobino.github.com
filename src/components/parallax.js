import { useEffect, useRef, useCallback } from 'react';

export default function ({ children, background, speed = 3 }) {
	const wrapper = useRef(undefined);

	const scrollHandler = useCallback((wrapper) => {
		const parallax = wrapper.querySelector('.parallax');
		return () => {
			const { top, bottom } = wrapper.getBoundingClientRect();
			const translate = parseInt((top * -1) / speed, 10);
			if (bottom > 0) {
				window.requestAnimationFrame(() => {
					parallax.style.transform = `translate3d(0px,${translate}px,0px) scale(1.1,1.1)`;
				});
			}
		};
	});

	useEffect(() => {
		if (wrapper.current) {
			window.addEventListener('scroll', scrollHandler(wrapper.current));
			return window.removeEventListener(
				'scroll',
				scrollHandler(wrapper.current),
			);
		}
	}, [scrollHandler]);

	return (
		<div className="wrapper" ref={wrapper}>
			<div
				style={{
					background,
				}}
				className="parallax"
			/>
			<div className="container">
				<div className="content">{children}</div>
			</div>
		</div>
	);
}
