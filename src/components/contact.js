import React, { Component } from 'react';

class Contact extends Component {
	constructor(props){
        super(props);
    	this.state = {
        	name: '',
        	email: '',
        	message: ''
      	}
	}
  	handleInput = (e) => {
    	const name = e.target.name;
    	const value = e.target.value;
    	this.setState({[name]: value});
	}  
  	handleSubmit = (e) =>{
        e.preventDefault();
        this.state.name === '' || this.state.email === '' || this.state.message === ''
        	? this.setState({success: false})
        	: this.setState({success: true});
    }
	render() {
	    return (
	    	<div id="contact" className="scrollable"> 
	    		<h1>Get in touch!</h1>
	    		<form onSubmit={this.handleSubmit.bind(this)}>
	    			<input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleInput.bind(this)} />
	    			<input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInput.bind(this)} />
	    			<textarea placeholder="How can I help you?" name="message" value={this.state.message} onChange={this.handleInput.bind(this)}/>
	    			<div className="form-status">
			        	{this.state.success === true && (
			        		<p>Tu mensaje fue enviado con éxito, {this.state.name}</p>
			        	)}
			        	{this.state.success === false && (
			        		<p>Todos los campos son obligatorios</p>
			        	)}
		        	</div>
	    			<button type="submit" className="button" value="send">send</button>
	    		</form>
		    </div>
	    );
	}
}

export default Contact;
