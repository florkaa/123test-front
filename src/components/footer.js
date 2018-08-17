import React, { Component } from 'react';
import twitter from '../img/12.png';
import basket from '../img/1.png'
import facebook from '../img/5.png';

class Footer extends Component {
	render() {
	    return (
	    	<footer> 
	    		<section className="social">
	    			<img src={twitter} alt="twitter"/>
	    			<img src={basket} alt="basket"/>
	    			<img src={facebook} alt="facebook"/>
	    		</section>
		    </footer>
	    );
	}
}

export default Footer;
