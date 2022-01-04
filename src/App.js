
import './App.css';
import About from './components/About';
import Head from './components/Head';
import Hero from './components/Hero';
import Quote from './components/Quote';

function App() {
  return (
    <div className="bg-black">
      <Head/>
      <Hero/>
      <Quote quote='Follow your passion'/>
      <About/>
      <Quote quote='think twice code once'/>
    </div>
  );
}

export default App;
