import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './careerbody.css';
import cg1 from '../images/cg-1.webp'
import cg2 from '../images/cg-2.webp'
import cg3 from '../images/cg-3.webp'
import cg4 from '../images/cg-4.webp'
import cg5 from '../images/cg-5.webp'
import cg6 from '../images/cg-6.webp'
import cg7 from '../images/cg-7.webp'
import img1 from '../images/cbm1.webp'
import img2 from '../images/cbm2.webp'
import img3 from '../images/cbm3.webp'
import img4 from '../images/cbm4.webp'
import img5 from '../images/cbm5.webp'
import img6 from '../images/cbm6.webp'
import img7 from '../images/cbm7.webp'

const Careerbody = () => {
    return (
        <section className='career-section'  >

            <Container className='desktop'>
                <Row className='w-100 mt-5'>
                    <Col className='col-md-12'>
                        <div className='content-box'>
                            <div className="strok">#Preferred4Life</div>
                        </div>

                        <div className='career-gallery'>
                            <div className='cimage-box cg1'>
                                <img src={cg1} alt='' />
                                <div className='overlay top'>
                                    <div className='link'>
                                        <h4>Adventure Seekers</h4>
                                        <p>We set out on annual treks to the mountain to satiate our hunger for adventure and tranquility.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='cimage-box cg2'>
                                <img src={cg2} alt='' />
                                <div className='overlay top'>
                                    <div className='link'>
                                        <h4>Cricket Enthusiasts</h4>
                                        <p>Conducting business in a cricket-obsessed country and not leading a cricket league ourselves? Not possible! We rejoice in everything cricket and organize Dream 11 competitions for the team every IPL season.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='cimage-box cg3'>
                                <img src={cg3} alt='' />
                                <div className='overlay top '>
                                    <div className='link'>
                                        <h4>Fitness Aficionados</h4>
                                        <p>Many of our team members have found a fitness regime to be liberating. And what better way is there than running to keep you in shape?</p>
                                    </div>
                                </div>
                            </div>
                            <div className='cimage-box cg4'>
                                <img src={cg4} alt='' />
                                <div className='overlay bottom'>
                                    <div className='link'>
                                        <h4>Party Animals</h4>
                                        <p>We take every chance to celebrate, sing our hearts out, and devour together now and then.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='cimage-box cg5'>
                                <img src={cg5} alt='' />
                                <div className='overlay bottom'>
                                    <div className='link'>
                                        <h4>Football Freaks</h4>
                                        <p>As hard as we work, we care deeply about our team’s personal commitments and strike a balance between work and personal life.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='cimage-box cg6'>
                                <img src={cg6} alt='' />
                                <div className='overlay bottom'>
                                    <div className='link'>
                                        <h4>Travel-Bug Bitten</h4>
                                        <p>There are those who love the game of football, and then there’s us. Our team competes in every Euro Cup tournament we conduct.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='cimage-box cg7'>
                                <img src={cg7} alt='' />
                                <div className='overlay bottom'>
                                    <div className='link'>
                                        <h4>Adventure Seekers</h4>
                                        <p>We live by the notion that travel is an important investment in oneself, and share a love for travel and exploration</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Col>
                </Row>
            </Container>
            <Container className='mobile'>
                <Row className='mt-5'>
                    <Col className='col-md-12'>
                        <div className='content-box'>
                            <div className="strok">#Preferred4Life</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className='career-gallery'>
                        <Container>
                            <Row>
                                <div className='row1'>
                                    <div className='img-div1'>
                                        <img src={img1} alt='' className='first-img' />
                                        <div className='bgcolor bg1'>
                                            <div className='img-text'>
                                                <h4>Party Animals</h4>
                                                <p>We take every chance to celebrate, sing our hearts out, and devour together now and then.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='img-div2'>
                                        <img src={img5} alt='' className='second-img'/>
                                        <div className='bgcolor bg2'>
                                            <div className='img-text'>
                                                <h4>Adventure Seekers</h4>
                                                <p>We set out on annual treks to the mountain to satiate our hunger for adventure and tranquility.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='row2'>
                                    <div className='main-div'>
                                        <div className='img-div3'>
                                            <img src={img2} alt='' />
                                            <div className='bgcolor bg3'>
                                                <div className='img-text'>
                                                    <h4>Work-Life Balance Striver</h4>
                                                    <p>As hard as we work, we care deeply about our team’s personal commitments and strike a balance between work and personal life.</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='img-div4'>
                                            <img src={img3} alt='' />
                                            <div className='bgcolor bg4'>
                                                <div className='img-text'>
                                                    <h4>Football Freaks</h4>
                                                    <p>As hard as we work, we care deeply about our team’s personal commitments and strike a balance between work and personal life.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='img-div5'>
                                        <img src={img6} alt='' />
                                        <div className='bgcolor bg5'>
                                            <div className='img-text'>
                                                <h4>Cricket Enthusiasts</h4>
                                                <p>Conducting business in a cricket-obsessed country and not leading a cricket league ourselves? Not possible! We rejoice in everything cricket and organize Dream 11 competitions for the team every IPL season.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row3'>
                                    <div className='img-div6'>
                                        <img src={img4} alt=''  className='third-img'/>
                                        <div className='bgcolor bg6 third-img'>
                                            <div className='img-text'>
                                                <h4>Travel-Bug Bitten</h4>
                                                <p>We live by the notion that travel is an important investment in oneself, and share a love for travel and exploration</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='img-div7'>
                                        <img src={img7} alt='' className='last-img' />
                                        <div className='bgcolor bg7 last-img'>
                                            <div className='img-text'>
                                                <h4>Fitness Aficionados</h4>
                                                <p>Many of our team members have found a fitness regime to be liberating. And what better way is there than running to keep you in shape?</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Row>
                        </Container>
                    </div>

                </Row>
            </Container >
        </section >

    )
}

export default Careerbody
