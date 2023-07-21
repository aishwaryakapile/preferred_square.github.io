import React from 'react'
import { Container } from 'react-bootstrap'
import './jobopeningheader.css'
const JobOpeningheader = () => {
  return (
    <>

      <header className='header-JobOpening'>
        <Container fluid className='hero px-5 pt-3'>
          <div className='hero-content'>
            <div className='hero-text'>
              <h6>Latest
              </h6>
              <h2>Job Openings<span className='spanh2'></span></h2>
             
            </div>
          </div>

        </Container>
      </header>
    </>
  )
}

export default JobOpeningheader