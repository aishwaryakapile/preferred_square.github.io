import React, {useState} from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './careerjob.css';
import jobimg1 from '../images/job1.webp'
import jobimg2 from '../images/job2.webp'
import jobimg3 from '../images/job3.webp'

const Careerjob = () => {
    const [active, setActive] = useState('job1');

    return (
    <section className='careerjob-section'  >
   
    <Container>
      <Row className='w-100 mt-5'>
        <Col className='col-md-6'>
            <div className='content-box'>
                <h2>Latest</h2>
                <div className="strok">Job</div>
                <div className="h1">Job<br/><span className='h1 animate-underline' style={{paddingBottom: "40px"}}>Openings</span></div>
            </div>
        </Col>

        <Col className='col-md-6'>

        <div className={active === 'job1' ? "job-accordian gredient-border my-4 active" : "job-accordian gredient-border my-4"}>        
            <div className="accordion-header" onClick={() => { setActive('job1') }}>
                <img src={jobimg1}  alt=''/>
                <div className='heading'>Senior Business Analyst</div>
            </div>
            
            <div className={active === 'job1' ? "accordion-body active" : "accordion-body"} >
                <p><span>Experienced Required:</span> 2 to 4 years. Strong quantitative, analytical and conceptual problem-solving skills combined with outstanding business acumen. Adept at financial modelling. Excellent presentation skills.</p>
                <p><span>Education Level:</span> CA/BBA/B.Com./CFA Level 1/2/3/ MBA Finance</p>
                <p><span>Job Location: </span> Gurugaon</p>
                <a href="/jobopening">Job Description <span className="ms-2"><svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 6.5V4H11V0.5L16 5.5L11 10.5V6.5H0Z" fill="#25635C"/></svg></span></a>
            </div>
        </div>
        
        <div className={active === 'job2' ? "job-accordian gredient-border my-4 active" : "job-accordian gredient-border my-4"}>        
            <div className="accordion-header" onClick={() => { setActive('job2') }}>
                <img src={jobimg2}  alt=''/>
                <div className='heading'>Consultant</div>
            </div>
            
            <div className={active === 'job2' ? "accordion-body active" : "accordion-body"} >
            <p><span>Experienced Required:</span> 2 to 4 years. Strong quantitative, analytical and conceptual problem-solving skills combined with outstanding business acumen. Adept at financial modelling. Excellent presentation skills.</p>
                <p><span>Education Level:</span> CA/BBA/B.Com./CFA Level 1/2/3/ MBA Finance</p>
                <p><span>Job Location: </span> Gurugaon</p>
                <a href="/jobopening">Job Description <span className="ms-2"><svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 6.5V4H11V0.5L16 5.5L11 10.5V6.5H0Z" fill="#25635C"/></svg></span></a>
            </div>
        </div>

        <div className={active === 'job3' ? "job-accordian gredient-border my-4 active" : "job-accordian gredient-border my-4"}>        
            <div className="accordion-header" onClick={() => { setActive('job3') }}>
                <img src={jobimg3}  alt=''/>
                <div className='heading'>Business Analyst</div>
            </div>
            
            <div className={active === 'job3' ? "accordion-body active" : "accordion-body"} >
            <p><span>Experienced Required:</span> 2 to 4 years. Strong quantitative, analytical and conceptual problem-solving skills combined with outstanding business acumen. Adept at financial modelling. Excellent presentation skills.</p>
                <p><span>Education Level:</span> CA/BBA/B.Com./CFA Level 1/2/3/ MBA Finance</p>
                <p><span>Job Location: </span> Gurugaon</p>
                <a href="/jobopening">Job Description <span className="ms-2"><svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 6.5V4H11V0.5L16 5.5L11 10.5V6.5H0Z" fill="#25635C"/></svg></span></a>
            </div>
        </div>

        </Col>
   
      </Row> 
    </Container>
  </section>      

  )
}

export default Careerjob
