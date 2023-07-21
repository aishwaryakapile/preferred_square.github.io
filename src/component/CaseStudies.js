import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from '../images/casestudiesimg1.webp'
import './casestudies.css'

const CaseStudies = () => {
    const heading = 'Case Study 1: Leveraged Buyout (LBO)';
    const paragraph = 'The introduction of cutting-edge technologies in real estate promises to change…';
    const bttn = 'Find out more about us'
    return (
        <>
            <Container className='casestudy-section desktop'>
                <Row>
                    <Col className='col-md-4 mt-4 mb-5 pb-4'>
                        <div className='p-2'>
                            <div>
                                <img src={img1} alt='' />
                            </div>
                            <div>
                                <h2 className='mt-4'>{heading}</h2>
                                <p className='mt-4'>{paragraph}</p>
                                <p className='anima'><span className='anima-underline' > **** </span></p>
                            </div>
                            <button className='mt-4'>{bttn}</button>
                        </div>
                    </Col><Col className='col-md-4 mt-4 mb-5 pb-4'>
                        <div className='p-2'>
                            <div>
                                <img src={img1} alt='' />
                            </div>
                            <div>
                                <h2 className='mt-4'>{heading}</h2>
                                <p className='mt-4'>{paragraph}</p>
                                <p className='anima'><span className='anima-underline' > **** </span></p>
                            </div>
                            <button className='mt-4'>{bttn}</button>
                        </div>
                    </Col><Col className='col-md-4 mt-4 mb-5 pb-4'>
                        <div className='p-2'>
                            <div>
                                <img src={img1} alt='' />
                            </div>
                            <div>
                                <h2 className='mt-4'>{heading}</h2>
                                <p className='mt-4'>{paragraph}</p>
                                <p className='anima'><span className='anima-underline' > **** </span></p>
                            </div>
                            <button className='mt-4'>{bttn}</button>
                        </div>
                    </Col>
                    
                </Row>
            </Container>

        </>
    )
}

export default CaseStudies