import React from 'react';
import FullScreen from '../components/fullScreenHeader';
import ContactForm from '../components/contactForm';
import BlogPost from '../components/blogPost';

const Head = React.createClass({
	render: function(){
		return	(<FullScreen background="url(http://marshall.org/wp-content/themes/marshall/img/featured-space-policy.jpg)" >
					<h1> Hello {this.props.name} from webpack and react !! </h1>
				</FullScreen>)
	}
})

const Home = React.createClass({
	render: function(){
		return (<div>
				<Head name="Jonathan"/>
				<div className="row">
				{Array.from(new Array(8)).map((elem,index)=>{
					return (<div className="medium-6 columns collapse fullwidth">
								<BlogPost postData={{image:'url(http://marshall.org/wp-content/themes/marshall/img/featured-space-policy.jpg)',id:index}}key={index}/>
							</div>)
					
					})}
				<div className="clearfix"></div>
				</div>
				<ContactForm/>
				</div>)
	}
})

export default Home;
