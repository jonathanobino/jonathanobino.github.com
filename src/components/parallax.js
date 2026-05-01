import { useEffect, useRef } from 'react';

export default function ({ children, background, speed = 3 }) {
	const wrapper = useRef(undefined);
	const rafId = useRef(null);

	useEffect(() => {
		const node = wrapper.current;
		if (!node) {
			return undefined;
		}

		const parallax = node.querySelector('.parallax');
		if (!parallax) {
			return undefined;
		}

		const updatePosition = () => {
			rafId.current = null;
			const { top, bottom } = node.getBoundingClientRect();
			const translate = parseInt((top * -1) / speed, 10);

			if (bottom > 0) {
				parallax.style.transform = `translate3d(0px,${translate}px,0px) scale(1.1,1.1)`;
			}
		};

		const onScroll = () => {
			if (rafId.current !== null) {
				return;
			}

			rafId.current = window.requestAnimationFrame(updatePosition);
		};

		updatePosition();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', onScroll);
			if (rafId.current !== null) {
				window.cancelAnimationFrame(rafId.current);
			}
		};
	}, [speed]);

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
