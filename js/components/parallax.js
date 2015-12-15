import React from 'react';
import ReactDom from 'react-dom';

const requestAnimFrame = (function(){
		       return  window.requestAnimationFrame       ||
		           window.webkitRequestAnimationFrame ||
		           window.msRequestAnimationFrame ||
		           window.oRequestAnimationFrame ||
		           window.mozRequestAnimationFrame
		   })();

const Parallax = React.createClass({
	getInitialState:function(){
		return {
			blurriness:0
		}
	},
	render:function(){
		return (<div className="wrapper">
				 <div style={{background:this.props.background}} className="parallax">
				 </div> 
					 <div className="container">
						 <div className="content">
						 {this.props.children}
						 </div>
					 </div>
				</div>)
	},
	componentDidMount:function(){
		let wrapper = ReactDom.findDOMNode(this);
		let parallax = wrapper.querySelector('.parallax');
		
		   // const limit = window.innerHeight / 2;
		   const secondLimit = window.innerHeight / 4;
		   let ticking = false;
		window.addEventListener('scroll',event => {
			let coordinates = parallax.getBoundingClientRect();
			let wrapperCoord = wrapper.getBoundingClientRect();
			if(wrapperCoord.bottom > 0 && !ticking){
				ticking = true;
				requestAnimFrame(()=>{
					let translate = `translate3d(0px,${Math.round((window.pageYOffset / 2))}px,0px)`;
					parallax.style.transform = translate;
					parallax.style.webkitTranform = translate;
					parallax.style.mozTranform = translate;
					parallax.style.msTranform = translate;
					parallax.style.oTranform = translate;
					ticking = false;
				})
				requestAnimFrame(()=>{
					//console.log(wrapperCoord.bottom <= secondLimit);
					if(wrapperCoord.bottom <= secondLimit){
					let blur = Math.floor(((secondLimit - wrapperCoord.bottom)/30));
					blur = blur > 4 ? 4 : blur > 0 ? blur : 1 ;
						if(blur != this.state.blurriness){
							//console.log('set blur:',blur);
							parallax.style.webkitFilter = `blur(${blur}px)`;
							parallax.style.filter = `blur(${blur}px)`;
							this.setState({blurriness:blur})
						}
					} else if(!ticking){
						if(this.state.blurriness != 0){
							ticking = true;
							parallax.style.webkitFilter = '';
							parallax.style.filter = '';
							//console.log('set blur:',0);
							this.setState({blurriness:0})
							ticking = false;
						}
					}
					// if(wrapperCoord.bottom < limit && wrapperCoord.bottom > secondLimit){
					// 	if(!parallax.classList.contains('first')){
					// 		parallax.classList.add('first');
					// 	}
					// 	if(parallax.classList.contains('second')){
					// 		parallax.classList.remove('second');
					// 	}
					// } else  
					// if(wrapperCoord.bottom < secondLimit && !ticking){
					// 	if(!parallax.classList.contains('second')){
					// 		parallax.classList.add('second');
					// 	}
					// } else {
					// 	if(parallax.classList.contains('second')){
					// 		parallax.classList.remove('second');
					// 	}
					// }
				})
			} else if(!ticking){
				if(this.state.blurriness != 0){
					ticking = true;
					parallax.style.webkitFilter = '';
					parallax.style.filter = '';
					// console.log('set blur:',0);
					this.setState({blurriness:0})
					ticking = false;
				}
			}
		})
	}
})

export default Parallax;
