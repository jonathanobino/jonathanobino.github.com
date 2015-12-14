import React from 'react';
import FullScreen from '../components/fullScreenHeader';
import ContactForm from '../components/contactForm';
import Parallax from '../components/parallax';
import PortfolioItem from '../components/portfolioItem';
import CareerItem from '../components/careerItem';
import Footer from '../components/footer';
import Panel from '../components/panelSection';
import GentleScroll from '../components/gentleScroll';
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
	getInitialState:function(){
		return {
			portfolio:[{
				link:'http://www.digigrafonline.it',
				description:'Digigraf',
				imageSrc:'/images/digigraf.png'
			},{
				link:'http://ratemyc.herokuapp.com',
				description:'Rate My Customer',
				imageSrc:'/images/ratemy.png'
			},{
				link:'https://github.com/jonathanobino/kiko-hack',
				description:'Kiko Experience (hackathon app)',
				imageSrc:'/images/kiko.png'
			}],
			places:[{
				description:{
					role:"Freelance Web Developer",
					when:"01.2015 - now"
				}
			},
			{
				link:'http://www.addfuel.it',
				description:{
					role:"Front End Developer",
					when:"03.2015 - 06.2015",
					technology:"Angular, jQuery, CSS3, HTML5"
				},
				imageSrc:'images/fuel.png'
			},{
				link:'http://www.majeeko.com',
				description:{
					role:"Full Stack Developer",
					when:"09.2015 - 11.2015",
					technology:"Angular, jQuery, CSS3, HTML5, Node JS, Mongo DB, Express"
				},
				imageSrc:'images/majeeko.png'
			}]
		}
	},
	render: function(){
		return (
			<main>
				<Panel background="#F0F0F0">
					<div className="row main">
						<div className="medium-2 large-2 columns text-right"><h2>About me</h2></div>
						<div className="medium-10 large-10 columns">
						<p>Hello, my name is Jonathan Obino and I'm a Full Stack Web Developer.<br/>
						I work with Javascript both in the front end with frameworks and libraries like <strong>Angular</strong> or <strong>React</strong> and I work on the backend with frameworks like <strong>Express</strong> or <strong>Koa</strong>.<br/>
						I develop mobile applications with <strong>React Native</strong> or with <strong>Ionic</strong> to archeive the best solution with the right tool for the project.
						</p>
						</div>
					</div>
					<div className="row main">
						<div className="medium-2 large-2 columns text-right"><h2>Some work that I've done</h2></div>
						<div className="medium-10 large-10 columns">
							<div className="row">
								{this.state.portfolio.map((elem,index)=>(<div className="medium-4 columns" key={index}><PortfolioItem item={elem}/></div>))}
							</div>
						</div>
					</div>
					<div className="row main">
						<div className="medium-2 large-2 columns text-right"><h2>Some places where I've worked</h2></div>
						<div className="medium-10 large-10 columns">
								{this.state.places.map((elem,index)=><CareerItem item={elem} key={index}/>)}
						</div>
					</div>
					<div className="row main">
						<div className="medium-2 large-2 columns text-right"><h2>What I Use</h2></div>
						<div className="medium-10 large-10 columns">
							<ul className="inline-list same-height-child">
								<li><img src="http://svgporn.com/logos/html-5.svg" alt="HTML5"/></li>
								<li><img src="http://svgporn.com/logos/sass.svg" alt="SASS"/></li>
								<li><img src="http://svgporn.com/logos/angular-icon.svg" alt="Angular"/></li>
								<li><img src="http://svgporn.com/logos/react.svg" alt="React JS"/></li>
								<li><img src="http://svgporn.com/logos/nodejs-icon.svg" alt="Node JS"/></li>
								<li><img src="http://svgporn.com/logos/mongodb.svg" alt="Mongo DB"/></li>
								<li><img src="http://svgporn.com/logos/gulp.svg" alt="Gulp JS"/></li>
								<li><img src="http://svgporn.com/logos/express.svg" alt="Express"/></li>
							</ul>
						</div>
					</div>
				 </Panel>
			 </main>
			)
	}
});

const Home = React.createClass({
	render: function(){
		return (<div>
				<Parallax background="url(/images/background.jpg)">
				<img src="/images/logo.png"/>
				<GentleScroll target="main"><img src="/images/scroll.svg" className="scroll small"/></GentleScroll>
				</Parallax>
				<WhoAmI/>
				<ContactForm address="info@jonathanobino.xyz"/>
				<Footer/>
				</div>)
	}
})

export default Home;
