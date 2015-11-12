import React from 'react';
import ReactDom from 'react-dom';

const Parallax = React.createClass({

	getInitialState:function(){
		return{
			top:0
		}
	},
	render:function(){
		return <div style={{background:this.props.background,backgroundPosition: `center ${this.state.top}px`}} className="parallax">
			{this.props.children}
		</div>
	},
	componentDidMount:function(){
		window.addEventListener('scroll',event => {
			let parallax = ReactDom.findDOMNode(this).getBoundingClientRect();
			this.setState({
				top: parallax.top / 10
			})
		})
	}
})

export default Parallax;
