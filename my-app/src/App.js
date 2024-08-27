import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GroupAvatars from './components/Avatar';
import Mob from './components/Mob';
import Cards from './components/Cards';
import Sub from './components/Sub';
import Footer from './components/Footer';
import Slider from './components/Slider';
import HeroSection1 from './components/Ex';


function App() {
  return (
    <>
      <div className='px-11 py-11'>
        <Navbar />
        <HeroSection />
        <Mob />
      </div>
      <Cards />
      <Sub />
      <Slider />
    
      <Footer />
    </>
  );
}

export default App;
