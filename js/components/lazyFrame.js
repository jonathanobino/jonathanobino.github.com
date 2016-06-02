import React from 'react'
import ReactDom from 'react-dom'

const LazyFrame = React.createClass({
	getInitialState(){
		return {
			link:""
		}
	},
	render(){
		return (<iframe height='268' scrolling='no' src={this.state.link} frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{width: '100%'}} >
									</iframe>)
	},
	componentDidMount(){

		const element = ReactDom.findDOMNode(this);
		const {top} = element.getBoundingClientRect();
		this.setState({top})

		window.addEventListener('scroll',this.listener);
	},
	listener(){
		if(window.scrollY + window.innerWidth + 100 > this.state.top) this.setState({link:this.props.link});
	},
	componentWillUnmount(){
		window.removeEventListener('scroll',this.listener);
	}
})


export default LazyFrame