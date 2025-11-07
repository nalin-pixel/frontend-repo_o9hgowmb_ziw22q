import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-[#0A2F28]">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Newsletter />
      </main>
    </div>
  );
}

export default App;
