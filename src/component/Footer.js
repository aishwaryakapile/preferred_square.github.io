import React from 'react'
import "./footer.css";

import { Container, Row, Col } from 'react-bootstrap'
import brandlogo from "../images/Brand Logo.webp";

import linkedin from "../images/linkedin.webp";
import instagram from "../images/instagram.webp";

const Footer = () => {
    return (
        <footer>
            <Container fluid className='p-5 desktop'>
                <Row className="text-center align-center justify-content-center">
                    <Col className='col-md-2'>
                        <img src={brandlogo} alt='' />
                    </Col>

                    <Col className='md-8 mt-4'>
                        <ul className='footer-menu  align-middle'>
                            <li><a href='/about'>About Us</a></li>
                            <li><a href='/service'>Services</a></li>
                            <li><a href='/solution'>Who we serve</a></li>
                            <li><a href='/knowledge'>Knowledge</a></li>
                            <li><a href='/career'>Careers</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                        </ul>
                    </Col>


                    <Col className='col-md-2  mt-4  text-right'>
                        <ul className='social-icons'>
                            <li><a aria-label="LinkedIn" href='https://www.linkedin.com/company/preferred-square-analytics'> <img src={linkedin} alt='' /></a></li>
                            <li><a aria-label="Instagram" href='https://www.instagram.com/preferred_square_analytics/?utm_medium=copy_link'> <img src={instagram} alt='' /></a></li>
                        </ul>
                    </Col>

                </Row>
                <Row>
                    <Col className='col-md-5'><hr className='text-right hr-first' width="90%" align="right" /></Col>
                    <Col className='col-md-2'><p className='copytight-text'>Copyrighted © 2023</p></Col>
                    <Col className='col-md-5'><hr width="90%" align="right" style={{ textAlign: "right" }} /></Col>
                </Row>

            </Container>
            <Container fluid className='p-5 mobile'>
                <Row className="text-center align-center justify-content-center">
                    <Col className='col-md-2 mx-auto'>
                        <img src={brandlogo} alt='' />
                    </Col>
                </Row>
                <Row>

                    <Container className='mt-4 mobile mx-auto'>
                        <Row className='mobile-links'>
                            <Col className='col-md-6 linkleft'>
                                <li><a href='/about'>About Us</a></li>
                                <li><a href='/service'>Services</a></li>
                                <li><a href='/solution'>Who we serve</a></li>
                            </Col>
                            <Col className='col-md-6 linkright'>
                                <li><a href='/knowledge'>Knowledge</a></li>
                                <li><a href='/career'>Careers</a></li>
                                <li><a href='/contact'>Contact Us</a></li>
                            </Col>
                        </Row>
                    </Container>


                </Row>
                <Row>
                    <Col className='col-md-2  text-right'>
                        <ul className='social-icons'>
                            <li><a aria-label="LinkedIn" href='https://www.linkedin.com/company/preferred-square-analytics'> <img src={instagram} alt='' /></a></li>
                            <li className='linkedin-icon'><a aria-label="Instagram" href='https://www.instagram.com/preferred_square_analytics/?utm_medium=copy_link'> <img src={linkedin} alt='' /></a></li>
                        </ul>
                    </Col>

                </Row>
                {/* <Row className='bottom-footer'>
                
                    <Col className='col-md-4'><hr className='text-right hr-first' width="100%" align="right" /></Col>
                    <Col className='col-md-4'><p className='copytight-text'>Copyrighted © 2023</p></Col>
                    <Col className='col-md-4'><hr width="100%" align="right" style={{ textAlign: "right" }} /></Col>
                </Row> */}

                <div className='bottom-footer'>
                    <hr  />
                    <div className=''><p className='copytight-text'>Copyrighted © 2023</p></div>
                    <hr />
                </div>

            </Container>
        </footer>
    )
}

export default Footer
