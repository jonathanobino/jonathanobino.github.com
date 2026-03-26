import { useState, useCallback, useEffect } from 'react';

export default function useIsInViewport() {
	const [visible, setVisible] = useState(false);
	const [ref, setRef] = useState(null);

	const getRef = useCallback((node) => {
		if (node !== null) setRef(node);
	}, []);

	useEffect(() => {
		const handler = (e) => {
			if (ref) {
				const coordinates = ref.getBoundingClientRect();
				if (e.wheelDelta < 0) {
					if (coordinates.top > 0 && coordinates.top < window.innerHeight) {
						setVisible(true);
					} else {
						setVisible(false);
					}
				}
				if (e.wheelDelta > 0) {
					if (
						coordinates.bottom > 0 &&
						coordinates.bottom < window.innerHeight
					) {
						setVisible(true);
					} else {
						setVisible(false);
					}
				}
			}
		};

		window.addEventListener('wheel', handler);
		return () => window.removeEventListener('wheel', handler);
	}, [ref]);

	return [getRef, visible];
}
