import { lazy, Suspense } from 'react';
import Parallax from '../components/parallax';
import Panel from '../components/panelSection';
import GentleScroll from '../components/gentleScroll';
import Loading from '../components/Loading';
const OpenSource = lazy(() => import('../components/openSource'));
const Codepen = lazy(() => import('../components/codepen'));
const Places = lazy(() => import('../components/places'));
const WhatIUse = lazy(() => import('../components/whatIUse'));
const WhoAmI = lazy(() => import('../components/whoAmI'));
const Footer = lazy(() => import('../components/footer'));
const ContactForm = lazy(() => import('../components/contactForm'));

const Home = () => {
	return (
		<>
			<Parallax background="url(/images/background.jpg)" speed={5}>
				<img src="/images/logo.png" alt="logo" />
				<GentleScroll target="main">
					<div className="mouse">
						<div className="upAndDown"></div>
					</div>
				</GentleScroll>
			</Parallax>
			<main>
				<Panel background="#F0F0F0">
					<Suspense fallback={<Loading />}>
						<WhoAmI />
						<WhatIUse />
						<Places />
						<OpenSource />
						<Codepen />
					</Suspense>
				</Panel>
			</main>
			<Suspense fallback={<Loading />}>
				<ContactForm />
				<Footer />
			</Suspense>
		</>
	);
};

export default Home;
