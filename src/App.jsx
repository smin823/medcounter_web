import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AppShowcase from './components/AppShowcase';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AppShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
