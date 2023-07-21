import React from 'react'
import './aboutteam.css'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../images/anandimg.webp'
import img2 from '../images/goelimg.webp'


const Abouttteam = () => {
    return (
        <>
            <section className='aboutteam-section desktop py-5'>
                <Container>
                    <Row className='g-5'>
                        <Col className='col-md-6'>
                            <div className='content-box'>
                                <h2>Meet</h2>
                                <div className="strok">Team</div>
                                <div className="h1 anima"><span className='anima-underline'>The </span> Team</div>
                            </div>
                            <div>
                                <div className='imgdiv1'>
                                    <img src={img1} alt='' />
                                    <div className='bgblue'>
                                        <h4>Vibhor Anand</h4>
                                        <h5>Managing Director</h5>
                                    </div>
                                </div>
                                <div>

                                    <p className='para1'>Vibhor is the Managing Director at Preferred Square. During the course of his 15+ years of experience, he has worked with over a hundred asset managers in the LP GP ecosystem with a total AUM of more than USD 3 Tn. From setting up delivery teams, ground up, to managing and leading large-scale delivery teams, he specializes in operationalizing offshore consulting.
                                        His sectoral expertise lies in [list 3-5 sectors].
                                        He loves to read on philosophy, economics and fitness. An active badminton, squash and basketball player, he now has his eyes set on learning how to play golf. </p>
                                </div>                        
                            </div>
                       
                        </Col>
                        <Col className='col-md-6'>
                          <div className='mt-5'>
                                <div className='imgdiv'>
                                    <img src={img2} alt='' />
                                    <div className='bgpink'>
                                        <h4>Pulkit Goel</h4>
                                        <h5>Managing Director</h5>
                                    </div>
                                </div>
                                <div className='seconddiv'>

                                    {/* <p className='para2'>With over 13 years of experience in Management Consulting, Investment Banking, and Corporate Finance, Pulkit has led valuation advisory to large family holdings and RE giants globally. During his EY stint, Pulkit spearheaded the execution of the Microsoft-LinkedIn acquisition deal exceeding $30 Bn</p> */}
                                    <p className='para2'>Pulkit is the managing director and founder of Preferred Square. He started his career in investment banking and gained exposure across sell side and buy side while participating in deals worth more than USD 30 Bn. After having worked in corporate finance and valuation advisory for over 10 years, he pivoted to establish Preferred Square.His sectoral expertize lies in Real Estate, Financial Services, Energy, Technology, Retail & Manufacturing.A runner and an active badminton and squash player, he loves to travel and hike off-beat paths.</p>
                                </div>
                          </div>  
                          
                        </Col>
                    </Row>
                </Container>

            </section>

            <section className='aboutteam-section mobile  mt-5 mb-4'>
                <Container>
                    <Row>
                        <div className='content-box'>
                            <h2>Meet</h2>
                            <div className="strok">The Team</div>
                            <div className="h1 anima"><span className='anima-underline'>The </span> Team</div>
                        </div>
                    </Row>
                </Container>
                <Container className='team-container'>
                    <Row>
                        <div className=''>
                            <img src={img2} alt='' className='img1' />
                            <div className='bgpink-mobile'>
                                <h4>Pulkit Goel</h4>
                                <h5>Managing Director</h5>
                            </div>
                        </div>
                        <p className='teampara1'>With over 13 years of experience in Management Consulting, Investment Banking, and Corporate Finance, Pulkit has led valuation advisory to large family holdings and RE giants globally. During his EY stint, Pulkit spearheaded the execution of the Microsoft-LinkedIn acquisition deal exceeding $30 Bn</p>
                    </Row>
                    <Row className='mt-5 pt-4'>
                        <div>
                            <div className=''>
                                <img src={img1} alt='' className='img2' />
                                <div className='bgblue-mobile'>
                                    <h4>Vibhor Anand</h4>
                                    <h5>Managing Director</h5>
                                </div>
                            </div>
                        </div>
                        <p className='teampara2'>
                            Vibhor is the Managing Director at Preferred Square. During the course of his 15+ years of experience, he has worked with over a hundred asset managers in the LP GP ecosystem with a total AUM of more than USD 3 Tn. From setting up delivery teams, ground up, to managing and leading large-scale delivery teams, he specializes in operationalizing offshore consulting.
                            His sectoral expertise lies in [list 3-5 sectors]
                            He loves to read on philosophy, economics and fitness. An active badminton, squash and basketball player, he now has his eyes set on learning how to play golf.
                        </p>
                    </Row>
                </Container>

            </section>


        </>
    )
}

export default Abouttteam