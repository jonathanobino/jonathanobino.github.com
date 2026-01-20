const WhoAmI = () => {
	return (
		<div className="row main">
			<div className="medium-2 large-2 columns text-right">
				<h2>About me</h2>
			</div>
			<div className="medium-10 large-10 columns">
				<p>
					Hello, my name is Jonathan Obino and I'm a Full Stack Web Developer.
					<br />I work with Javascript both in the front end with frameworks and
					libraries like <strong>React</strong> and on the backend with
					frameworks like <strong>Express</strong> or <strong>Koa</strong>.
					<br />I develop mobile applications with <strong>React Native</strong>{' '}
					or with <strong>Ionic</strong> to archeive the best solution with the
					right tool for the project.
					<br />
					With nearly 5 years of experience I've worked with the latest
					technologies in software development, mastering the so-called "best
					practices" for structuring projects, developing maintanable software,
					gitflow and collaborated with amazing skilled people across different
					teams.
					<br />I like to stay up-to-date with the new technology and to
					experiment with them as soon they are available.
					<br />
					As you can see on my github{' '}
					<a
						href="https://github.com/jonathanobino/jonathanobino.github.com"
						target="_blank"
						rel="noopener"
					>
						this website is built using React
					</a>
					, bundled with <s>WebPack</s> Parcel and written in ES6. <br />
				</p>
			</div>
		</div>
	);
};

export default WhoAmI;
