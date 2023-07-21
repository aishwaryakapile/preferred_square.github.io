import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './whatwedo1.css';
import img1 from '../images/investment_advisory.webp'
import img2 from '../images/transaction_advisory.webp'
import img3 from '../images/valuation_advisory.webp'
import img4 from '../images/corporate_advisory.webp'

const Whatwedo1 = () => {
    return (
        <>

            <section className='whatwedo1-section'>
                <Container>
                    <Row className=''>
                        <Col>
                            <div className='content-box desktop'>
                                <div className="h3">what</div>
                                <div className="strok">We Do</div>
                                <div className="h1 anima"><span className='anima-underline'>We D</span>o</div>
                            </div>
                            <div className='content-box mobile'>
                                <div className="h3">what</div>
                                <div className="strok">We can <br /> Do</div>
                                {/* <div className="h1 anima"><span className='anima-underline'>We Can </span><br /><span className='mobile-h1'>Do</span></div> */}
                                {/* <div className="h1">We Can</div> */}
                                <div className="h1 anima">We Can<span className='anima-underline'>Do</span></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col className='col-md-6'>
                            {/* <div className='gredient-border'> */}
                            <img src={img1} alt='' />
                            {/* </div> */}
                            <div className='img-text'>
                                <h3 className='img-heading'>Investment Advisory </h3>
                                <p className='img-paragraph'>We empower our clients to navigate the complexity of the financial landscape through our expert guidance and insights on risk assessment, investment allocation and return optimization</p>
                            </div>
                        </Col>
                        <Col className='col-md-6'>
                            <div className='text-right side-div padding-div2 mt-div relative-positin'>
                                <div className='marker'></div>
                                <h4>Mergers and acquisitions</h4>
                                <p>Leverage our insights, guidance and research support to identify potential targets, optimize value creation, mitigate risks and achieve synergistic outcomes.</p>
                                <div className='marker'></div>
                                <h4>Pitch decks & PPM</h4>
                                <p>Create impactful and compelling pitch decks that effectively communicate your business value proposition and make a compelling case for your business venture </p>
                                <div className='marker'></div>
                                <h4>Capital raising</h4>
                                <p>Optimize your capital-raising efforts through our research support on Identifying suitable funding sources and developing compelling investment propositions</p>
                                <div className='marker'></div>
                                <h4>Industry landscaping</h4>
                                <p>Gain insights into the market trends, competitive landscape and emerging opportunities to stay ahead of the curve in your industry </p>
                                <div className='marker'></div>
                                <h4>Portfolio analysis & monitoring</h4>
                                <p>Maintain a well-balanced portfolio that aligns with your financial goals, risk tolerance and time horizon through our research and analytics support on investment allocation, risk management and performance tracking</p>
                            </div>

                        </Col>
                    </Row>
                    <Row className='mt-5 pt-3 mt-div2'>
                        <Col className='col-md-6 order1'>
                            <div className='text-left side-div padding-div mt-div relative-positin'>
                                <div className='marker2'></div>
                                <h4>Deal sourcing</h4>
                                <p>Identify potential investment targets and acquisition opportunities that align with your growth objectives</p>
                                <div className='pt-3'>
                                    <div className='marker2'></div>
                                    <h4>Due diligence and deal structuring</h4>
                                    <p>Evaluate opportunities, mitigate risks and optimize transaction outcomes through our guidance on optimizing terms, assessing valuation and negotiation strategies</p></div>
                                <div className='pt-3'>
                                    <div className='marker2'></div>
                                    <h4>Deal closing</h4>
                                    <p>Close deals seamlessly through our assistance on preparation, negotiation and coordination on the complex financial and legal requirements of the deal</p></div>
                                <div className='pt-3'>
                                    <div className='marker2'></div>
                                    <h4>Deal execution</h4>
                                    <p>Navigate the intricacies of deal implementation, including project management, coordination with stakeholders and monitoring of key milestones</p></div>
                                <div className='pt-3'>
                                    <div className='marker2'></div>
                                    <h4>Exit strategy planning</h4>
                                    <p>Identify and execute optimal exit strategies, including divestment, IPOs and mergers through our support on valuation and transaction analysis </p></div>
                            </div>
                        </Col>
                        <Col className='col-md-6'>
                            <img src={img2} alt='' />
                            <div className='img-text'>
                                <h3 className='img-heading'>Transaction advisory </h3>
                                <p className='img-paragraph'>Be it acquiring, divesting or restructuring, we offer comprehensive support throughout the deal lifecycle to ensure that transactions are executed seamlessly and deliver long-term success</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5 pt-3 mt-div2'>
                        <Col className='col-md-6'>
                            <img src={img3} alt='' />
                            <div className='img-text'>
                                <h3 className='img-heading'>Valuation advisory</h3>
                                <p className='img-paragraph'>We leverage our industry knowledge and research expertize to provide an accurate and reliable valuation of assets that enables our clients to make strategic transactions and decisions</p>
                            </div>
                        </Col>
                        <Col className='col-md-6'>
                            <div className='text-right side-div padding-div2 mt-div relative-positin'>
                                <div className='pt-2'> <div className='marker3'></div>
                                    <h4>Real Estate</h4>
                                    <p>Optimize your real estate strategies and maximize the value of your land assets by making informed decisions regarding land acquisition, development and investments</p></div>
                                <div className='pt-2'> <div className='marker3'></div>
                                    <h4>Equity</h4>
                                    <p>Enhance the value of your equity portfolio by making informed investment decisions with our support on financial modeling and market research</p></div>
                                <div className='pt-2'>  <div className='marker3'></div>

                                    <h4>Alternative assets</h4>
                                    <p>Maximize the value of your portfolio by accurately assessing the valuation of alternative asset classes through our advanced valuation techniques</p></div>
                                <div className='pt-2'>   <div className='marker3'></div>

                                    <h4>Private companies</h4>
                                    <p>Assess the correct value of your private business to take strategic growth and investment decisions</p></div>
                                <div className='pt-2'> <div className='marker3'></div>
                                    <h4>Private equity fund</h4>
                                    <p>Drive successful investment outcomes by accurately and comprehensively assessing the value of private equity funds</p></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5 pt-3 mt-div2'>
                        <Col className='col-md-6 order1'>
                            <div className='text-left side-div mt-2 padding-div relative-positin'>
                                <div className='marker4'></div>

                                <h4>Strategy and development</h4>
                                <p>Define your business direction, identify growth opportunities, implement actionable plans and drive organizational transformation through research-led insights and strategies</p>
                                <div className='pt-4'> <div className='marker4'></div>

                                    <h4>Investment and finance</h4>
                                    <p>Develop robust investment strategies, optimize capital allocation and achieve your organization's financial objective through comprehensive solutions that maximize returns and mitigate risks</p></div>
                                <div className='pt-4'><div className='marker4'></div>
                                    <h4>Financial planning and analysis</h4>
                                    <p>Optimize financial performance and strengthen budgeting, forecasting and reporting processes to drive sustainable business growth</p></div>
                                <div className='pt-4'><div className='marker4'></div>
                                    <h4>Budget analysis</h4>
                                    <p>Enhance financial control and performance management by effectively allocating resources, identifying cost-saving opportunities and tracking performance</p></div>
                                {/* <h4>Exit opportunity</h4>
                                <p>Identify and execute optimal exit strategies, including divestment, IPOs and mergers through our support on valuation and transaction analysis </p> */}
                            </div>
                        </Col>
                        <Col className='col-md-6'>
                            <img src={img4} alt='' />
                            <div className='img-text'>
                                <h3 className='img-heading'>Corporate Advisory</h3>
                                <p className='img-paragraph'>With a deep understanding of the industry dynamics and a data-driven approach, we work closely with our clients to develop strategies, optimize operations, identify growth opportunities and enhance shareholder value</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Whatwedo1