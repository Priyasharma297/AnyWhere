import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import HomeCard from '../components/HomeCard';
import MakeIt from '../components/MakeIt';
import MeetYourMechanic from '../components/MeetYourMechanic';
import ServicePage from '../components/ServicePage';
import Make2 from '../components/Make2';
import FooterHeader from '../components/FooterHeader';
import FooterContent from '../components/FooterContent';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <HomeCard></HomeCard>
      <div className="p-5"></div>
      <ServicePage></ServicePage>
      <div className="p-5"></div>
      <Carousel></Carousel>
      <div className="p-5"></div>
      <MeetYourMechanic></MeetYourMechanic>
      <div className="p-10"></div>
      <MakeIt></MakeIt>
      <div className="p-5"></div>
      <Make2></Make2>
      <div className="p-10"></div>
      <FooterHeader />
      <FooterContent />
    </div>
  );
}

export default App;