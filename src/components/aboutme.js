import React, { Component } from 'react';
import sketch from '../img/8.jpg';
import design from '../img/4.jpg';
import finalize from '../img/11.jpg';

const SkillBox = ({img, title, text}) => {
	return 	<div className="skill-box">
      			<img src={img} alt={title}/>
      			<p className="about-title">{title}</p>
				<p className="about-text">{text}</p>
      		</div>
}

class About extends Component {
	render() {
	    return (
		    <div id="about-me">
				<section className="bio">
					<p className="about-title title-principal">LITEBOX TEST</p>
					<p className="about-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
		      	</section>
		      	<section className="skills">
		      		<SkillBox img={sketch} title={'Sketching is fun'} text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'} /> 
		      		<SkillBox img={design} title={'Design afterwards'} text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'} /> 
		      		<SkillBox img={finalize} title={'Finalize'} text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'} /> 
		      	</section>
		    </div>
	    );
	}
}

export default About;
