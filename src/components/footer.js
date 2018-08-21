import React, { Component } from 'react';
import twitter from '../img/12.png';
import dribbble from '../img/1.png'
import facebook from '../img/5.png';

class Footer extends Component {
	print(e){
		e.preventDefault();
		window.print()
	}
	render() {
	    return (
	    	<footer> 
	    		<section className="social">
	    			<a href="http://twitter.com/"><img src={twitter} alt="twitter"/></a>
	    			<a href="http://dribbble.com/"><img src={dribbble} alt="basket"/></a>
	    			<a href="http://facebook.com/"><img src={facebook} alt="facebook"/></a>
	    		</section>
	    		<a className="print" onClick={this.print}>Imprint</a>
		    </footer>
	    );
	}
}

export default Footer;
