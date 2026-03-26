import { useContext, useEffect } from "react";
import useIsInViewport from "../API/useIsInViewport";
import { ActiveSectionContext } from "../API/ActiveSectionContext";
import WhatIUse from "./whatIUse";

const WhoAmI = () => {
	const { setActiveSection } = useContext(ActiveSectionContext);
	const [setRef, isVisible] = useIsInViewport();
	useEffect(() => {
			if (isVisible) setActiveSection('about');
		}, [isVisible, setActiveSection]);
	return (
		<div className="row main" id="about" ref={(node) => setRef(node)}>
			<h2>
				<span>01.</span> About Me
			</h2>
			<div className="columns">
				{/* <p>
					I am a Software Engineer dedicated to building robust, maintainable
					systems. My approach is rooted in the belief that great software isn't
					just about what the user sees, but how reliably and efficiently it
					performs under the hood.
					<br /> <br />
					Currently, I am a{' '}
					<strong>Senior Frontend Developer at Lynx SPA</strong>, where I
					engineer complex enterprise solutions.
					<br />
					<br />
					My daily focus is on mastering the 'best practices' of software
					development—from strict Gitflow to designing scalable project
					structures that stand the test of time.
					<br />I specialize in the JavaScript/TypeScript ecosystem, bridging
					the gap between high-concurrency backends (Node.js, Express, Koa) and
					complex, data-driven frontends (React). I don't just build features; I
					build systems that are easy to maintain and hard to break.
				</p> */}

				<section>
					<div>
						{/* <p>
							My journey into software engineering started in 2015, and since
							then, I’ve focused on building{' '}
							<strong class="text-tomato font-medium">
								robust, maintainable systems
							</strong>{' '}
							that solve complex problems.
							{/* I am a Full Stack Software Engineer
							who believes that great software isn't just about the interface,
							but about the reliability, scalability, and performance of the
							architecture under the hood.
						</p>

						<p>
							Currently, I am a{' '}
							<strong class="font-bold">
								Senior Frontend Developer at Lynx SPA
							</strong>
							, where I engineer large-scale enterprise applications. My daily
							focus is on mastering the "best practices" of software
							development—from strict{' '}
							<strong class="underline decoration-green-500">Gitflow</strong>{' '}
							and modular project structures to designing systems that are easy
							to maintain and hard to break.
						</p>

						<p>
							Throughout my 10 years of experience, I’ve specialized in the{' '}
							<strong class="font-mono text-base">JavaScript/TypeScript</strong>{' '}
							ecosystem. I bridge the gap between high-performance backends (
							<strong class="italic">Node.js, Express, Koa</strong>) and
							complex, data-driven frontends (
							<strong class="italic">React</strong>), while also delivering
							mobile solutions with React Native and Ionic.
						</p>

						<p>
							While my recent years have been dedicated to mastering the
							frontend at scale, my background as a{' '}
							<em>Full Stack Developer</em> allows me to bridge the gap between
							complex UI requirements and robust backend architectures
							(Node.js/Koa/Express), ensuring a seamless data flow across the
							entire stack.
						</p> */}

						<p>
							My journey into software engineering started in 2015, and since
							then, I’ve focused on building{' '}
							<strong>robust, maintainable systems</strong> that solve complex
							problems. Currently, I am a{' '}
							<strong>Senior Frontend Engineer at Lynx SPA</strong>, where I
							engineer large-scale enterprise applications. My daily focus is on
							mastering the best practices of software development; from strict{' '}
							<strong>Gitflow</strong> and modular project structures to
							designing systems that are easy to maintain and hard to break.
						</p>

						<p>
							Throughout my 10 years of experience, I’ve specialized in the{' '}
							<strong>JavaScript/TypeScript ecosystem</strong>. While my recent
							years have been dedicated to mastering the frontend at scale, my
							background as a <strong>Full Stack Developer</strong> allows me to
							bridge the gap between complex UI requirements and robust backend
							architectures.
						</p>

						<p>
							I ensure a seamless data flow across the entire stack, delivering
							high-performance solutions for both web and mobile platforms
							through <strong>React Native</strong>. In addition to my core
							expertise, I maintain a strong focus on{' '}
							<strong>software integrity</strong> and{' '}
							<strong>clean software engineering</strong>, ensuring that every
							architectural decision scales with the business needs.
						</p>

						{/* <p>
							I am an enthusiast of innovation and constant experimentation.
							This portfolio is a reflection of my core stack: built with{' '}
							<strong >React</strong>,
							written in{' '}
							<strong >ES6</strong>,
							and bundled with{' '}
							<strong >Parcel</strong>{' '}
							for an optimized build pipeline.
						</p> */}
					</div>

					{/* <div >
						<p >
							Some of the technologies I haved worked with:
						</p>
						<ul >
							<li >
								React, TypeScript
							</li>
							<li>
								Node.js, Express, Koa
							</li>
							<li>
								React Native,
							</li>
							<li>
								MongoDB, Gitflow,
							</li>
							<li>
								WebPack, Parcel
							</li>
						</ul>
					</div> */}
				</section>
				{/* <p>
					<br />I work with Javascript both in the front end with frameworks and
					libraries like <strong>React</strong> and on the backend with
					frameworks like <strong>Express</strong> or <strong>Koa</strong>.
					<br />I develop mobile applications with <strong>React Native</strong>{' '}
					or with <strong>Ionic</strong> to archive the best solution with the
					right tool for the project.
					<br />
					With nearly 10 years of experience I've worked with the latest
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
					, bundled with <strong>Parcel</strong> and written in ES6. <br />
				</p> */}
				<WhatIUse/>
			</div>
		</div>
	);
};

export default WhoAmI;
