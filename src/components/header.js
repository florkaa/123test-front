import React, { Component } from 'react';
import Nav from './nav';

class Header extends Component {
	render() {
	    return (
	    	<div> 
			    <header>
			    	<Nav />
			    	<section className="description">
			    		<h1>May I introduce myself?</h1>
			    		<h3>Frontend Design | UX/UI Design</h3>
			    	</section>
			    </header>
			    <button className="button-header">Go ahead</button>
		    </div>
	    );
	}
}

export default Header;
