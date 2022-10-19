import './App.css'
import Navbar from './components/commonComponents/Navbar/Navbar';
import Carousel from './components/landingPageComponents/carousel/Carousel';

//components
import Hero from './components/landingPageComponents/hero/Hero';
// import Contact from './components/contact/Contact'
import Services from './components/landingPageComponents/services/Services';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Carousel/>
    {/* <Contact/> */}
    <Services/>
    </>
  );
}

export default App;
