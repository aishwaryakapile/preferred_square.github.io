import React from 'react'
import "./header.css";
import bgvideo from "../images/header-bg.mp4";
import bgvideoposter from "../images/bgvideo-poster.webp";

import Container from 'react-bootstrap/Container';


const Header = () => {
    //let expand = 'md';
    // let homeurl = "https://sandboxmachine.com/staging/preferred-square/";
  return (
    <header className='header-home'> 
        
        <video id="background-video" title='bg-video' poster={bgvideoposter} loop={false} muted={true} autoPlay={true} >
            <source src={bgvideo} type="video/mp4" />
            <source src={bgvideo} type="video/ogg" />
            Your browser does not support the video tag.
        </video>

        {/* <video id="background-video" loop autoplay>
            <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
            <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" />
            Your browser does not support the video tag.
        </video> */}


    <Container fluid className='hero px-5 pt-3'>
        {/* <Navbar key={expand} bg="transparent"  expand={expand} className="navbar-dark mb-3">
            <Navbar.Brand href={homeurl}><img src={brandlogo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="about">About Us</Nav.Link>
                        <Nav.Link href="service">Services</Nav.Link>
                        <Nav.Link href="whowr">Who We Serve</Nav.Link>
                        <Nav.Link href="knowledge">Knowledge</Nav.Link>
                        <Nav.Link href="career">Careers</Nav.Link>
                        <Nav.Link href="contant">Contact Us</Nav.Link>
                       
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar> */}
        
        {/* hero */}

        {/* <div className='hero-text d-flex justify-content-center min-vh-100 align-middle mx-auto my-auto'> */}
        
        <div className='hero-content'>
            
            <div className='hero-text'>
                <h3>Every Decision</h3>
                <h2>Better Informed</h2>
            </div>
        </div>
    
    </Container>


    </header>
  )
}

export default Header
