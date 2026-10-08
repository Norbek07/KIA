import Hero from '@/components/Hero';
import About from '@/components/About';
import Models from '@/components/Models';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Hero />
      <About />
      <Models />
      <Footer />
    </div>
  );
}

export default App;
