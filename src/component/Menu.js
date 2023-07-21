import React, { useEffect, useState } from 'react'
import brandlogo from "../images/Brand Logo.webp";
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';


import './menu.css';

const Menu = () => {
    let navigate = useNavigate();

    let expand = 'md';
    let homeurl = "/";

    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    const toService = ()=> {
        navigate("/service");
    }

    useEffect(()=>{

        // document.getElementById("offcanvasNavbar-expand-md").setAttribute("href", "/service");
        const el = document.getElementById("offcanvasNavbar-expand-md");
        el.addEventListener("click", ()=>{
            toService();
        }, false);
    

    });
    

  return (
    <>
    <div className='menu'>
        <Container fluid className='hero px-5 pt-3'>   
            <Navbar key={expand} bg="transparent"  expand={expand} className="navbar-dark mb-3">
                <Navbar.Brand href={homeurl}><img src={brandlogo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            <NavLink to="/"><img src={brandlogo} alt="Logo" /></NavLink>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
              
                        <Nav className="justify-content-end flex-grow-1 pe-3">
              
                            {/* <Link href="about">About Us</Link>
                            <Link href="service">Services</Link>
                            <Link href="whowr">Who We Serve</Link>
                            <Link href="knowledge">Knowledge</Link>
                            <Link href="career">Careers</Link>
                            <Link href="contant">Contact Us</Link> 
  
                            */}


                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                            {/* <NavLink className="nav-link" to="/service">Services</NavLink> */}
                            <NavDropdown 
                                className='services'
                                title="Services"
                                href="/service"
                                // onToggle={() => { window.location.href = '/service'}}
                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                                show={show}
                                // onClick={toService}
                                onMouseEnter={showDropdown} 
                                onMouseLeave={hideDropdown}  
                            >
                                <NavDropdown.Item> <NavLink to="/managementconsulting">Management Consulting</NavLink></NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item ><NavLink to="/financialadvisory">Financial Advisory</NavLink></NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item ><NavLink to="/dataanalyst">Data Analyst</NavLink></NavDropdown.Item>
                            </NavDropdown>
                            <NavLink className="nav-link" to="/solution">Who We Serve</NavLink>
                            <NavLink className="nav-link" to="/knowledge">Knowledge</NavLink>
                            <NavLink className="nav-link" to="/career">Careers</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                           
                        </Nav>
                          
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </Container> 
    </div>
    <Outlet />
    </>
  )
}

export default Menu