
// import './App.css'

import './css_File/Navbar.css'

import Navbar from "./components/Navbar";
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import Technology from './components/Technology';
import Project from './components/Project';
import ContactForm from './components/ContactForm';
import Certificate from './components/Certificate';
import Experiences from './components/experiences';
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Technology />
      <Project />
      <Certificate />
      {/* <Experiences /> */}
      <ContactForm />
      <Footer />
      
    </div>
  )
}

export default App
