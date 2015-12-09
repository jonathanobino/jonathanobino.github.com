import React from 'react';
import FullScreen from '../components/fullScreenHeader';
import ContactForm from '../components/contactForm';
import Parallax from '../components/parallax';
import Footer from '../components/footer';
import BlogPost from '../components/blogPost';
import Panel from '../components/panelSection';
import superagent from 'superagent';
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

const LastBlogPosts = React.createClass({
	getInitialState:function(){
		return {
			blogPosts:[]
		};
	},
	render:function(){
		return <Panel background="tomato" isRow={true}>
					{this.state.blogPosts.map(elem=>{
						return <div className="medium-4 columns"><BlogPost postData={elem} key={elem._id}/></div>
					})}
			   </Panel>
	},
	componentDidMount:function(){
				superagent.get(`https://api.cosmicjs.com/v1/blogposts/objects?pretty=true&limit=3`)
				.end((err,res) => {
					console.log(res.body);
					this.setState({
						blogPosts:res.body.objects
					})
				})
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

const Projects = React.createClass({
	render: function(){
		return (<div><Panel background="#F0F0F0" isRow="true">
					<div className="small-12 columns text-center">
					<h2> Some Projects I've Done </h2>
					</div>
					<div className="columns same-min-height">
						<h2> Rate My Customer </h2>
					</div>
					<div className="columns same-min-height">
						<h2> Kiko Hackathon App </h2>
					</div>
					<div className="columns same-min-height">
						<h2> Treehouse Web Video Download </h2>
					</div>
				</Panel>
				<Panel background="#F0F0F0" isRow="true">
					<div className="small-12 columns text-center">
					<h2> Some Client's Work </h2>
					</div>
					<div className="columns same-min-height">
						<h2> Digigraf's website </h2>
					</div>
				</Panel>
				</div>)
	}
})

const WhoAmI = React.createClass({
	render: function(){
		return (
			<Panel background="#F0F0F0">
				<div className="row">
					<div className="small-12 columns text-center">
						<h2> Who I Am </h2>
					</div>
				</div>
				<div className="row">
					<div className="columns">
						<p> I'm Jonathan Obino, a passionate web developer.
						My goal is to provide to the clients the best solution that suits their needs, provided
						with a pleasant design and an unique user experience.
						Constantly learning and experiencing new things. </p>
					</div>
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
				<WhoAmI/>
				<Projects/>
				<Technology/>
				<ContactForm address="info@jonathanobino.xyz"/>
				<Footer/>
				</div>)
	}
})

export default Home;
