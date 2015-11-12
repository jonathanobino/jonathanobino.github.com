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
					toRender = <h2> Sending! </h2>
				}else if(this.state.successfulSended){
					toRender = <h2> Sended! </h2>
				}else if(this.state.errorSending){
					toRender = <h2> Error! </h2>
				}else {
				toRender =      <div className="row">
									<div className="medium-6 columns">
										<input type="text" ref="name"/>
									</div>
									<div className="medium-6 columns">
										<input type="email" ref="email"/>
									</div>
									<textarea ref="text"/>
									<button className="button" onClick={this.sendEmail}>Invia</button>
								</div>
				}

				console.log(toRender);
		return (<div className="holdIt">
			{toRender}
		</div>) 
	},
	sendEmail: function(){
		this.setState({isSending:true});
		superagent.post(`//formspree.io/${this.state.address}`)
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
			if(res.success == 'email sent')
				this.setState({successfulSended:true,isSending:false});
			else this.setState({errorSending:true,isSending:false});
		})
	}
})

export default ContactForm;
