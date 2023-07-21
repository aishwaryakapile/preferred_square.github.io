import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './wehelp.css';
import img1 from '../images/strategy_consulting.webp'
import img2 from '../images/business_operations.webp'
import img3 from '../images/organizational_consulting.webp'

const Wehelp = () => {
    return (

        <>

            <section className='wehelp-section'>
                <Container>
                    <Row className=''>
                        <Col>
                            <div className='content-box'>
                                <div className="h3">How</div>
                                <div className="strok">We Can <span className='ml-strok'>Help</span></div>
                                <div className="h1 anima desktop"><span className='anima-underline'>We C</span>an <span className='ml'>Help</span></div>
                                <div className="h1 anima mobile">We Can <span className='anima-underline'>Help</span></div>
                      
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5 mobilemargin1'>
                        <Col className='col-md-6'>
                            {/* <div className='gredient-border'> */}
                            <img src={img1} alt='' />
                            {/* </div> */}
                            <div className='img-text'>
                                <h3 className='img-heading'>Strategy Consulting</h3>
                                <p className='img-paragraph'>Through rigorous analysis, market insights, and a deep understanding of industry dynamics, our seasoned consultants collaborate closely with clients to formulate winning market entry strategies to achieve their growth goals </p>
                            </div>

                        </Col>
                        <Col className='col-md-6'>
                            <div className='text-right side-div padding-div2 mt-4 relative-positin'>
                                <div className='marker'></div>
                                <h4>Strategy development</h4>
                                <p>Identify new opportunities, optimize existing portfolio and align business units for  maximum operational effectiveness</p>
                                <div className='marker'></div>
                                <h4>Business plans</h4>
                                <p>Align resources towards a unified vision of creating exceptional value for all your stakeholders and gaining competitive advantage</p>
                                <div className='marker'></div>
                                <h4>Investment strategy  </h4>
                                <p>Optimize investment decisions, identify lucrative opportunities and mitigate risk through a robust investment strategy aligned with your financial goals</p>
                                <div className='marker'></div>
                                <h4>Strategy Implementation</h4>
                                {/* <p>Optimize investment decisions, identify lucrative opportunities and mitigate risk through a robust investment strategy aligned with your financial goals</p> */}
                                {/* <div className='marker'></div>
                                <h4>Go-to-market strategy</h4>
                                <p>Expand into new geographies, launch products and grow revenue through customized strategies aligned with the business objectives</p> */}
                            </div>

                        </Col>
                    </Row>
                    <Row className='mt-5 pt-3 mobilemargin2'>
                        <Col className='col-md-6 order1'>
                            <div className='text-left side-div mobilemargin2 relative-positin'>
                                <div>
                                    <div className='marker2'></div>

                                    <h4>Performance management</h4>
                                    <p>Drive high-performance outcomes by implementing effective performance measurement systems, enhancing employee engagement, and fostering a culture of motivation and productivity.</p>
                                </div>
                                <div className=''>
                                    <div className='marker2'></div>

                                    <h4>Finance support</h4>
                                    <p>Achieve growth goals by aligning your financial budgets with corporate objectives. Develop robust investment strategies, optimize capital allocation and achieve your organization's financial objective through comprehensive solutions that maximize returns and mitigate risks</p>
                                </div>
                                <div>
                                    <div className='marker2'></div>

                                    <h4>Organization design</h4>
                                    <p>Adapt to the evolving market dynamics and drive sustainable growth by creating structures and processes that foster agility, collaboration, and efficiency.</p>
                                </div>
                                <div>
                                    <div className='marker2'></div>
                                    <h4>Annual Operating Plans </h4>
                                    {/* <p>Adapt to the evolving market dynamics and drive sustainable growth by creating structures and processes that foster agility, collaboration, and efficiency.</p> */}
                                </div>
                                <div className='pt-5'>
                                    <div className='marker2'></div>
                                    <h4>Process Consulting  </h4>
                                    {/* <p>Adapt to the evolving market dynamics and drive sustainable growth by creating structures and processes that foster agility, collaboration, and efficiency.</p> */}
                                </div>
                            </div>
                        </Col>
                        <Col className='col-md-6'>
                            <img src={img2} alt='' />
                            <div className='img-text img-text2'>
                                <h3 className='img-heading'>Business operations  Consulting
</h3>
                                <p className='img-paragraph'>Utilizing our expertise in operations management, process optimization, and technology integration, we work closely with clients to identify bottlenecks, implement best practices, and drive operational excellence.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5 pt-3 mobilemargin2'>
                        <Col className='col-md-6'>
                            <img src={img3} alt='' />
                            <div className='img-text'>
                                <h3 className='img-heading'>Project Management</h3>
                                <p className='img-paragraph'>With a focus on strategic alignment, change management, and talent development, we collaborate closely with organizations to drive transformation, increase agility, and foster a high-performing work environment.</p>
                            </div>
                        </Col>
                        <Col className='col-md-6'>
                            <div className='text-right side-div padding-div2 mt-5 pt-4 mobilemargin3 relative-positin'>
                                <div className='marker'></div>
                                <h4>Enterprise Project management Office (EPMO)</h4>
                                {/* <p>dapt to the evolving market dynamics and drive sustainable growth by creating structures and processes that foster agility, collaboration, and efficiency.</p> */}
                               <div className='pt-5 mobilemargin2-div'>
                               <div className='marker'></div>
                                <h4>Project Management Office (PMO)</h4>
                                {/* <p>Enhance efficiency, reduce costs and achieve peak performance by aligning processes, technology, and resources.</p> */}
                               </div>
                               <div className='pt-5 mobilemargin2-div'>
                                <div className='marker'></div>

                                <h4>Strategic Management Office (SMO)</h4>
                                {/* <p>Drive high performance and engagement through comprehensive training initiatives tailored to equip employees with knowledge needed to excel </p> */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Wehelp