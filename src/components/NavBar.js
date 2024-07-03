import { useState, useEffect, useCallback } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const fileName = "shubham latest.pdf"
  const fileUrl = "https://www.dropbox.com/scl/fi/h2h4mxbeh8zmmc7p355q8/shubham-latest.pdf?rlkey=ncvetlqghcduyzsl60lopidyu&st=u1jp1iek&dl=1"

  const handleDownload = ()=>{
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h4 className="title">iPortfolio</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">

                <a className="x-logo-a download" onClick={handleDownload}><i className="fa-solid fa-download x-logo"></i></a>

                <a href="https://www.linkedin.com/in/shubham-tiwari-01a338308/"><img src={navIcon1} alt="" /></a>

                <a className="x-logo-a" href="https://x.com/tiwari_shubh15"><i className="fa-brands fa-x-twitter x-logo"></i></a>

                <a href="https://www.instagram.com/shubh_tiwari_pandit/"><img src={navIcon3} alt="" /></a>

              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
