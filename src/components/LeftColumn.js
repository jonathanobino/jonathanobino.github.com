import Navigation from './Navigation';
import FooterLinks from './FooterLinks';

export default function LeftColumn() {
	return (
		<>
			<h1>Jonathan Obino</h1>
			<h2>Senior Frontend Developer</h2>
			<h3>
				I architect and build large-scale enterprise applications with a focus
				on high-performance architecture and clean software engineering.
			</h3>
			<Navigation />
			<FooterLinks />
		</>
	);
}
