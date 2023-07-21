import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './buspotential.css';

const Buspotential = (props) => {
    // const paragraph="We are passionate about helping businesses thrive in today's dynamic and competitive landscape. With our deep expertise and commitment to excellence, we offer strategic guidance and transformative solutions that drive tangible results. As a trusted partner, we work closely with our clients to understand their unique challenges and craft tailored strategies to unlock their true potential."
    return (
        <>
            <section className='potential-section'>
            <Container>
                    <Row className=''>
                        <Col>
                            <div className='content-box desktop'>
                                <div className="h3">Unlock Your</div>
                                <div className="strok">business potential</div>
                                <div className="h1 anima "><span className='anima-underline'>Busin</span>ess Potential</div>
                            </div>
                            <div className='content-box mobile'>
                                <div className="h3">Unlock Your</div>
                                <div className="strok"><span>business <br/> potential</span></div>
                                <div className="h1 anima">Business<span className='ml'><span className='anima-underline'>Potent</span>ial</span></div>
                            </div>
                            
                            
                        </Col>
                        <p>{props.paragraph}</p>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
                </section>
        </>
    )
}

export default Buspotential