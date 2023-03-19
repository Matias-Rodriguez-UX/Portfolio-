import './App.css';
import NavigationBar from './components/navbar/NavigationBar'
import Main from './components/main/Main'
import Projects from './components/projects/Projects'
import Formation from './components/formation/Formation'
import Certificates from './components/certificates/Certificates'
import Works from './components/works/Works'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import About from './components/about/about';
import { BrowserRouter } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function App() {
  const scrollOptions = {
    duration: 1000, // duración de la animación
    delay: 0, // retraso antes de que comience la animación
    smooth: "easeInOutQuart" // efecto de suavizado
  };

  const scrollToTop = () => {
    scroll.scrollToTop(scrollOptions);
  };

  function scrollToSection(pos) {
    scroll.scrollTo(pos, scrollOptions); // 500 es la posición en píxeles de la sección
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar scrollToTop={scrollToTop} scrollToSection={scrollToSection} />
        <Main />
        <About />
        <Projects />
        <Works />
        <Formation />
        <Certificates />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
