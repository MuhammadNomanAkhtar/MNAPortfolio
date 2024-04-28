import reactLogo from './assets/react.svg';
import './App.css';
import React from 'react';

import { Header } from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import ProjectSection from './components/ProjectSection/ProjectSection';
import XpSection from './components/XpSection/XpSection';
import InfoSection from './components/InfoSection/InfoSection';
import { linkedin_logo } from './assets';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ServiceImages from './components/ServicesSection/ServiceImages';
import ContactSection from './components/ContactSection/ContactSection';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';
import { Navbar } from './components/Header/Navbar.jsx';
function App() {
	return (
		<div className='min-h-screen'>
			<Header />
			{/*<Navbar />*/}
			{/* <img src={linkedin_logo} alt="linkedin logo" className="inline text-center h-10 w-10 fill-red-800 bg-red-40" /> */}
			<div className=''>
				<HeroSection />
				<InfoSection />
				<ProjectSection />
				<XpSection />
				{/* <TestimonialSection /> */}

				<ServicesSection />
				<ContactSection />
			</div>

			{/* <ServiceImages /> */}
		</div>
	);
}

export default App;
