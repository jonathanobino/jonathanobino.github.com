import { useContext, useEffect } from 'react';
import { ActiveSectionContext } from '../API/ActiveSectionContext';
import useIsInViewport from '../API/useIsInViewport';
import CareerItem from '../components/careerItem';

const places = [
	{
		link: 'https://www.lynxspa.com/',
		description: {
			company: 'Lynx SPA',
			role: 'Senior Frontend Developer',
			when: '02.2022 - Present',
			technology: [
				'React',
				'Redux',
				// 'WebPack',
				// 'Vite',
				'Typescript',
				'Module federation',
				'TanstackQuery',
			],
			text: 'Leading the frontend evolution of a major mobility platform. I heavily contributed to the **core architecture**, spearheading the refactoring from a monolithic structure to a **Microfrontend** ecosystem to improve scalability and team autonomy. Additionally, I co-engineered a custom, high-extensibility **CRUD** framework from the ground up for a leading insurance group, focusing on rapid interface generation and strict type safety.',
		},
		imageSrc: '/images/lynx.svg',
	},
	{
		link: 'https://www.mvlabs.it',
		description: {
			company: 'MV labs',
			role: 'Full Stack Developer - Contractor',
			when: '2016,2019',
			technology: ['React', 'jQuery', 'NodeJS', 'Typescript'],
			text: 'Orchestrated the complete rewrite of a large-scale booking platform. I architected a **custom Server-Side Rendering (SSR) engine** from scratch to optimize SEO and performance, successfully migrating the legacy codebase to a modern reactive framework. I also developed a **modular management system** featuring a dynamic widget-based architecture, allowing users to compose their dashboard with hot-swappable components.',
		},
		imageSrc: '/images/mv.jpg',
	},
	{
		link: 'http://majeeko.com',
		description: {
			company: 'Majeeko',
			role: 'Full Stack Developer',
			when: '09.2015 - 12.2015',
			technology: ['Angular', 'NodeJS', 'MongoDB', 'Express'],
			text: 'Engineered real-time synchronization tools for social-to-web content automation. Beyond the core product, I designed and built the **internal business intelligence suite**, encompassing client CRM, sales tracking, and advanced data visualization modules to streamline company operations.',
		},
		imageSrc: '/images/majeeko.png',
	},
	{
		link: 'http://www.addfuel.it',
		description: {
			company: 'Fuel',
			role: 'Front End Developer',
			when: '03.2015 - 06.2015',
			technology: ['Angular', 'jQuery'],
			text: 'Focused on the pixel-perfect implementation of responsive web interfaces. I specialized in translating complex design requirements into high-performance components using AngularJS, ensuring cross-browser consistency and fluid user interactions for high-traffic marketing platforms.',
		},
		imageSrc: 'images/fuel.png',
	},
	{
		description: {
			company: 'Freelance',
			role: 'Full Stack Developer',
			when: '2015 - 2021',
			technology: ['React', 'Node JS', 'MongoDB', 'Express'],
			text: 'Dedicated to mastering the **JavaScript/TypeScript** ecosystem through various end-to-end projects. My freelance tenure was focused on building robust full-stack architectures, refining my approach to clean code, and exploring the boundaries of scalable frontend systems before transitioning into senior corporate roles.',
		},
	},
];

export default function Career() {
	const [setRef, isVisible] = useIsInViewport();
	const { setActiveSection } = useContext(ActiveSectionContext);

	useEffect(() => {
		if (isVisible) setActiveSection('career');
	}, [isVisible, setActiveSection]);

	return (
		<div className="row main" id="career" ref={(node) => setRef(node)}>
			<h2>
				<span>02.</span> Career
			</h2>
			<div className="columns">
				{places.map((elem) => (
					<CareerItem item={elem} key={elem.description.company} />
				))}
			</div>
		</div>
	);
}
