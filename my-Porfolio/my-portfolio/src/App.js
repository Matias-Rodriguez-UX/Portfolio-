import './App.css';
import NavigationBar from './components/navbar/NavigationBar'
import Main from './components/main/Main'
import Projects from './components/projects/Projects'
import Formation from './components/formation/Formation'
import Certificates from './components/certificates/Certificates'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import About from './components/about/about';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  }

  return (
    <BrowserRouter>
      <LocomotiveScrollProvider options={options} containerRef={ref}>
        <div className="App" data-scroll-container ref={ref}>
          <NavigationBar data-scroll-section />
          <Main data-scroll-section data-scroll data-scroll-speed="4" />
          <About data-scroll-section />
          <Projects data-scroll-section />
          <Works data-scroll-section />
          <Formation data-scroll-section />
          <Certificates data-scroll-section />
          <Contact data-scroll-section />
          <Footer data-scroll-section />
        </div>
      </LocomotiveScrollProvider>
    </BrowserRouter>
  );
}

export default App;
