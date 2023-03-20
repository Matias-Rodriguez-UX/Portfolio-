import React, { useEffect, useState } from "react";
import './NavigationBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function NavigationBar({ scrollToTop, scrollToSection }) {
  const [activeLink, setActiveLink] = useState('main')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ?
        setScrolled(true) :
        setScrolled(false)

    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function onUpdateActiveLink(page) {
    setActiveLink(page)
    const element = document.getElementById(page);
    const offsetTop = (element.offsetTop - 50);
    scrollToSection(offsetTop)
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark" className={scrolled ? "scrolled" : ""} >
      <div className="container">
        <Navbar.Brand href="#main" style={{ marginRight: '4rem' }} onClick={scrollToTop}> <div className="logo"></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <MenuIcon />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto align-items-center">
            <Nav.Link className={activeLink === 'main' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('main')} >Main</Nav.Link>
            <Nav.Link className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')} >About</Nav.Link>
            <Nav.Link className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Projects</Nav.Link>
            <Nav.Link className={activeLink === 'works' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('works')} >Works</Nav.Link>
            <Nav.Link className={activeLink === 'formation' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('formation')} >Formation</Nav.Link>
            <Nav.Link className={activeLink === 'certificates' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('certificates')} >Certificates</Nav.Link>
            <div className="d-flex mr-auto">
              <Nav.Link href="https://www.linkedin.com/in/matias-g-rodriguez/" target="_blank" rel="noreferrer" className="navbar-link social-media"><LinkedInIcon fontSize="large" /></Nav.Link>
              <Nav.Link href="https://github.com/Matias-Rodriguez-UX" target="_blank" rel="noreferrer" className="me-4 navbar-link social-media" ><GitHubIcon fontSize="large" /></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}