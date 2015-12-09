import React from 'react';
import { Link } from 'react-router'

const BlogPost = React.createClass({
	render: function(){
		return (
				<div className='blogpost' style={{backgroundImage:`url(${this.props.postData.metafields[0].value})`}}>
					<div className="content" style={{background:this.props.postData.dominant || 'rgba(255,255,255,0.5)'}}>
						<p>{this.props.postData.title}</p>
						<p><Link to={`/blog/${this.props.postData.slug}`}>View</Link></p>
					</div>
				</div>
			)
	}
})

export default BlogPost;
