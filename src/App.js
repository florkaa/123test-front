import React, { Component } from 'react';
import Header from './components/header';
import About from './components/aboutme';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer';
import './css/general.css'

class App extends Component {
	render() {
    	return (
        	<div>
          		<Header />
          		<div id="main">
          			<About />
          			<Work />
          			<Contact />
          		</div>
          		<Footer />
        	</div>
    	);
  	}
}

export default App;
