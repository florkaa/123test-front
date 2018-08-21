import React, { Component } from 'react';
import Scroll from 'react-scroll-to-element';
import burger from '../img/line-menu.png'

class Nav extends Component {
	displayMenu = () =>{
		const links = document.getElementById('links')
		if (links.style.display === "none") {
	        links.style.display = "block";
	    } else {
	        links.style.display = "none";
	    }
	}
	render() {
		if (window.matchMedia("(min-width: 690px)").matches) {
		    return ( 
		      	<nav>
			      	<p>logo</p>
			      	<section className="links">
			      		<a href="/">Start</a>
			      		<Scroll type="id" element="about-me">
			      			<a href="#about-me">About me</a>
			      		</Scroll>
			      		<Scroll type="id" element="work">
			      			<a href="#work">Work</a>
			      		</Scroll>
			      		<Scroll type="id" element="contact">
			      			<a href="#contact">Contact</a>
			      		</Scroll>
			      	</section>
		      	</nav>
		    );
		} 
		else{
			return(
		      	<nav>
			      	<p>logo</p>
			      	<section className="menu-mobile">
				      	<button className="button menu-button" onClick={this.displayMenu}> <img src={burger} alt="menu"/> </button>
				      	<section id="links" className="links-mobile" style={{'display': 'none'}}>
				      		<a href="/">Start</a>
				      		<a href="#about-me">About me</a>
				      		<a href="#work">Work</a>
				      		<a href="#contact">Contact</a>
				      	</section>
			      	</section>
		      	</nav>
			);
		}
	}
}

export default Nav;
