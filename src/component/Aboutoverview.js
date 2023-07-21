import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './aboutoverview.css';



const Aboutoverview = () => {
    // Skewed text
    const [sktext1, setSktext1] = useState("");
    const [sktext2, setSktext2] = useState("");
    const [sktext3, setSktext3] = useState("");
    useEffect(() => {
        let sktext1 = "We are an India-based, boutique offshore management firm, with a focus on corporate and investment advisory. We've built our expertise in the LP, GP ecosystem after years of working in similar trenches as the in-house team of family offices, fund managers and corporates.";
        let arr1 = sktext1.split(' ');
        let result1 = '<span class="rotate"> ' +
            arr1.join(' </span><span class="rotate">') +
            '</span>';
        setSktext1(result1);

        let sktext2 = "We approach all our engagements with a unified vision of enabling our clients to make informed decisions that unlock value and sustained growth by simplifying and quantifying results for them.";
        let arr2 = sktext2.split(' ');
        let result2 = '<span class="rotate"> ' +
            arr2.join(' </span><span class="rotate">') +
            '</span>';
        setSktext2(result2);


        let sktext3 = "Our consultants function as an extension of your team to provide crucial support on all aspects of business & investment strategy and analytics, measurement & reporting. To ensure that we offer the highest standard of excellence, we've carefully created a culture of learning and value creation. We've built a team of seasoned financial and strategy professionals who are passionate about problem-solving. ";
        let arr3 = sktext3.split(' ');
        let result3 = '<span class="rotate"> ' +
            arr3.join(' </span><span class="rotate">') +
            '</span>';
        setSktext3(result3);


    }, [sktext1]);



    const count = '25+ years';
    const counttext1 = 'Celebrating '

    const counttext2 = 'in business'
    return (
        <>

            {/* <div className='arrowbg'></div> */}

            <section className='overview-section desktop' >
                {/* <div className='overviewbg'></div> */}
                <Container fluid>
                    <Row className=' '>

                        <Col lg={4} xl={4} xxl={4} className='col-md-3 offset-2 pt-5'>

                            <div className='counter pt-5'>
                                <h4 className='counttext' >
                                    {counttext1}
                                </h4>
                                <h2 className='count'  >
                                    {count}

                                </h2>
                                <h4 className='counttext2' >
                                    {counttext2}
                                </h4>
                            </div>

                        </Col>

                        <Col lg={5} xl={5} xxl={5} className='col-md-9 '>
                            <div className='content-box'>
                                {/* <h2>Who</h2> */}
                                <div className="strok">Overview</div>
                                <div className="h1 anima"> <span className='anima-underline'>Over</span>
                                    view</div>

                                <div className=''>
                                    <p className='mt-5 p1 holder' dangerouslySetInnerHTML={{ __html: sktext1 }}></p>
                                    <p className='mt-5 p2 holder' dangerouslySetInnerHTML={{ __html: sktext2 }}></p>
                                    <p className='mt-5 p3 holder' dangerouslySetInnerHTML={{ __html: sktext3 }}></p>
                                </div>
                                {/* <p >We are an India-based, boutique offshore management consulting firm, with a focus on corporate and investment advisory. We've built our expertise in the LP, GP ecosystem after years of working in similar trenches as the in-house team of family offices, fund managers and corporates.<br />
                                    <span className='mt-3 rotate'>We approach all our engagements with a unified vision of enabling our clients to make informed decisions that unlock value and sustained growth by simplifying and quantifyingesults for them.</span><br />
                                    <span className='mt-3 rotate'>Our consultants function as an extension of your team to provide crucial support on all aspects of business & investment strategy and analytics, measurement & reporting. To ensure that we offer the highest standard of excellence,we've carefully created a culture of learning and value creation. We've built a team of seasoned financial and strategy professionals who are passionate about problem-solving. Our experts have specialized exposure in diverse industries ranging from real estate (including residential, commercial, hospitality, retail, and tourism),aviation, energy, financial services, and technology."</span></p> */}
                                {/* <button className="findout-btn mt-2 ">Find out more about us</button> */}
                            </div>



                        </Col>


                    </Row>
                </Container>

            </section>

            <section className='overview-section mobile' >
                <Container fluid>
                    <div className='content-box'>
                        <div className="strok">Overview</div>
                        <div className="h1 anima">Ove<span className='anima-underline'>rvie</span>w</div>
                    </div>
                </Container>
                <Container className='mt-5 overview-bg'>
                    <Row>
                    <div className='counter'>
                                <h4 className='counttext' >
                                    {counttext1}
                                </h4>
                                <h2 className='count'  >
                                    {count}

                                </h2>
                                <h4 className='counttext2' >
                                    {counttext2}
                                </h4>
                            </div>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <div className='paragraph-div mt-5'>
                            <p  dangerouslySetInnerHTML={{ __html: sktext1 }}></p>
                            <p  dangerouslySetInnerHTML={{ __html: sktext2 }}></p>
                            <p  dangerouslySetInnerHTML={{ __html: sktext3 }}></p>
                        </div>
                    </Row>
                </Container>

            </section>

        </>
    )
}

export default Aboutoverview