import getSVGIcon from '../API/getSVGIcon';

export default function FooterLinks() {
	return (
		<div className="footer">
			<ul className="inline-list">
				<li>
					<a
						href="https://github.com/jonathanobino"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fa fa-github fa-2x"></i>
					</a>
				</li>
				<li>
					<a
						href="http://codepen.io/jonathanobino"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fa fa-codepen fa-2x"></i>
					</a>
				</li>
				<li>
					<a
						href="https://it.linkedin.com/in/jonathanobino"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fa fa-linkedin fa-2x"></i>
					</a>
				</li>
				<li>
					<a
						href="https://medium.com/@j.obino"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fa fa-medium fa-2x"></i>
					</a>
				</li>
			</ul>
		</div>
	);
}

export function Footer() {
	return (
		<div className='footer' style={{
			marginTop:'50px',
		}}>
			<p className="text-center">Jonathan Obino © {new Date().getFullYear()}</p>
			<p className="text-center credits">
				Made with <span className="fa fa-heart heart"></span> and{' '}
				<img src={getSVGIcon('react')} alt="React JS" />
			</p>{' '}
		</div>
	);
}
