import React, { Component } from 'react';
import img1 from '../img/2.jpg'
import img2 from '../img/10.jpg'
import img3 from '../img/6.jpg'
import img4 from '../img/3.jpg'

class Work extends Component {
	render() {
		let work = [
				{img: '{img1}',
				title: 'loremnnnnn',
				subtitle:'lkansgka'
				}, 
				{img: '{img2}',
				title: 'loremnnnnn',
				subtitle:'lkansgka'
				}]
	    return (
	    	<div id="work">
	    		<div className="gallery">
	    			{work.map((value, i) => {
			            return (
				    			<section className="photo-box" key={i}>
									<img src={value.img} className="work-image" />
									<div className="photo-overlay">
										<section className="photo-title">
											<p>{value.title}</p>
											<p>{value.subtitle}</p>
										</section>
										<section className="photo-zoom">
										</section>
									</div>
								</section>
			        )})}
	    			<section className="photo-box">
						<img src={img1} className="work-image" />
						<div className="photo-overlay">
							<section className="photo-title">
								<p>Lorem ipsum dolor sit</p>
								<p>amet consetetur sadipscing elitr</p>
							</section>
							<section className="photo-zoom">
							</section>
						</div>
					</section>
	    			<section className="photo-box">
						<img src={img2} className="work-image" />
						<div className="photo-overlay">
							<section className="photo-title">
								<p>Lorem ipsum dolor sit</p>
								<p>amet consetetur sadipscing elitr</p>
							</section>
							<section className="photo-zoom">
							</section>
						</div>
					</section>
	    			<section className="photo-box">
						<img src={img3} className="work-image" />
						<div className="photo-overlay">
							<section className="photo-title">
								<p>Lorem ipsum dolor sit</p>
								<p>amet consetetur sadipscing elitr</p>
							</section>
							<section className="photo-zoom">
							</section>
						</div>
					</section>										
	    			<section className="photo-box">
						<img src={img4} className="work-image" />
						<div className="photo-overlay">
							<section className="photo-title">
								<p>Lorem ipsum dolor sit</p>
								<p>amet consetetur sadipscing elitr</p>
							</section>
							<section className="photo-zoom">
							</section>
						</div>
					</section>
	    		</div>
	    		<a href='/' className="view-more">view more</a>
	    	</div>
	    );
	}
}

export default Work;
