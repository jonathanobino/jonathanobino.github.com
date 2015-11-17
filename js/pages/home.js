import React from 'react';
import FullScreen from '../components/fullScreenHeader';
import ContactForm from '../components/contactForm';
import Parallax from '../components/parallax';
import Footer from '../components/footer';
import { Link } from 'react-router'

// const Head = React.createClass({
// 	render: function(){
// 		return	(<FullScreen background="url(http://marshall.org/wp-content/themes/marshall/img/featured-space-policy.jpg)" >
// 					<h1> Hello {this.props.name} from webpack and react !! </h1>
// 					<Link to="/about">About </Link>
// 				</FullScreen>)
// 	}
// })

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
