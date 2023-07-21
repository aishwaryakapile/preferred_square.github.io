import React from 'react'
import './whoweserve.css'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../images/real-estatepsabout.webp'
import img2 from '../images/family-officesabout.webp'
import img3 from '../images/investmentbank-about.webp'
import img4 from '../images/assesment-managerabout.webp'
import img5 from '../images/private-equityabout.webp'
import img6 from '../images/endowment-about.webp'
import img7 from '../images/hedge-fundabout.webp'
import img8 from '../images/wealth-fundabout.webp'

const Whoweserve = () => {
    return (
        <>
            <section className='whoweserve-section'>
                <Container className='desktop'>
                    <Row className='mt-5 pt-5'>
                        <Col>
                            <div className='content-box'>
                                <div className="h3">who</div>
                                <div className="strok">We Serve</div>
                                <div className="h1 anima">
                                    W<span className='anima-underline'>e Serv</span>e</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5 pt-5'>
                        <Col className='col-md-3 text-center'>
                            <div className='relative small-height mb-3'>
                                <img src={img1} alt=''  />
                                <h5 className='img-heading small-img-head'>Real Estate</h5>
                            </div>
                            <div className='relative large-height'>
                                <img src={img2} alt='' />
                                <h5 className='img-heading large-img-head'>Family Offices</h5>
                            </div>
                        </Col>
                        <Col className='col-md-3'>
                            <div className='relative large-height mb-2 pb-1'>
                            <img src={img3} alt='' className='' />
                            <h5 className='img-heading large-img-head'>Investment Bank & Advisors</h5>
                        </div>
                            <div className='relative small-height'>
                                <img src={img4} alt='' className=' margintop' />
                                <h5 className='img-heading small-img-head'>Asset Managers</h5>
                            </div></Col>
                        <Col className='col-md-3'>
                            <div className='relative small-height mb-3'>
                            <img src={img5} alt='' className='' />
                            <h5 className='img-heading small-img-head'>Private Equity / Venture Capitals</h5>
                        </div>
                            <div className='relative large-height'>
                                <img src={img6} alt='' className='margintop' />
                                <h5 className='img-heading large-img-head'>Endowment Funds</h5>
                            </div></Col>
                        <Col className='col-md-3'>
                            <div className='relative large-height mb-2 pb-1'>
                                <img src={img7} alt='' />
                                <h5 className='img-heading large-img-head'>Hedge Funds</h5>
                            </div>
                            <div className='relative small-height'>
                                <img src={img8} alt='' className='' />
                                <h5 className='img-heading small-img-head'>Sovereign Wealth Funds</h5>
                            </div></Col>
                    </Row>
                </Container>


                <Container className='mobile'>
                    <Col>
                        <div className='content-box'>
                                <div className="h3">who</div>
                                <div className="strok">We Serve</div>
                                <div className="h1 anima">
                                    <span className='anima-underline'>We Ser</span>ve</div>
                            </div>
                    </Col>
                    <Row className='img-row'>
                        <Col className='col-md-6'>
                            <div className='position-relative'>
                                <img src={img1} alt='' />
                                <div>
                                    <h5 className='img-heading-Mob small-imghead'>Real Estate</h5>
                                </div>
                            </div>
                            <div className='position-relative'>
                                <img src={img2} alt='' />
                                <div>
                                    <h5 className='img-heading-Mob large-imghead'>Family Offices</h5>
                                </div>
                            </div>
                            <div className='position-relative'>
                                <img src={img5} alt='' />
                                <div>
                                    <h5 className='img-heading-Mob small-imghead'>Private Equity / Venture Capitals</h5>
                                </div>
                            </div>
                            <div className='position-relative'>
                                <img src={img6} alt='' />
                                <div>
                                    <h5 className='img-heading-Mob large-imghead'>Endowment Funds</h5>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-md-6'>
                            <div className='position-relative'>
                                <img src={img3} alt='' />
                                <div>
                                    <h5 className='img-heading-Mob large-imghead'>Investment Bank & Advisors</h5>
                                </div>
                            </div>
                            <div className='position-relative'>
                                <img src={img4} alt='' />
                                <div>
                                    <h5 className='img-heading-Mob small-imghead'>Asset Managers</h5>
                                </div>
                            </div>
                            <div className='position-relative'>
                                <img src={img7} alt='' />
                                <div>
                                    <h5 className='img-heading-Mob large-imghead'>Hedge Funds</h5>
                                </div>
                            </div>
                            <div className='position-relative'>
                                <img src={img8} alt='' />
                                <div>
                                    <h5 className='img-heading-Mob small-imghead'>Sovereign Wealth Funds</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>

            </section>
        </>
    )
}

export default Whoweserve