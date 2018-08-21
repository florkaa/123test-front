import React, { Component } from 'react';
import Scroll from 'react-scroll-to-element';
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
			    <Scroll type="id" element="main">
            		<button className="button button-header">Go ahead</button>
          		</Scroll>
		    </div>
	    );
	}
}

export default Header;
