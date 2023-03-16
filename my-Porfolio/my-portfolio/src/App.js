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

function App() {
  return (
    <div className="App">
      <NavigationBar />
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
