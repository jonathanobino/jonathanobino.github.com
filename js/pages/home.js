import React from 'react';
import FullScreen from '../components/fullScreenHeader';
import ContactForm from '../components/contactForm';
import Parallax from '../components/parallax';
import Footer from '../components/footer';
import Panel from '../components/panelSection';
import { Link } from 'react-router'

const Technology = React.createClass({
	render: function(){
		return (<Panel background="#F0F0F0" isRow="true">
					<div className="small-12 columns text-center">
					<h2> What I use </h2>
					<ul className="inline-list same-height-child">
						<li><img src="http://svgporn.com/logos/html-5.svg"/></li>
						<li><img src="http://svgporn.com/logos/sass.svg"/></li>
						<li><img src="http://svgporn.com/logos/angular-icon.svg"/></li>
						<li><img src="http://svgporn.com/logos/react.svg"/></li>
						<li><img src="http://svgporn.com/logos/nodejs-icon.svg"/></li>
						<li><img src="http://svgporn.com/logos/mongodb.svg"/></li>
						<li><img src="http://svgporn.com/logos/gulp.svg"/></li>
						<li><img src="http://svgporn.com/logos/express.svg"/></li>
					</ul>
					</div>
				</Panel>)
	}
})


const What = React.createClass({
	render: function(){
		return (<Panel background="#F0F0F0" isRow="true">
					<div className="small-12 columns text-center">
					<h2> What I do </h2>
					</div>
					<div className="medium-4 columns same-min-height">
						<h2> Web Development </h2>
					</div>
					<div className="medium-4 columns same-min-height">
						<h2> Web Development </h2>
					</div>
					<div className="medium-4 columns same-min-height">
						<h2> Web Development </h2>
					</div>
				</Panel>)
	}
})

const WhoAmI = React.createClass({
	render: function(){
		return (
			<Panel background="#F0F0F0">
				<div className="row main">
					<div className="medium-2 large-2 columns text-right"><h2>About me</h2></div>
					<div className="medium-10 large-10 columns">
					<p>Hello, my name is Jonathan Obino and I'm a Full Stack Web Developer.<br/>
					I work with javascript both in the front end with frameworks and libraries like <strong>Angular</strong> or <strong>React</strong> and I work on the backend with frameworks like Express or Koa.<br/>
					I develop mobile applications with <strong>React Native</strong> or with <strong>Ionic</strong> to archeive the best solution with the right tool for the project.
					</p>
					</div>
				</div>
				<div className="row main">
					<div className="medium-2 large-2 columns text-right"><h2>What I Use</h2></div>
					<div className="medium-10 large-10 columns">
						<ul className="inline-list same-height-child">
							<li><img src="http://svgporn.com/logos/html-5.svg"/></li>
							<li><img src="http://svgporn.com/logos/sass.svg"/></li>
							<li><img src="http://svgporn.com/logos/angular-icon.svg"/></li>
							<li><img src="http://svgporn.com/logos/react.svg"/></li>
							<li><img src="http://svgporn.com/logos/nodejs-icon.svg"/></li>
							<li><img src="http://svgporn.com/logos/mongodb.svg"/></li>
							<li><img src="http://svgporn.com/logos/gulp.svg"/></li>
							<li><img src="http://svgporn.com/logos/express.svg"/></li>
						</ul>
					</div>
				</div>
			 </Panel>
			)
	}
});

//<li>html5</li>
//<li>SASS</li>
//<li>Angular</li>
//<li>React</li>
//<li>Node JS</li>
//<li>Mongo DB</li>
//<li>Gulp</li>
//<li>Express</li>

const Home = React.createClass({
	render: function(){
		return (<div>
				<Parallax background="url(/images/background.jpg)">
				<img src="/images/logo.png"/>
				<img src="/images/scroll.svg" className="scroll small"/>
				</Parallax>
				<WhoAmI/>
				<ContactForm address="info@jonathanobino.xyz"/>
				<Footer/>
				</div>)
	}
})

export default Home;
