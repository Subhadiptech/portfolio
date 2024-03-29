
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Head from './components/Head';
import Hero from './components/Hero';
import NewAbout from './components/NewAbout';
import Project from './components/Project';
import Quote from './components/Quote';


function App() {
  return (
    <div className="custom-bg no-select font-Main app overflow-hidden">
      <Head />
      <Hero />
      <Quote quote='Follow your passion' />
      <NewAbout/>
      <Quote quote='think twice code once' />
      <Project />
      <Quote quote='comparison destroys personality' />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
