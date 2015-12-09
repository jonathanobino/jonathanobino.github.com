import React from 'react';
import FullScreen from '../components/fullScreenHeader';
import superagent from 'superagent';
import ContactForm from '../components/contactForm';
import BlogPost from '../components/blogPost';

const Home = React.createClass({
	getInitialState:function(){
		return {
			post:{},
			content:{__html:''}
		}
	},
	render: function(){
		return (<div>
				<div className="row">
					<div className="small-12 columns">
						<h1>{this.state.post.title}</h1>
						<div className="content" dangerouslySetInnerHTML={this.state.content}></div>
					</div>
				</div>
					<ContactForm/>
				</div>)
	},
	componentDidMount:function(){
				superagent.get(`https://api.cosmicjs.com/v1/blogposts/object/${this.props.params.slug}`)
				.end((err,res) => {
					console.log(res.body);
					this.setState({
						post:res.body.object,
						content:{__html:res.body.object.content}
					})
				})
	}
})

export default Home;
