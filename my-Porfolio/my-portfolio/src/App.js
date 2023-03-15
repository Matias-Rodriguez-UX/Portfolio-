import './App.css';
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import Projects from './components/porjects/Projects'
import Formation from './components/formation/Formation'
import Certificates from './components/certificates/Certificates'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Projects />
      <Works />
      <Formation />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
