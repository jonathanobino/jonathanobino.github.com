import React from 'react';
import { Link } from 'react-router'

const BlogPost = React.createClass({
	render: function(){
		return (
				<div className='blogpost' style={{backgroundImage:this.props.postData.image}}>
					<div className="content" style={{background:this.props.postData.dominant || 'rgba(255,255,255,0.5)'}}>
						<p>{this.props.title}</p>
						<p><Link to={`/posts/${this.props.postData.id}`}>View</Link></p>
					</div>
				</div>
			)
	}
})

export default BlogPost;
