import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Specials from './components/Specials/Specials';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <>
      <Header/>
      <main>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <About/>
      </main>
      <Footer/>

    </>

  );
}

export default App;
