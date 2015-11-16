import React from 'react';
import superagent from 'superagent';

const ContactForm = React.createClass({
	getInitialState:function(){
		return {
			isSending:false,
			successfulSended:false,
			errorSending:false
		}
	},
	render:function(){
		let toRender ;
		if(this.state.isSending){
					toRender = (<div className="row">
									<div className="medium-6 columns medium-centered text-center">
										<h2> Sending! </h2>
									</div>
								</div>)
				}else if(this.state.successfulSended){
					toRender = (<div className="row">
									<div className="medium-6 columns medium-centered text-center">
										<h2> Sended! </h2>
									</div>
								</div>)
					
				}else if(this.state.errorSending){
					toRender = (<div className="row">
									<div className="medium-6 columns medium-centered text-center">
										<h2> Error! </h2>
									</div>
								</div>)
				}else {
				toRender =      <div>
									<div className="row">
										<div className="medium-6 columns">
											<input type="text" ref="name" placeholder="Nome"/>
										</div>
										<div className="medium-6 columns">
											<input type="email" ref="email" placeholder="Email"/>
										</div>
									</div>
									<div className="row">
										<div className="medium-12 columns">
											<textarea ref="text" placeholder="Messaggio" rows="5"/>
										</div>
										<div className="medium-12 columns">
										<button className="button sendForm" onClick={this.sendEmail}>Invia</button>
										</div>
									</div>
								</div>

				}
		return (<div className="contactForm">
			{toRender}
		</div>) 
	},
	sendEmail: function(){
		this.setState({isSending:true});
		superagent.post(`//formspree.io/${this.props.address}`)
		.send({
			name:this.refs.name.value,
			email:this.refs.name.value,
			message:this.refs.name.value
		})
		.set({
	        'Accept': 'application/json',
	        'Content-Type': 'application/x-www-form-urlencoded'
    	})
		.end((err,res) => {
			console.log(err,res);
			if(err)
				this.setState({errorSending:true,isSending:false});
			if(res.body.success == 'email sent')
				this.setState({successfulSended:true,isSending:false});
			else this.setState({errorSending:true,isSending:false});
		})
	}
})

export default ContactForm;
