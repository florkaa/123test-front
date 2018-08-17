import React, { Component } from 'react';
import sketch from '../img/8.jpg';
import design from '../img/4.jpg';
import finalize from '../img/11.jpg';

class About extends Component {
	render() {
	    return (
		    <div id="about-me">
				<section className="bio">
					<p className="about-title title-principal">LITEBOX TEST</p>
					<p className="about-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
		      	</section>
		      	<section className="skills">
		      		<div className="skill-box">
		      			<img src={sketch} />
		      			<p className="about-title">Sketching is fun</p>
						<p className="about-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
		      		</div>
		      		<div className="skill-box">
		      			<img src={design} />
		      			<p className="about-title">Design afterwards</p>
						<p className="about-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
		      		</div>
		      		<div className="skill-box">
		      			<img src={finalize} />
		      			<p className="about-title">Finalize</p>
						<p className="about-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
		      		</div>
		      	</section>
		    </div>
	    );
	}
}

export default About;
