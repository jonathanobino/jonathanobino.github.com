import { useEffect, useState } from 'react';

function isElementInViewport(node) {
	const coordinates = node.getBoundingClientRect();

	return coordinates.top < window.innerHeight && coordinates.bottom > 0;
}

export default function useIsInViewport() {
	const [visible, setVisible] = useState(false);
	const [ref, setRef] = useState(null);

	useEffect(() => {
		if (!ref || typeof window === 'undefined') {
			return undefined;
		}

		if (typeof IntersectionObserver === 'function') {
			const observer = new IntersectionObserver(([entry]) => {
				setVisible(entry.isIntersecting);
			});

			observer.observe(ref);
			return () => observer.disconnect();
		}

		const updateVisibility = () => {
			setVisible(isElementInViewport(ref));
		};

		updateVisibility();
		window.addEventListener('scroll', updateVisibility, { passive: true });
		window.addEventListener('resize', updateVisibility);

		return () => {
			window.removeEventListener('scroll', updateVisibility);
			window.removeEventListener('resize', updateVisibility);
		};
	}, [ref]);

	return [setRef, visible];
}
