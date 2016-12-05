import React, {Component} from 'react'
import axios from 'axios'

class ContactForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isSending:false,
			successfulSended:false,
			errorSending:false,
			btnDisabled:true,
			errorMessage:''
		}
		this.sendEmail = this.sendEmail.bind(this)
		this.emailValidator = this.emailValidator.bind(this)
		this.handleCanSend = this.handleCanSend.bind(this)
		this.checkBeforeSend = this.checkBeforeSend.bind(this)
	}

	sendEmail() {
		if(this.checkBeforeSend()) {
			this.setState({isSending:true})
			axios({
				method:'POST',
				url:`//formspree.io/${this.props.address}`,
				data: {
					name:this.refs.name.value,
					email:this.refs.email.value,
					message:this.refs.text.value
				},
				headers: {
					'Accept': 'application/json'
				}
			}).then(res => {
				setTimeout(() => {
					if(res.data.success == 'email sent')
						this.setState({
							successfulSended:true,
							isSending:false
						})
					else 
						this.setState({
							errorSending:true,
							isSending:false
						})
				},1000)
			}).catch(err => {
				setTimeout(()=>{
					this.setState({
						errorSending:true,
						isSending:false
					})
				},1000)
			})
		}
	}

	emailValidator(value) {
		return /[(a-zA-Z0-9)]+[@]+[(a-zA-Z0-9)]+\.+[(a-zA-Z0-9)]+$/gi.test(value)
	}

	handleCanSend(event) {
		if(!this.emailValidator(this.refs.email.value)) this.setState({errorMessage:"There must be a valid email here!"})
		else if(this.refs.text.value.split('').length == 0) this.setState({errorMessage:"There must be some text here!"})
		else
			this.setState({errorMessage:""})
	}

	checkBeforeSend() {
		return this.refs.text.value.split('').length > 0 && this.emailValidator(this.refs.email.value)
	}

	render() {
		let message
		let cantSend = this.state.errorMessage !== "" ? <h2 className="error">{this.state.errorMessage}</h2> : <h2>Let's get in touch!</h2>
		if(this.state.isSending){
			message = <img src="http://samherbert.net/svg-loaders/svg-loaders/three-dots.svg"/>
		} else if(this.state.successfulSended) {
			message =  <h2> Thank you! I'll be in touch shortly! <i className="fa fa-thumbs-o-up"></i></h2>
		} else if(this.state.errorSending) {
			message = <h2> Hey! An error has occoured! Please try to refresh the page and send it again.</h2>
		}

		return <div className="contactFormWrapper">
			<div className={'message ' + (this.state.successfulSended === true ? 'show': this.state.errorSending == true ? 'show' : this.state.isSending == true ? 'show' : '')}>
				{message}
			</div>
			<div className="contactForm">
				<div className="row">
					<div className="medium-12 columns medium-centered text-center">
						{cantSend}
					</div>
				</div>
				<div className="row">
					<div className="medium-6 columns">
						<input type="text" ref="name" placeholder="Name"/>
					</div>
					<div className="medium-6 columns">
						<input type="email" ref="email" placeholder="Email" onChange={this.handleCanSend}/>
					</div>
				</div>
				<div className="row">
					<div className="medium-12 columns">
						<textarea ref="text" placeholder="Message" rows="5" onChange={this.handleCanSend}/>
					</div>
					<div className="medium-12 columns">
					<button className="button sendForm" onClick={this.sendEmail} ref="send">Send</button>
					</div>
				</div>
			</div>
		</div>
	}
}

export default ContactForm
