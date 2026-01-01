import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import HowWeWork from './components/HowWeWork';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <HowWeWork />
      <WhoWeWorkWith />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
