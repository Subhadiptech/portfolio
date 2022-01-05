
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Head from './components/Head';
import Hero from './components/Hero';
import Project from './components/Project';
import Quote from './components/Quote';

function App() {
  return (
    <div className="sm:radial-gradient bg-black">
      <Head/>
      <Hero/>
      <Quote quote='Follow your passion'/>
      <About/>
      <Quote quote='think twice code once'/>
      <Project/>
      <Quote quote='comparison destroys personality'/>
      <Contact/>
    </div>
  );
}

export default App;
