import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './news.css'
import img1 from '../images/newsimg.webp'
import img2 from '../images/newsicon1.webp'
import img3 from '../images/newsicon2.webp'
import img4 from '../images/newsicon3.webp'
import img5 from '../images/newsicon4.webp'


const News = () => {
    return (
        <>
            <section className='news-section'>
                <Container>
                    <Row>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <img src={img1} alt='' />
                        <Col className='col-md-8'>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.<br /><br />

                                    Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.<br /><br />

                                    Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>
                            </div>
                            <div>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.

                                    Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.

                                    Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>
                            </div>
                        </Col>
                        <Col className='col-md-4'>
                        <h3>Latest news</h3>
                            <Row className='botm-border'>
                                <Col className='col-md-2 img-div'>
                                    <img src={img2} alt=''/>
                                </Col>
                                <Col className='col-md-10'>
                                    <h4>Title</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Col>
                            </Row><Row className='botm-border'>
                                <Col className='col-md-2 img-div'>
                                    <img src={img3} alt=''/>
                                </Col>
                                <Col className='col-md-10'>
                                    <h4>Title</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Col>
                            </Row><Row className='botm-border'>
                                <Col className='col-md-2 img-div'>
                                    <img src={img4} alt=''/>
                                </Col>
                                <Col className='col-md-10'>
                                    <h4>Title</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Col>
                            </Row><Row className='botm-border'>
                                <Col className='col-md-2 img-div'>
                                    <img src={img5} alt=''/>
                                </Col>
                                <Col className='col-md-10'>
                                    <h4>Title</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default News