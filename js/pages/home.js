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
						<li><img src="http://svgporn.com/logos/express.svg"/></li>
						<li><img src="http://svgporn.com/logos/gulp.svg"/></li>
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
			<Panel isRow={true} background="#F0F0F0">
				<div className="small-12 columns text-center">
				<h2> Who I Am </h2>
				</div>
			 </Panel>
			)
	}
});

const Home = React.createClass({
	render: function(){
		return (<div>
				<Parallax background="url(/images/background.jpg)">
				<img src="/images/logo.png"/>
				<img src="/images/scroll.svg" className="scroll small"/>
				</Parallax>
				<ContactForm address="info@jonathanobino.xyz"/>
				<Footer/>
				</div>)
	}
})

export default Home;
