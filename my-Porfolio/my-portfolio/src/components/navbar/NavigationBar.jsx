import React, { useEffect, useState } from "react";
import './NavigationBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function NavigationBar() {
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
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark" className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <Navbar.Brand href="#home" style={{ marginRight: '4rem' }}><h3 style={{ color: 'var(--fucsia)' }}><strong>mgr</strong></h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <MenuIcon />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto align-items-center">
            <Nav.Link href="#main" className={activeLink === 'main' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('main')} >Main</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')} >About</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Projects</Nav.Link>
            <Nav.Link href="#works" className={activeLink === 'works' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('works')} >Works</Nav.Link>
            <Nav.Link href="#formation" className={activeLink === 'formation' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('formation')} >Formation</Nav.Link>
            <Nav.Link href="#certificates" className={activeLink === 'certificates' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('certificates')} >Certificates</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contacts')} >Contact</Nav.Link>
            <div className="d-flex mr-auto ml-4">
              <Nav.Link href="#contact" className="navbar-link social-media"><LinkedInIcon fontSize="large" /></Nav.Link>
              <Nav.Link href="#contact" className="navbar-link social-media" ><GitHubIcon fontSize="large" /></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}