import React, {Component} from 'react'
import FullScreen from '../components/fullScreenHeader'
import ContactForm from '../components/contactForm'
import Parallax from '../components/parallax'
import PortfolioItem from '../components/portfolioItem'
import CareerItem from '../components/careerItem'
import Footer from '../components/footer'
import Panel from '../components/panelSection'
import GentleScroll from '../components/gentleScroll'
import axios from 'axios'
import Loading from '../components/Loading'
import GitHub from '../components/githubRepo'
import getSVGIcon from '../API/getSVGIcon'
import {LazyImage, LazyFrame}  from 'lazy-react'
import { throws } from 'assert';

class Codepen extends Component {
	constructor(props){
		super(props)
		this.mapIdsToFrame = this.mapIdsToFrame.bind(this)
		this.state = {
			pens: this.mapIdsToFrame([
				'VedwMz', // product card
				'yeqgvr', // music ui
				'ZWpjzR', // weather dashboard
				'obwBEz',// twitter hearth animation
			])
		}
		
	}

	render() {
		return <div className="row main">
			<div className="medium-2 large-2 columns text-right"><h2>My Popular Pens</h2></div>
			<div className="medium-10 large-10 columns">{
				this.state.pens.map((elem,index) => {
				return <div className="medium-6 large-6 columns" key={elem.id}>
							<LazyFrame key={elem.id} link={elem.link} height={268}></LazyFrame>
						</div>
				})}
			</div>
		</div>
	}

	mapIdsToFrame(array){
		return array.map(elem => ({
			id:elem,
			link: '//codepen.io/jonathanobino/embed/preview/' + elem + '/?height=268&theme-id=0&default-tab=result'
		}))
	}

	componentDidMount(){
		// api is down for the moment
		// axios.get('https://cpv2api.com/pens/popular/jonathanobino')
		// .then(result => {
		// 	console.log(result)
		// 	if(result.data.success){
		// 		let done = result.data.data.map(elem => {
		// 			let id = elem.link.split('/').pop();
		// 			return {
		// 				id,
		// 				link:'//codepen.io/jonathanobino/embed/preview/'+id+'/?height=268&theme-id=0&default-tab=result'
		// 			}
		// 		})
		// 		this.setState({
		// 			pens:done.slice(0,4)
		// 		});
		// 	}
		// })
		// .catch(err => console.log(err))
	}
}


class Medium extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts:[]
		}
	}

	render(){
		return <div className="row main">
				<div className="medium-2 large-2 columns text-right"><h2>Last blog posts</h2></div>
				<div className="medium-6 large-6 columns m-story">
					<a className="m-story" data-collapsed="true" href="https://medium.com/@threobin/do-you-really-need-global-npm-packages-a3f21dc2396f">Do you really need global NPM packages?</a>
				</div>
				<div className="medium-6 large-6 columns"></div>
		</div>
	}
}

class Places extends Component {
	constructor(props) {
		super(props)
		this.state = {
			places:[{
				description:{
					company:"Freelance",
					role:"Full Stack Developer",
					when:"01.2015 - now"
				}
			},{
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
			},{
				link:'https://www.mvlabs.it',
				description:{
					company:"MV labs",
					role:"Full Stack Developer - collaborator",
					when:"2016",
					technology:"React, jQuery, Node JS, HTML5"
				},
				imageSrc:'images/mv.jpg'
			}]
		}
	}

	render(){
		return <div className="row main">
			<div className="medium-2 large-2 columns text-right"><h2>Some places where I've worked</h2></div>
			<div className="medium-10 large-10 columns">{
				this.state.places.map((elem,index)=>
					<CareerItem item={elem} key={index}/>)
			}</div>
		</div>
	}
}


const WhatIUse = () =>{
		return <div className="row main">
			<div className="medium-2 large-2 columns text-right"><h2>What I use</h2></div>
			<div className="medium-10 large-10 columns">
				<ul className="inline-list same-height-child">
					<li><LazyImage link={getSVGIcon('html')} alt="HTML5"/></li>
					<li><LazyImage link={getSVGIcon('sass')} alt="SASS"/></li>
					<li><LazyImage link={getSVGIcon('angular')} alt="Angular"/></li>
					<li><LazyImage link={getSVGIcon('react')} alt="React JS"/></li>
					<li><LazyImage link={getSVGIcon('nodejs')} alt="Node JS"/></li>
					<li><LazyImage link={getSVGIcon('mongodb')} alt="Mongo DB"/></li>
					<li><LazyImage link={getSVGIcon('gulp')} alt="Gulp JS"/></li>
					<li><LazyImage link={getSVGIcon('express')} alt="Express"/></li>
				</ul>
			</div>
		</div>
};

class Portfolio extends Component {
	constructor(props) {
		super(props)
		this.state = {
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
	}

	render() {
		return <div className="row main">
			<div className="medium-2 large-2 columns text-right"><h2>Some work that I've done</h2></div>
			<div className="medium-10 large-10 columns">
				<div className="row">{
					this.state.portfolio.map((elem,index) =>(
						<div className="medium-4 columns" key={index}>
							<PortfolioItem item={elem}/>
						</div>)
					)
				}</div>
			</div>
		</div>
	}
}

const WhoAmI = ()=>{
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
};

class OpenSource extends Component {
	constructor(props) {
		super(props)
		this.state = {
			projects:[{
				endpoint:'https://api.github.com/repos/jonathanobino/react-lazy'
			},{
				endpoint:'https://api.github.com/repos/jonathanobino/rately'
			}],
			results:[]
		}
	}
	render() {
		return <div className="row main">
			<div className="medium-2 large-2 columns text-right"><h2>Open Source Projects</h2></div>
			<div className="medium-10 large-10 columns spaceBetween">
				{this.state.results.length === 0 ? <Loading/> : this.state.results.map((elem, index) => <GitHub {...elem} key={index}/>)}
			</div>
		</div>
	}
	componentDidMount() {
		Promise.all(this.state.projects.map(elem => axios.get(elem.endpoint)))
		.then(values => {
			this.setState({
				results:values.map(elem => elem.data)
			})
		})
	}
}

const Home = ()=>{
		return (
			<div>
				<Parallax background="url(/images/background.jpg)">
					<img src="/images/logo.png" alt="logo"/>
					<GentleScroll target="main">
						<div className="mouse">
							<div className="upAndDown">
							</div>
						</div>
					</GentleScroll>
				</Parallax>
				<main>
					<Panel background="#F0F0F0">
						<WhoAmI/>
						<WhatIUse/>
						<Portfolio/>
						<Places/>
						<OpenSource/>
						<Codepen/>
					</Panel>
				</main>
				<ContactForm address="jonobin@gmail.com"/>
				<Footer/>
			</div>
		)
}

export default Home