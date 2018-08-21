import React, { Component } from 'react';
import ImageZoom from 'react-medium-image-zoom';
import img1 from '../img/2.jpg'
import img2 from '../img/10.jpg'
import img3 from '../img/6.jpg'
import img4 from '../img/3.jpg'
import zoom from '../img/9.png'
import arrow from '../img/forward-right-arrow-button.png'

class Work extends Component {
	render() {
		let work = [{img: img1,
					title: 'Lorem ipsum dolor sit',
					subtitle:'amet consetetur sadipscing elitr'
					}, 
					{img: img2,
					title: 'Lorem ipsum dolor sit',
					subtitle:'amet consetetur sadipscing elitr'
					},				
					{img: img3,
					title: 'Lorem ipsum dolor sit',
					subtitle:'amet consetetur sadipscing elitr'
					}, 
					{img: img4,
					title: 'Lorem ipsum dolor sit',
					subtitle:'amet consetetur sadipscing elitr'
					}]
	    return (
	    	<div id="work" className="scrollable">
	    		<div className="gallery">
	    			{work.map((value, i) => {
			            return (
				    			<section className="photo-box" key={i}>
				    				<ImageZoom
										image={{
											    src: `${value.img}`,
											    alt: `${value.title}`,
											    className: 'work-image',
										}}
										zoomImage={{
										          	src: `${value.img}`,
										          	alt: `${value.title}`,
										          	style: { width: '150px', height: 'auto' }
										}}
									/>
									
									<div className="photo-overlay">
										<section className="photo-title">
											<p className="gallery-title">{value.title}</p>
											<p className="gallery-subtitle">{value.subtitle}</p>
										</section>
										<section className="photo-zoom">
											<img src={zoom} alt="zoom"/>
										</section>
									</div>
								</section>
			        )})}
	    		</div>
	    		<button className="button view-more"><a href='/'>view more</a><img src={arrow} alt="view more"/></button>
	    	</div>
	    );
	}
}

export default Work;
