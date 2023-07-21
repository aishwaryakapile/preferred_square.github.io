import React from 'react'
import './ourvalue.css'
import img1 from '../images/ourvalue1.webp'
import img2 from '../images/ourvalue2.webp'
import img3 from '../images/ourvalue3.webp'
import img4 from '../images/ourvalue4.webp'
import mobileimg1 from '../images/valuemobimg1.webp'
import mobileimg2 from '../images/valuemobimg2.webp'
import mobileimg3 from '../images/valuemobimg3.webp'
import mobileimg4 from '../images/valuemobimg4.webp'

import { Col, Container, Row } from 'react-bootstrap'
const Ourvalue = () => {
    return (
        <>
            <section className='ourvalue-section pb-5 desktop'>
                <Container className='mt-5 paddingtop'>
                    <Row className=''>
                        <Col className='col-md-4'>
                            <div className='content-box'>
                                <div className='relative'>
                                <div className="h3">Our</div>
                                <div className="strok">Values</div>
                                <div className="h1 anima">
                                    <span className='anima-underline'>Value</span>s</div>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-md-8'>
                            <Container>
                                <Row className='value-row our-values'>
                                    <div className='inner-main-div'>
                                        <div className='value-img-div anbox-1 translate'>
                                            {/* <div> */}
                                            <img src={img1} alt='' className='img-1' />
                                            <div className='img-text img-text1'>
                                                <h4 className='img-heading'><span className='text-bold boldmob'>S</span>IMPLIFY</h4>
                                                <p>We believe what can be explained simply must not be complicated</p>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                        <div className='value-img-div anbox-2'>
                                            <img src={img2} alt='' className='img-2' />
                                            <div className='img-text img-text2'>
                                                <h4 className='img-heading'><span className='text-bold'>QU</span>ANTIFY</h4>
                                                <p>We combine simplification with quantification<br /> to achieve specificity</p>
                                            </div>
                                        </div>
                                        <div className='value-img-div anbox-3'>
                                            <img src={img3} alt='' className='img-3' />
                                            <div className='img-text img-text3'>
                                                <h4 className='img-heading'><span className='text-bold'>A</span>DAPT</h4>
                                                <p>We are proactively adapting to the <br />evolving business environment</p>
                                            </div>
                                        </div>
                                        <div className='value-img-div anbox-4 translate2'>
                                            <img src={img4} alt='' className='img-4' />
                                            <div className='img-text img-text2' >
                                                <h4 className='img-heading'><span className='text-bold'>RE</span>SPOND</h4>
                                                <p>We believe in actively responding to client <br />issues and engaging them</p>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div className='inner-main-div2'>
                                        <div className='value-img-div translate2'>
                                            <img src={img3} alt='' className='img-3' />
                                            <div className='img-text img-text3'>
                                                <h4 className='img-heading'><span className='text-bold'>A</span>dapt</h4>
                                                <p>We are proactively adapting to the <br />evolving business environment</p>
                                            </div>
                                        </div>
                                        <div className='value-img-div margin-left'>
                                            <img src={img4} alt='' className='img-4' />
                                            <div className='img-text img-text2' >
                                                <h4 className='img-heading'><span className='text-bold'>RE</span>spond</h4>
                                                <p>We believe in actively responding to client <br />issues and engaging them</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='ourvalue-section mobile mt-4'>
                <div className='bg-pink'></div>

                <Container className='mt-4'>
                    <div className='content-box'>
                        <div className="h3">Our</div>
                        <div className="strok">Values</div>
                        <div className="h1 anima"><span className='anima-underline'>Values</span></div>
                    </div>
                </Container>
                <Container className='value-img mt-5 pt-4'>
                    <Row>
                        <div>
                            <img src={mobileimg1} alt=''  className='img1'/>
                            <div className='img-text-mobile text-right'>
                                <h2 className='img-heading'><span className='textbold'>S</span>IMPLIFY</h2>
                                <p>We believe what can be explained simply <br/>must not be complicated</p>
                            </div>
                      
                            <img src={mobileimg2} alt=''  className='img2'/>
                            <div className='img-text-mobile text-right'>
                                <h2 className='img-heading'><span className='textbold'>QU</span>antify</h2>
                                <p>We combine simplification with quantification<br/> to achieve specificity</p>
                            </div>
                      
                            <img src={mobileimg3} alt=''  className='img3'/>
                            <div className='img-text-mobile text-left'>
                                <h2 className='img-heading'><span className='textbold'>A</span>dapt</h2>
                                <p>We are proactively adapting to the evolving business environment</p>
                            </div>
                     
                            <img src={mobileimg4} alt=''  className='img4'/>
                            <div className='img-text-mobile text-left'>
                                <h2 className='img-heading'><span className='textbold'>RE</span>spond</h2>
                                <p>We believe in actively responding to client issues and engaging them</p>
                            </div>
                        </div>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Ourvalue