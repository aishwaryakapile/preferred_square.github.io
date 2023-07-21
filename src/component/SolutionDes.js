import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './solutiondes.css'

const SolutionDes = () => {
  return (
    <section className='solutiondes-section bg-light' >
    <Container fluid>
        <Row className='w-80 g-0 py-5'>
            <Col className='col-md-10 text-center py-3 mx-auto'>
                <p>We work as extended teams of organizations across domains and industries to solve complex business challenges, optimize investment strategies and drive long-lasting business growth </p>
            </Col> 
        </Row>
    </Container>
    </section>
  )
}

export default SolutionDes