import React, {Component} from 'react'
import Velocity from 'velocity-animate'

class GentleScroll extends Component {
	constructor(props) {
		super(props)
		this.clickHandler = this.clickHandler.bind(this)
	}
	render() {
		return <div onClick={this.clickHandler}>{this.props.children}</div>
	}

	clickHandler(){
		const target = document.querySelector(this.props.target)
		const targetPosition = target.getBoundingClientRect().top +1;
		if( typeof this.props.beforeScroll == 'function'){
			this.props.beforeScroll()
			.then(()=>{
				Velocity(target,'scroll',{
					duration: this.props.timing || 1000
				})
			})
		} else {
			Velocity(target,'scroll',{
				duration: this.props.timing || 1000
			})
		}
	}
}

export default GentleScroll