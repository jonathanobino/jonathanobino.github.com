import React from 'react'
import ReactDom from 'react-dom'

const LazyBackgroundImage = React.createClass({
	getInitialState(){
		return {
			link:""
		}
	},
	render(){
		return <div className={this.props.className} style={{backgroundImage:`url(${this.state.link})`}}></div>
	},
	componentDidMount(){

		const element = ReactDom.findDOMNode(this);
		const {top} = element.getBoundingClientRect();
		this.setState({top})

		window.addEventListener('scroll',this.listener);
	},
	listener(){
		if(window.scrollY + window.innerHeight + 150 > this.state.top) {
			this.setState({link:this.props.link});
			window.removeEventListener('scroll',this.listener);
		}
	},
	componentWillUnmount(){
		window.removeEventListener('scroll',this.listener)
	}
})


const LazyImage = React.createClass({
	getInitialState(){
		return {
			link:""
		}
	},
	render(){
		return <img src={this.state.link} alt={this.props.alt}></img>
	},
	componentDidMount(){

		const element = ReactDom.findDOMNode(this);
		const {top} = element.getBoundingClientRect();
		this.setState({top})

		window.addEventListener('scroll',this.listener);
	},
	listener(){
		if(window.scrollY + window.innerHeight + 100 > this.state.top) {
			this.setState({link:this.props.src});
			window.removeEventListener('scroll',this.listener);
		}
	},
	componentWillUnmount(){
		window.removeEventListener('scroll',this.listener)
	}
})

export {
	LazyBackgroundImage,
	LazyImage
}