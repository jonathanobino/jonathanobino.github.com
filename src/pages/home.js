import { useState } from 'react';
import Skeleton from '../components/Skeleton';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';
import { ActiveSectionContext } from '../API/ActiveSectionContext';


export default function Home() {
	const [activeSection, setActiveSection] = useState('about');
	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
			}}
		>
			<Skeleton left={<LeftColumn />} right={<RightColumn />} />
		</ActiveSectionContext.Provider>
	);
}
