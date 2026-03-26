export default function TechStack({techStack}){
  return (
			<ul className="techStack">
				{techStack.map((el) => (
					<li key={el}>
						<TechLabel label={el} />
					</li>
				))}
			</ul>
		);
}

function TechLabel({label}){
  return <span className="techStackLabel">{label}</span>
}