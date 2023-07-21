import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './whyus.css'
import whyus1 from '../images/whyus1.webp';
import whyus2 from '../images/whyus2.webp';
import whyus3 from '../images/whyus3.webp';
import whyus4 from '../images/whyus4.webp';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




export const Whyus = () => {

    // const warrow = ' <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.0607 13.0607C25.6464 12.4749 25.6464 11.5251 25.0607 10.9393L15.5147 1.3934C14.9289 0.807611 13.9792 0.807611 13.3934 1.3934C12.8076 1.97919 12.8076 2.92893 13.3934 3.51472L21.8787 12L13.3934 20.4853C12.8076 21.0711 12.8076 22.0208 13.3934 22.6066C13.9792 23.1924 14.9289 23.1924 15.5147 22.6066L25.0607 13.0607ZM0 13.5H24V10.5H0V13.5Z" fill="#ffffff" /></svg>';
    // const barrow = ' <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.0607 13.0607C25.6464 12.4749 25.6464 11.5251 25.0607 10.9393L15.5147 1.3934C14.9289 0.807611 13.9792 0.807611 13.3934 1.3934C12.8076 1.97919 12.8076 2.92893 13.3934 3.51472L21.8787 12L13.3934 20.4853C12.8076 21.0711 12.8076 22.0208 13.3934 22.6066C13.9792 23.1924 14.9289 23.1924 15.5147 22.6066L25.0607 13.0607ZM0 13.5H24V10.5H0V13.5Z" fill="#000000" /></svg>';
    const warrow = "";
    const data = [
        { id: 1, img: whyus1, color: "#ffffff", link: 'Access to <br /> a team of experts' + warrow, para:"Strong research and analytical capabilities with global exposure"  },
        { id: 2, img: whyus2, color: "#ffffff", link: 'Achieve <br />  meaningful cost savings' + warrow, para:"Effective and agile allocation of resources well within budgets" },
        { id: 3, img: whyus3, color: "#ffffff", link: 'Scale up and <br /> augment capacity effectively' + warrow, para:"An effective hiring strategy to transform front office" },
        { id: 4, img: whyus4, color: "#ffffff", link: 'Initiate and execute projects <br /> with minimal downtime' + warrow, para:"Multi-tiered team structure ensures a high focus on quality" },
    ];


    return (
        <>
            <section className='whyus-section desktop' >
                <Container fluid>
                    <Row className='w-100 '>
                        <Col className='col-md-4 offset-1'>
                            <div className='d-flex middle'>
                                <div className='content-box'>
                                    <h2>Why</h2>
                                    <div className="strok">Us</div>
                                    <div className="h1"><span className='h1 animate-underline' style={{ paddingBottom: "40px" }}>Us</span></div>
                                     <p className='mt-3'>Creating value across stages of business by functioning as an extension of your in-house team 
                                    </p>
                        {/*<button className="findout-btn mt-100 ms-3">Find out more about us</button> */}
                                </div>
                            </div>

                        </Col>

                        <Col className='col-md-7'>

                            <Row className=' row-cols-2'>

                                {data.map((d, i) => (
                                    <Col className='border-0 px-0 mx-0' key={i}>
                                        {/* <div className="image-box"  style={{ backgroundImage: `url(${whyus1})`}}> */}
                                        <div className={`image-box imgbox-${d.id}`} >
                                            <img src={d.img} className="img-fluid w-100" style={{ width: "100%" }} alt="..." />

                                            <div className='overlay '>
                                                <div className='link' >
                                                    <h3 style={{ color: d.color }} dangerouslySetInnerHTML={{ __html: d.link }}></h3>
                                                    <p>{d.para}</p>
                                                    {/* {d.link.split('\n')} <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.0607 13.0607C25.6464 12.4749 25.6464 11.5251 25.0607 10.9393L15.5147 1.3934C14.9289 0.807611 13.9792 0.807611 13.3934 1.3934C12.8076 1.97919 12.8076 2.92893 13.3934 3.51472L21.8787 12L13.3934 20.4853C12.8076 21.0711 12.8076 22.0208 13.3934 22.6066C13.9792 23.1924 14.9289 23.1924 15.5147 22.6066L25.0607 13.0607ZM0 13.5H24V10.5H0V13.5Z" fill={d.color} />
                                    </svg> */}
                                                </div>
                                            </div>
                                        </div>

                                    </Col>
                                ))}


                                {/* <Col className='col-md-6 m-0 p-0'>
                            <!-- <div className="image-box"  style={{ backgroundImage: `url(${whyus1})`}}> -->
                            <div className="image-box" >
                                <img src={whyus1} className="card-img" alt="..." />
                                
                                <div className='overlay '>
                                    <div  className='link'>
                                    Access to 
                                    a team of experts <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.0607 13.0607C25.6464 12.4749 25.6464 11.5251 25.0607 10.9393L15.5147 1.3934C14.9289 0.807611 13.9792 0.807611 13.3934 1.3934C12.8076 1.97919 12.8076 2.92893 13.3934 3.51472L21.8787 12L13.3934 20.4853C12.8076 21.0711 12.8076 22.0208 13.3934 22.6066C13.9792 23.1924 14.9289 23.1924 15.5147 22.6066L25.0607 13.0607ZM0 13.5H24V10.5H0V13.5Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </Col>

                        <Col className='col-md-6 m-0 p-0'>
                            <div className="image-box">
                                <img src={whyus1} className="card-img" alt="..." />
                               
                                
                                <div className='overlay '>
                                    <div  className='link'>
                                    Access to 
                                    a team of experts <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.0607 13.0607C25.6464 12.4749 25.6464 11.5251 25.0607 10.9393L15.5147 1.3934C14.9289 0.807611 13.9792 0.807611 13.3934 1.3934C12.8076 1.97919 12.8076 2.92893 13.3934 3.51472L21.8787 12L13.3934 20.4853C12.8076 21.0711 12.8076 22.0208 13.3934 22.6066C13.9792 23.1924 14.9289 23.1924 15.5147 22.6066L25.0607 13.0607ZM0 13.5H24V10.5H0V13.5Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </Col>

                        <Col className='col-md-6 m-0 p-0'>
                            <div className="image-box">
                                <img src={whyus1} className="card-img" alt="..." />
                              
                                
                                <div className='overlay '>
                                    <div  className='link'>
                                    Access to 
                                    a team of experts <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.0607 13.0607C25.6464 12.4749 25.6464 11.5251 25.0607 10.9393L15.5147 1.3934C14.9289 0.807611 13.9792 0.807611 13.3934 1.3934C12.8076 1.97919 12.8076 2.92893 13.3934 3.51472L21.8787 12L13.3934 20.4853C12.8076 21.0711 12.8076 22.0208 13.3934 22.6066C13.9792 23.1924 14.9289 23.1924 15.5147 22.6066L25.0607 13.0607ZM0 13.5H24V10.5H0V13.5Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </Col>

                        <Col className='col-md-6 m-0 p-0'>
                            <div className="image-box">
                                <img src={whyus1} className="card-img" alt="..." />
                              
                                
                                <div className='overlay '>
                                    <div  className='link'>
                                    Access to 
                                    a team of experts <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.0607 13.0607C25.6464 12.4749 25.6464 11.5251 25.0607 10.9393L15.5147 1.3934C14.9289 0.807611 13.9792 0.807611 13.3934 1.3934C12.8076 1.97919 12.8076 2.92893 13.3934 3.51472L21.8787 12L13.3934 20.4853C12.8076 21.0711 12.8076 22.0208 13.3934 22.6066C13.9792 23.1924 14.9289 23.1924 15.5147 22.6066L25.0607 13.0607ZM0 13.5H24V10.5H0V13.5Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </Col> */}

                            </Row>

                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='whyus-section mobile' >
                <Container>
                    <Row>
                        {/* <Col>
                        <div className='content-box'>
                            <h2>Why</h2>
                            <div className="strok">Us</div>
                            <div className="h1"><span className='h1 animate-underline'>Us</span>
                            </div>
                        </div>
                        <div className=''>
                            <p className='whyus-para'>Creating value across stages of business by functioning as an extension of your in-house team </p>
                        </div>
                        </Col> */}

                        <Col>
                            <div className='d-flex middle'>
                                <div className='content-box'>
                                    <h2>Why</h2>
                                    <div className="strok">Us</div>
                                    <div className="h1"><span className='h1 animate-underline'>Us</span></div>
                              {/*<button className="findout-btn mt-100 ms-3">Find out more about us</button> */}
                                </div>
                                <p className='mt-3'>Creating value across stages of business by functioning as an extension of your in-house team 
                                    </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Row className='mx-auto'>
                    <Col>      
                        <div className='swipermobile'>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                centeredSlides={true}
                                navigation={false}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>

                                    <img src={whyus1} alt='' />
                                    <div className='link'><h3>Access to a team of experts</h3>
                                        <p>Strong research and analytical capabilities with global exposure </p>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={whyus2} alt='' />
                                    <div className='link'><h3>Achieve  meaningful cost savings</h3>
                                        <p>Effective and agile allocation of resources well within budgets </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={whyus3} alt='' />                                
                                    <div className='link'><h3>Scale up and augment capacity effectively</h3>
                                        <p>An effective hiring strategy to transform front office </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={whyus4} alt='' />
                                    <div className='link'><h3>Initiate and execute projects with minimal downtime</h3>
                                        <p>Multi-tiered team structure ensures a high focus on quality </p>
                                    </div>
                                </SwiperSlide>
                        
                            </Swiper>
                        </div>
                    </Col>
                </Row>

                <div>
                    <div className='mobilebtn'>
                        <button className="findout-btn">Find out more about us</button>
                    </div>
                </div>

            </section>
        </>
    )
}
