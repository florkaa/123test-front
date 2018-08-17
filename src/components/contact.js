import React, { Component } from 'react';

class Contact extends Component {
	render() {
	    return (
	    	<div id="contact"> 
	    		<h1>Get in touch!</h1>
	    		<form method="post">
	    			<input type="text" placeholder="Name" />
	    			<input type="text" placeholder="Email" />
	    			<textarea placeholder="How can I help you?" />
	    			<button className="view-more">send</button>
	    		</form>
		    </div>
	    );
	}
}

export default Contact;
