import { useContext } from 'react';
import { ActiveSectionContext } from '../API/ActiveSectionContext';
import GentleScroll from './gentleScroll';

export default function Navigation() {
	const { activeSection, setActiveSection } = useContext(ActiveSectionContext);

	return (
		<nav>
			<ul>
				<li className={activeSection === 'about' ? 'active' : ''}>
					<GentleScroll
						target="#about"
						callback={() => setActiveSection('about')}
					>
						<span className="spacer"> </span>
						About
					</GentleScroll>
				</li>
				<li className={activeSection === 'career' ? 'active' : ''}>
					<GentleScroll
						target="#career"
						callback={() => setActiveSection('career')}
					>
						<span className="spacer"> </span>
						Career
					</GentleScroll>
				</li>
				<li className={activeSection === 'projects' ? 'active' : ''}>
					<GentleScroll
						target="#projects"
						callback={() => setActiveSection('projects')}
					>
						<span className="spacer"> </span>
						Projects
					</GentleScroll>
				</li>
				<li className={activeSection === 'contactMe' ? 'active' : ''}>
					<GentleScroll
						target="#contactMe"
						callback={() => setActiveSection('contactMe')}
					>
						<span className="spacer"> </span>
						Contact me
					</GentleScroll>
				</li>
			</ul>
		</nav>
	);
}
