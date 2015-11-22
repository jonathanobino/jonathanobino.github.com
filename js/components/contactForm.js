import React from 'react';
import superagent from 'superagent';

const ContactForm = React.createClass({
	getInitialState:function(){
		return {
			isSending:false,
			successfulSended:false,
			errorSending:false,
			btnDisabled:true
		}
	},
	render:function(){
		let message;
		if(this.state.isSending){
			message = <img src="http://samherbert.net/svg-loaders/svg-loaders/three-dots.svg"/>
		}else if(this.state.successfulSended){
			message =  <h2> Thank you! I'll be in touch shortly! <i className="fa fa-thumbs-o-up"></i></h2>;

		}else if(this.state.errorSending){
			message = <h2> Hey! An error has occoured! Please try to refresh the page and send it again. </h2>
		}

		return (<div className="contactFormWrapper">
					<div className={'message ' + (this.state.successfulSended === true ? 'show': this.state.errorSending == true ? 'show' : this.state.isSending == true ? 'show' : '')}>
					{message}
					</div>
					<div className="contactForm">
						<div className="row">
							<div className="medium-6 columns medium-centered text-center">
							<h2>Contact Me</h2>
							</div>
						</div>
						<div className="row">
							<div className="medium-6 columns">
								<input type="text" ref="name" placeholder="Nome"/>
							</div>
							<div className="medium-6 columns">
								<input type="email" ref="email" placeholder="Email" onChange={this.handleCanSend}/>
							</div>
						</div>
						<div className="row">
							<div className="medium-12 columns">
								<textarea ref="text" placeholder="Messaggio" rows="5" onChange={this.handleCanSend}/>
							</div>
							<div className="medium-12 columns">
							<button className="button sendForm" onClick={this.sendEmail} ref="send" disabled={this.state.btnDisabled}>Invia</button>
							</div>
						</div>
					</div>
				</div>) 
	},
	sendEmail: function(){
		this.setState({isSending:true});
		superagent.post(`//formspree.io/${this.props.address}`)
		.send({
			name:this.refs.name.value,
			email:this.refs.email.value,
			message:this.refs.text.value
		})
		.set({
	        'Accept': 'application/json',
	        'Content-Type': 'application/x-www-form-urlencoded'
    	})
		.end((err,res) => {
			setTimeout(()=>{
				if(err)
					this.setState({errorSending:true,isSending:false});
				if(res.body.success == 'email sent')
					this.setState({successfulSended:true,isSending:false});
				else this.setState({errorSending:true,isSending:false});
			},1000)
		})
	},
	emailValidator: function(value){
		return /[(a-zA-Z0-9)]+[@]+[(a-zA-Z0-9)]+\.+[(a-zA-Z0-9)]+$/gi.test(value);
	},
	handleCanSend:function(event){
		if(this.refs.text.value.split('').length > 0 && this.emailValidator(this.refs.email.value))
			this.setState({btnDisabled:false});
		else{
			this.setState({btnDisabled:true});
		}
	}
})

export default ContactForm;
