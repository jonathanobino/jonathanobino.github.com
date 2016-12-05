import React, {Component} from 'react';
import jQuery from 'jQuery';
const $ = jQuery;

class GentleScroll extends Component {
	constructor(props) {
		super(props)
		this.clickHandler = this.clickHandler.bind(this)
	}
	render() {
		return <div onClick={this.clickHandler}>{this.props.children}</div>
	}

	clickHandler(){
		const targetPosition = $(this.props.target).offset().top +1;
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
}

export default GentleScroll