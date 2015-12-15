import React from 'react';
import jQuery from 'jQuery';
const $ = jQuery;

const GentleScroll = React.createClass({
	render:function(){
		return <div onClick={this.clickHandler}>{this.props.children}</div>
	},
	clickHandler:function(){
		
		const targetPosition = document.querySelector(this.props.target).getBoundingClientRect().top + 1;
		if( typeof this.props.beforeScroll == 'function'){
			this.props.beforeScroll()
			.then(()=>{
				$('html,body').animate({
					scrollTop:targetPosition
				},this.props.timing || 1000)
			})
		} else {
			$('html,body').animate({
				scrollTop:targetPosition
			},this.props.timing || 1000)
		}
	}
})

export default GentleScroll