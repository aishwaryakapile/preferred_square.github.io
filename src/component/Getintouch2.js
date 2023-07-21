import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import bgimg from '../images/getintouch-bg2.webp'
import './getintouch2.css';

const Getintouch2 = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <section className='getint2-section desktop' style={{ backgroundImage: `url(${bgimg})` }}>
                <Container>
                    <Row className='w-100'>
                        <Col className='col-md-6'>
                            <div className='content-box'>
                                <div className="h3">Get in</div>
                                <div className="strok">In Touch</div>
                                <div className="h1 anima">In<span className='anima-underline' >Touch</span></div>
                            </div>
                        </Col>
                        <Col className='col-md-6'>
                            <div className='text-right'>
                               <NavLink to="/contact" onClick={scrollToTop}><button className="findout-btn mt-5 mx-auto">Talk To Our Experts Now</button></NavLink>
                               
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='getint2-section mobile' style={{ backgroundImage: `url(${bgimg})` }}>
                <Container>
                    <Row>
                        <div className='content-box'>
                            <div className="h3">Get</div>
                            <div className="strok">In Touch</div>
                            <div className="h1 anima">In <span className='anima-underline' > Touch</span></div>
                        </div>
                    </Row>

                </Container>
                <Container>
                    <Row>
                        <div className=''>
                        <NavLink to="/contact" onClick={scrollToTop}> <button className="findout-btn">Talk To Our Experts Now</button></NavLink>
                        </div>
                    </Row>
                </Container>

            </section>
        </>

    )
}

export default Getintouch2