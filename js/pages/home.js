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

const Codepen = React.createClass({
	getInitialState(){
		return {
			pens:['//codepen.io/jonathanobino/embed/preview/obwBEz/?height=268&theme-id=0&default-tab=result',
				  '//codepen.io/jonathanobino/embed/preview/MaQNgY/?height=268&theme-id=0&default-tab=result']
		}
	},
	render(){
		return (
				<div className="row main">
						<div className="medium-2 large-2 columns text-right"><h2>Last Pens</h2></div>
						
						{this.state.pens.map((elem,index) =>{
							return <div className="medium-5 large-5 columns" key={index}>
							 <iframe height='268' scrolling='no' src={elem} frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{width: '100%'}} >
								</iframe>
								</div>
						})}
				</div>
			)
	}
})


const Medium = React.createClass({
	getInitialState(){
		return {
			posts:[]
		}
	},
	render(){
		return (
				<div className="row main">
						<div className="medium-2 large-2 columns text-right"><h2>Last blog posts</h2></div>
						<div className="medium-6 large-6 columns m-story">
							<a className="m-story" data-collapsed="true" href="https://medium.com/@threobin/do-you-really-need-global-npm-packages-a3f21dc2396f">Do you really need global NPM packages?</a>
						</div>
						<div className="medium-6 large-6 columns"></div>
						
				</div>
			)
	}
})


const Places = React.createClass({
	getInitialState(){
		return {
			places:[{
				description:{
					company:"Freelance",
					role:"Full Stack Developer",
					when:"01.2015 - now"
				}
			},
			{
				link:'http://www.addfuel.it',
				description:{
					company:"Fuel",
					role:"Front End Developer",
					when:"03.2015 - 06.2015",
					technology:"Angular, jQuery, CSS3, HTML5"
				},
				imageSrc:'images/fuel.png'
			},{
				link:'http://www.majeeko.com',
				description:{
					company:"Majeeko",
					role:"Full Stack Developer",
					when:"09.2015 - 12.2015",
					technology:"Angular, jQuery, CSS3, HTML5, Node JS, Mongo DB, Express"
				},
				imageSrc:'images/majeeko.png'
			}]
		}
	},
	render(){
		return (
			<div className="row main">
						<div className="medium-2 large-2 columns text-right"><h2>Some places where I've worked</h2></div>
						<div className="medium-10 large-10 columns">
								{this.state.places.map((elem,index)=><CareerItem item={elem} key={index}/>)}
						</div>
					</div>)
	}
})


const WhatIUse = React.createClass({
	render(){
		return (
			<div className="row main">
						<div className="medium-2 large-2 columns text-right"><h2>What I use</h2></div>
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
					</div>)
	}
})

const Portfolio = React.createClass({
	getInitialState(){
		return {
			portfolio:[{
				link:'http://ratemyc.herokuapp.com',
				description:'Rate My Customer',
				imageSrc:'/images/ratemy.png'
			},{
				link:'https://github.com/jonathanobino/kiko-hack',
				description:'Kiko Experience (hackathon app)',
				imageSrc:'/images/kiko.png'
			},{
				link:'http://www.digigrafonline.it',
				description:'Digigraf',
				imageSrc:'/images/digigraf.png'
			}]
		}
	},
	render(){
		return (
			<div className="row main">
				<div className="medium-2 large-2 columns text-right"><h2>Some work that I've done</h2></div>
				<div className="medium-10 large-10 columns">
					<div className="row">
						{this.state.portfolio.map((elem,index)=>(<div className="medium-4 columns" key={index}><PortfolioItem item={elem}/></div>))}
					</div>
				</div>
			</div>)
	}
})
const WhoAmI = React.createClass({
	render: function(){
		return (
				<div className="row main">
					<div className="medium-2 large-2 columns text-right"><h2>About me</h2></div>
					<div className="medium-10 large-10 columns">
					<p>Hello, my name is Jonathan Obino and I'm a Full Stack Web Developer.<br/>
					I work with Javascript both in the front end with frameworks and libraries like <strong>Angular</strong> or <strong>React</strong> and I work on the backend with frameworks like <strong>Express</strong> or <strong>Koa</strong>.<br/>
					I develop mobile applications with <strong>React Native</strong> or with <strong>Ionic</strong> to archeive the best solution with the right tool for the project.<br/>
					I like to stay up-to-date with the new technology and to experiment with them as soon they are available.<br/>
					As you can see on my github<a href="https://github.com/jonathanobino/jonathanobino.github.com" target="_blank"> this website is built using React</a>, bundled with WebPack and written in ES6.
					</p>
					</div>
				</div>
			)
	}
});

const Home = React.createClass({
	render: function(){
		return (<div>
				<Parallax background="url(/images/background.jpg)">
				<img src="/images/logo.png" alt="logo"/>
				<GentleScroll target="main"><img src="/images/scroll.svg" className="scroll small" alt="scroll"/></GentleScroll>
				</Parallax>
				<main>
					<Panel background="#F0F0F0">
						<WhoAmI/>
						<WhatIUse/>
						<Portfolio/>
						<Places/>
						<Codepen/>
					</Panel>
				</main>
				<ContactForm address="info@jonathanobino.xyz"/>
				<Footer/>
				</div>)
	}
})

export default Home;
