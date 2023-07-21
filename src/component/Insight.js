import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import img1 from '../images/insightimg1.webp'
import img2 from '../images/insightimg2.webp'
import './insight.css'

const Insight = () => {
    const data = [
        {
            id: 1,
            image: img1,
            heading: 'Technology transforming Real Estate Industry',
            paragraph: 'The introduction of cutting-edge technologies in real estate promises to change…',
            bttn: 'Find out more about us'
        },
        {
            id: 2,
            image: img2,
            heading: 'Technology transforming Real Estate Industry',
            paragraph: 'The introduction of cutting-edge technologies in real estate promises to change…',
            bttn: 'Find out more about us'
        },
        {
            id: 3,
            image: img1,
            heading: 'Technology transforming Real Estate Industry',
            paragraph: 'The introduction of cutting-edge technologies in real estate promises to change…',
            bttn: 'Find out more about us'
        },
        {
            id: 4,
            image: img2,
            heading: 'Technology transforming Real Estate Industry',
            paragraph: 'The introduction of cutting-edge technologies in real estate promises to change…',
            bttn: 'Find out more about us'
        },
        {
            id: 5,
            image: img1,
            heading: 'Technology transforming Real Estate Industry',
            paragraph: 'The introduction of cutting-edge technologies in real estate promises to change…',
            bttn: 'Find out more about us'
        },
        {
            id: 6,
            image: img2,
            heading: 'Technology transforming Real Estate Industry',
            paragraph: 'The introduction of cutting-edge technologies in real estate promises to change…',
            bttn: 'Find out more about us'
        }
    ]
    return (
        <>
            <Container className='insight-section'>
                <Row>
                    {
                        data.map((d) => {
                            return (
                                <Col className='col-md-4 mt-4 mb-5 pb-4'>
                                   <div className='p-2'>
                                   <div>
                                        <img src={d.image} alt='' />
                                    </div>
                                    <div>
                                    <h2 className='mt-4'>{d.heading}</h2>
                                        <p className='mt-4 pb-2'>{d.paragraph}</p>
                                        <p className='anima'><span className='anima-underline' > **** </span></p>
                                    </div>
                                    <button className='mt-5'>{d.bttn}</button>
                                   </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Insight