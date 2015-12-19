import React from 'react';
import FullScreen from '../components/fullScreenHeader';
import ContactForm from '../components/contactForm';
import BlogPost from '../components/blogPost';

const Home = React.createClass({
	render: function(){
		return (<div>
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
