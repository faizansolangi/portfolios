import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import HeroSection from './components/heroSection';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );  
}

export default App;
