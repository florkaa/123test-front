import React, { Component } from 'react';

class Nav extends Component {
	render() {
	    return (
	      <nav>
	      	<p>logo</p>
	      	<section className="links">
	      		<a href="/">Start</a>
	      		<a href="#about-me">About me</a>
	      		<a href="#work">Work</a>
	      		<a href="#contact">Contact</a>
	      	</section>
	      </nav>
	    );
	}
}

export default Nav;
