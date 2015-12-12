import React from 'react';
import jQuery from 'jQuery';
const $ = jQuery;

const GentleScroll = React.createClass({
	render:function(){
		return <span onClick={this.clickHandler}>{this.props.children}</span>
	},
	clickHandler:function(){
		const targetPosition = $(this.props.target).getBoundingClientRect().top;
		if( typeof this.props.beforeScroll == 'function'){
			this.props.beforeScroll()
			.then(()=>{
				$(window).animate({
					scrollTop:targetPosition
				},this.props.timing || 300)
			})
		} else {
			$(window).animate({
				scrollTop:targetPosition
			},this.props.timing || 300)
		}
	}
})