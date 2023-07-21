import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

import './servicebody.css'
import { NavLink } from 'react-router-dom';


const Servicebody = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <section className='servicebody-section w-100 mb-2 pb-1' >
                <Container fluid className='p-0 m-0 w-100'>
                    <Row className='p-0 m-0 g-0'>
                        {/* hover box 1*/}
                        <Col className='col-md-6 ordermobile'>
                            <div className='sol-box black '>
                                <div className='text-box'>
                                    <p className='p-5'>
                                        Be it family offices, fund managers, advisors or corporates, we have enabled them to navigate the complexities of creating value and achieving sustainable growth.
                                    </p>
                                </div>

                            </div>
                        </Col>
                        <Col className='col-md-6'>
                            <div className='sol-box  white  box-right'>
                                <Row className='p-5 counter-text mx-auto'>
                                    <Col className='col-md-12'>
                                        <div className=''>
                                            <h2 className='marginleft'>150+</h2>
                                            <p className='anima'> <span className='anima-underline'>Logos served</span></p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-12 text-right'>
                                        <div className=''>
                                            <h2><span style={{ "fontSize": "100px" }}>$</span>500Bn+</h2>
                                            <p className='anima'><span className='anima-underline' >Advised AUM</span></p>
                                            {/* <div className="h1 anima">In<span className='anima-underline' >Touch</span></div>
           */}
                                        </div>
                                    </Col>
                                    <Col className='col-md-12'>
                                        <div className=''>
                                            <h2>20+</h2>
                                            <p className='anima'><span className='anima-underline' >Countries</span></p>
                                        </div>
                                    </Col>
                                    <Col className='col-md-12 text-right'>
                                        <div className=''>
                                            <h2>100+</h2>
                                            <p className='anima'><span className='anima-underline' >Team Size</span></p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        {/* service  */}

                    </Row>
                    <div className='bg-mobile'>
                        <Row className='p-0 m-0 g-0'>

                            {/* service row 1*/}
                            <Col className='col-md-6 hover-box hover pt-mobile'>
                                <div className='sol-box white ser-box1'>
                                    <div className='text-box'>
                                        <p className='p-5 empty-para'>
                                        </p>
                                    </div>

                                </div>
                            </Col>

                            <Col className='col-md-6 hover-box hover'>
                                <div className='sol-box black d-bg-box '>
                                    <div className='p-5 mobpara-padding'>
                                        <h4>Management Consulting</h4>
                                        <p>We work with corporates to assist them in driving sustainable growth, optimizing operations and maximizing profitability for their business. </p>
                                        <p className='anima'><span className='anima-underline' > **** </span></p>
                                        <div className='mobilebtn'>
                                            <NavLink to='/managementconsulting' onClick={scrollToTop}>  <button className="findout-btn mt-3 ">Find out more about us</button> </NavLink></div>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                        <Row className='p-0 m-0 g-0'>

                            {/* service row 2*/}

                            <Col className='col-md-6 hover-box hover ordermobile'>
                                <div className='sol-box black d-bg-box '>
                                    <div className='p-5 mobpara-padding'>
                                        <h4>Investment Advisory</h4>
                                        <p>
                                            From financial planning to investment advisory and deal support, we support financial services firms throughout the investment lifecycle across strategies and asset classes</p>
                                        <p className='anima'><span className='anima-underline' > **** </span></p>
                                        <div className='mobilebtn'>
                                            <NavLink to='/financialadvisory' onClick={scrollToTop}> <button className="findout-btn mt-3 ">Find out more about us</button>  </NavLink></div>
                                    </div>
                                </div>
                            </Col>

                            <Col className='col-md-6 hover-box hover'>
                                <div className='sol-box white ser-box2'>
                                    <div className='text-box'>
                                        <p className='p-5 empty-para'>
                                        </p>
                                    </div>

                                </div>
                            </Col>


                        </Row>
                        <Row className='p-0 m-0 g-0'>

                            {/* service row 3*/}
                            <Col className='col-md-6 hover-box hover'>
                                <div className='sol-box white ser-box3'>
                                    <div className='text-box'>
                                        <p className='p-5 empty-para'>
                                        </p>
                                    </div>

                                </div>
                            </Col>

                            <Col className='col-md-6 hover-box hover'>
                                <div className='sol-box black d-bg-box '>
                                    <div className='p-5 mobpara-padding'>
                                        <h4>Data Advisory</h4>
                                        <p>
                                            With advanced analytics capabilities, we enable our clients to extract actionable intelligence, uncover patterns, and optimize performance across various business functions</p>
                                        <p className='anima'><span className='anima-underline' > **** </span></p>
                                        <div className='mobilebtn'>
                                            <NavLink to='/dataanalyst' onClick={scrollToTop}><button className="findout-btn mt-3 ">Find out more about us</button> </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Servicebody