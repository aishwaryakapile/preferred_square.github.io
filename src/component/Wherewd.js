import React, { useEffect } from "react";
import "./wherewd.css";
import { Row, Col, Container } from 'react-bootstrap';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import wherewd_bg from '../images/wherewd-bg.webp';
import slide1 from '../images/wwd-slider1.webp';
import slide2 from '../images/wwd-slider2.webp';
import slide3 from '../images/wwd-slider3.webp';

gsap.registerPlugin(ScrollTrigger);

export const Wherewd = () => {


  useEffect(()=>{

    gsap.to(".wherewdbg", {
        left: 0,
        duration: 5,
        delay: 2,
        scrollTrigger: {
            ease: "power1.out",
            trigger: ".wherewdbg",
          // markers: true,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 5
        }
      });
     
},[])



  const sliderdata = [
    { id: 1, img: slide1, title: 'Financial Advisory', text: "Enabling organizations to prioritize and execute strategic projects to achieve greater business efficiency and effectiveness"  },
    { id: 2, img: slide2, title:"Management Consulting", text: "Enabling organizations to prioritize and execute strategic projects to achieve greater business efficiency and effectiveness"  },
    { id: 3, img: slide3, title:"Data Analytics", text: "Enabling organizations to prioritize and execute strategic projects to achieve greater business efficiency and effectiveness"  },
    { id: 4, img: slide1, title: 'Financial Advisory', text: "Enabling organizations to prioritize and execute strategic projects to achieve greater business efficiency and effectiveness"  },
    { id: 5, img: slide2, title:"Management Consulting", text: "Enabling organizations to prioritize and execute strategic projects to achieve greater business efficiency and effectiveness"  },
    { id: 6, img: slide3, title:"Data Analytics", text: "Enabling organizations to prioritize and execute strategic projects to achieve greater business efficiency and effectiveness"  },
    
    ];
  
  return (
    <section className='wherewd-section' style={{background:`url(${wherewd_bg}) no-repeat`}}>
      <div className='wherewdbg'></div>
    <Container fluid>
        <Row className='w-100 ps-5'>

            <Col className='col-md-11 mt-5 offset-1'>
                <div className='content-box'>
                        <h2>Where do we</h2>
                        <div className="strok">Create Impact</div>
                        <div className="h1 anima">Create  <span className='anima-underline'>Impact</span></div>
                </div> 
                

            </Col>

            <Col className='col-md-8 pt-5 offset-3 '>

                <div >
                      
                <Swiper
                  slidesPerView={3}
                  spaceBetween={0}
                  centeredSlides={false}
                  loop={true}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  // pagination={{
                  //   clickable: false,
                  // }}
                  pagination={true}
                  navigation={true}
                  //modules={[ Pagination, Navigation]}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >

                {sliderdata.map((d, i) => (    
                    <SwiperSlide key={i}>
                    <div className="slide-box">
                      <img src={d.img} alt=""/>
                      <div className="text-box">
                          <div className="heading">{d.title} </div>
                          <div className="text">{d.text} </div>
                      </div>
                    </div>
                    
                  </SwiperSlide>
                ))}

                  {/* <SwiperSlide>
                    <div className="slide-box">
                      <img src={slide1} alt=""/>
                      <div className="text-box">
                          <div className="heading">Financial Advisory </div>
                          <div className="text">Enabling organizations to prioritize and execute strategic projects to achieve greater business efficiency and effectiveness</div>
                      </div>
                    </div>
                    
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-box">
                      <img src={slide2} alt=""/>
                      <div className="text-box">
                          <div className="heading">Management Consulting</div>
                          <div className="text">Enabling organizations to prioritize and execute strategic projects to achieve greater business efficiency and effectiveness</div>
                      </div>
                    </div>
                    
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-box">
                      <img src={slide1} alt=""/>
                      <div className="text-box">
                          <div className="heading">Data Analytics</div>
                          <div className="text">Enabling organizations to prioritize and execute strategic projects to achieve greater business efficiency and effectiveness</div>
                      </div>
                    </div>
                    
                  </SwiperSlide> */}

                 
                </Swiper>
              </div>  
                      
              <button className="findout-btn mt-5 ms-20pr">Find out more about us</button>
              
             
            </Col>

            
        </Row>
    </Container>
</section>
  )
}

export default Wherewd
