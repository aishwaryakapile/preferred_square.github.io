import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './whatwedo2.css';
import img1 from '../images/data_engineering.webp'
import img2 from '../images/cloud_migration.webp'
import img3 from '../images/business_intelligence.webp'
import img4 from '../images/predictive_modelling.webp'

const Whatwedo2 = () => {
    return (
        <>

            <section className='whatwedo2-section'>
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
                                <div className="strok">We can<br /><span className='mobile-strok2'>Do</span></div>
                                {/* <div className="h1 anima"><span className='anima-underline'>We Can </span><br /><span className='mobile-h1'>Do</span></div> */}
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
                                <h3 className='img-heading'>Data Engineering </h3>
                                <p className='img-paragraph'>Through our experience in cutting-edge technologies and industry best practices, we enable our clients to build robust and scalable data infrastructures for efficient data management, integration and analytics.</p>
                            </div>

                        </Col>
                        <Col className='col-md-6'>
                            <div className='text-right side-div padding-div2 mt-2 mt-para relative-positin'>
                                <div>  <div className='marker'></div>
                                    <h4>Data Architecture</h4>
                                    <p>Optimize your data ecosystem and establish a solid foundation for data management through data modeling, database design and infrastructure planning</p></div>
                                <div className='pt-4 mt-para'> <div className='marker'></div>
                                    <h4>Data Warehousing</h4>
                                    <p>Centralize and streamline data from disparate structured and unstructured data sources to efficiently retrieve actionable insights critical for informed decision-making</p></div>
                                <div className='pt-4 mt-para'> <div className='marker'></div>
                                    <h4>Data Transformation</h4>
                                    <p>Enhance the quality and usability of your data by leveraging our advanced techniques and tools to process and refine raw data</p></div>
                                <div className='pt-4 mt-para'> <div className='marker'></div>
                                    <h4>Data Governance</h4>
                                    <p>Define and implement robust frameworks, standards and control to ensure data accuracy, privacy and security while promoting regulatory compliance</p></div>
                                {/* <div className='marker'></div>
                                <h4>Portfolio management</h4>
                                <p>Maintain a well-balanced portfolio that aligns with your financial goals, risk tolerance and time horizon through our research and analytics support on investment allocation, risk management and performance tracking</p> */}
                            </div>

                        </Col>
                    </Row>
                    <Row className='mt-5 pt-3 mt-div'>
                        <Col className='col-md-6 order1'>
                            <div className='text-left side-div padding-div mt-5 pt-5 mt-div2 relative-positin'>
                                <div className='pt-5'>  <div className='marker2'></div>

                                    <h4>Large Database Migration</h4>
                                    <p>Seamlessly transfer massive data sets with precision and efficiency with minimum downtime and continued business operations</p></div>
                                <div className='pt-5 mt-5 mt-para-div'>  <div className='marker2'></div>

                                    <h4>Data Integrity</h4>
                                    <p>Secure your data assets and mitigate the risks associated with errors, inconsistencies and unauthorized modifications</p></div>
                                {/* <div className='marker2'></div>

                                <h4>Deal closing</h4>
                                <p>Close deals seamlessly through our assistance on preparation, negotiation and coordination on the complex financial and legal requirements of the deal</p>
                                <div className='marker2'></div>
                                <h4>Deal execution</h4>
                                <p>Navigate the intricacies of deal implementation, including project management, coordination with stakeholders and monitoring of key milestones</p>
                                <div className='marker2'></div>
                                <h4>Exit opportunity</h4>
                                <p>Identify and execute optimal exit strategies, including divestment, IPOs and mergers through our support on valuation and transaction analysis </p> */}
                            </div>
                        </Col>
                        <Col className='col-md-6'>
                            <img src={img2} alt='' />
                            <div className='img-text'>
                                <h3 className='img-heading'>Cloud Migration </h3>
                                <p className='img-paragraph'>With a focus on scalability, cost optimization, and security, we support organizations in leveraging the full benefits of the cloud to drive innovation, improve agility and achieve organizational excellence.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5 pt-3 mt-div'>
                        <Col className='col-md-6'>
                            <img src={img3} alt='' />
                            <div className='img-text'>
                                <h3 className='img-heading'>Business Intelligence</h3>
                                <p className='img-paragraph'>Through our intelligent and advanced analytics solutions, we enable our clients to transform complex data into meaningful strategic and actionable insights</p>
                            </div>
                        </Col>
                        <Col className='col-md-6'>
                            <div className='text-right side-div padding-div2 pt-3 relative-positin'>
                                <div className='pt-4'>  <div className='marker3'></div>
                                    <h4>Data Visualization</h4>
                                    <p>Identify trends, recognize patterns and decode complex data through clear and visually appealing interactive formats</p></div>
                                <div className='pt-4'> <div className='marker3'></div>
                                    <h4>Descriptive Analytics</h4>
                                    <p>Gather meaningful insights from past performance and trends through the analysis of historical data</p></div>
                                <div className='pt-4'> <div className='marker3'></div>

                                    <h4>Data-driven research</h4>
                                    <p>Drive strategic initiatives on the basis of comprehensively collected and rigorously analyzed data</p></div>
                                <div className='pt-4'> <div className='marker3'></div>

                                    <h4>Pattern Recognition</h4>
                                    <p>Identify meaningful patterns, correlations, and anomalies within complex datasets by leveraging advanced algorithm and machine learning technology</p></div>
                                {/* <div className='marker3'></div>
                                <h4>Private equity fund</h4>
                                <p>Drive successful investment outcomes by accurately and comprehensively assessing the value of private equity funds</p> */}
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5 pt-3 mt-div'>
                        <Col className='col-md-6 order1'>
                            <div className='text-left side-div mt-5 padding-div mt-div relative-positin'>
                                <div className='marker4'></div>

                                <h4>Sales Analysis</h4>
                                <p>Improve sales performance, optimize sales strategies, identify growth opportunities and drive revenue growth by gaining deeper insights into sales performance</p>
                                <div className='marker4'></div>

                                <h4>Market Assessment</h4>
                                <p>Unlock the potential for sustainable growth in your target markets by leveraging comprehensive insights into market trends, customer behavior and competition</p>
                                <div className='marker4'></div>
                                <h4>Risk Assessment</h4>
                                <p>Minimize risk and ensure long-term success by identifying potential threats, vulnerabilities and uncertainties in your business environment</p>
                                <div className='marker4'></div>
                                <h4>Quality Enhancement</h4>
                                <p>Improve the quality of your offerings, drive operational excellence and deliver superior customer experience by optimizing processes, systems and products on the basis of comprehensive assessments and data-driven analysis</p>
                                {/* <h4>Exit opportunity</h4>
                                <p>Identify and execute optimal exit strategies, including divestment, IPOs and mergers through our support on valuation and transaction analysis </p> */}
                            </div>
                        </Col>
                        <Col className='col-md-6'>
                            <img src={img4} alt='' />
                            <div className='img-text img-text2'>
                                <h3 className='img-heading  mobile-heading'>Predictive Modeling and Advanced Analytics </h3>
                                <p className='img-paragraph'>
                                    We equip our clients to make proactive decisions, optimize strategies and stay ahead in the competitive landscape by leveraging cutting-edge techniques and algorithms to forecast trends, identify opportunities and make predictions based on historical and real-time data.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Whatwedo2