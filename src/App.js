import React from 'react';
import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Specials from './components/Specials/Specials';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  React.useEffect(() => {
    document.title = "Little Lemon - Home";
  }, []);
  return (
    <>
      <main>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <About/>
      </main>

    </>

  );
}

export default App;
