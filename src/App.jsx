import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Pages from './components/Pages';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A2F28]">
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <ProductGrid />
        <About />
        <Pages />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
