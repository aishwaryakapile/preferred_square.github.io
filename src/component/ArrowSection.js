import React, { useRef, useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from 'react-router-dom';
//import { TextPlugin } from 'gsap/TextPlugin';
import Scrambler from 'scrambling-text';
import './arrowsection.css';


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from '../images/wwd-slider1.webp';
import slide2 from '../images/wwd-slider2.webp';
import slide3 from '../images/wwd-slider3.webp';
//import { counter } from '@fortawesome/fontawesome-svg-core';


gsap.registerPlugin(ScrollTrigger);


export const ArrowSection = () => {


  // let navigate = useNavigate();
  
  // const toRedirect = ()=> {
  //   navigate('about');
  // }


    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }


  // Skewed text
  const [sktext, setSktext] = useState("");
  useEffect(() => {
    let sktext = "Preferred Square provides offshore management consulting, investment advisory and business analytics support to family offices, fund managers, advisors and corporates across the globe. Our unique vantage is built on years of enabling business decisions in areas ranging from business strategy to portfolio management to transaction advisory of CXOs managing multi-billion dollar portfolios.";
    let arr = sktext.split(' ');
    let result = '<span class="rotate"> ' +
      arr.join(' </span><span class="rotate">') +
      '</span>';
    setSktext(result);
  }, [sktext]);


  //   scroll animation
  useEffect(() => {

    gsap.to(".arrowbg", {
      left: 0,
      duration: 5,
      delay: 2,
      scrollTrigger: {
        ease: "power3.out",
        trigger: ".arrowbg",
        // start: "top bottom",
        // end: "top 130vh ",
        start: "top bottom",
        end: "top center",
        scrub: 5
      }
    });

    gsap.to(".counter", {
      opacity: 1,
      duration: 0.1,
      delay: 0,
      scrollTrigger: {
        trigger: ".arrowbg",
        start: "top 300px",
        scrub: false
      }
    });
  }, [])

  // scramble text

  const [count, setCount] = useState('');
  const [counttext, setCounttext] = useState('');

  const COUNTS = [
    '125+',
    '1000+',
    '500+',
  ];


  const COUNTTEXTS = [
    'Successful Engagements',
    'Clients Served',
    'Projects Deployed',
  ];


  const scnum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+'];
  const scaplha = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // create an instance of Scrambler using useRef.
  const scramblerCount1 = useRef(new Scrambler());
  const scramblerCountText1 = useRef(new Scrambler());
  const scramblerCount2 = useRef(new Scrambler());
  const scramblerCountText2 = useRef(new Scrambler());
  const scramblerCount3 = useRef(new Scrambler());
  const scramblerCountText3 = useRef(new Scrambler());

  function printtext() {

    setTimeout(() => {
      scramblerCount1.current.scramble(COUNTS[0], setCount, {
        characters: scnum,
      });
      scramblerCountText1.current.scramble(COUNTTEXTS[0], setCounttext, {
        characters: scaplha,
      });
    }, 500);

    setTimeout(() => {
      scramblerCount2.current.scramble(COUNTS[1], setCount, {
        characters: scnum,
      });
      scramblerCountText2.current.scramble(COUNTTEXTS[1], setCounttext, {
        characters: scaplha,
      });
    }, 2500);

    setTimeout(() => {
      scramblerCount3.current.scramble(COUNTS[2], setCount, {
        characters: scnum,
      });
      scramblerCountText3.current.scramble(COUNTTEXTS[2], setCounttext, {
        characters: scaplha,
      });
    }, 5000);

    setTimeout(() => {
      printtext();
    }, 9000);
  }

  useEffect(() => {
    printtext();

  }, []);


  

  // slider data
  const sliderdata = [
    { id: 1, img: slide2, link:'managementconsulting',  title: 'Management Consulting', text: "Empowering CXOs prioritize and execute strategic projects to achieve greater business efficiency and effectiveness" },
    { id: 2, img: slide1, link:'financialadvisory', title: "Investment Advisory", text: "Complementing investment teams with transaction advisory, valuation and investment research services" },
    { id: 3, img: slide3, link:'dataanalyst', title: "Business Analytics", text: "Helping businesses transform their raw business data into actionable insights " },
    { id: 1, img: slide2, link:'managementconsulting', title: 'Management Consulting', text: "Empowering CXOs prioritize and execute strategic projects to achieve greater business efficiency and effectiveness" },
    { id: 2, img: slide1, link:'financialadvisory', title: "Investment Advisory", text: "Complementing investment teams with transaction advisory, valuation and investment research services" },
    { id: 3, img: slide3, link:'dataanalyst', title: "Business Analytics", text: "Helping businesses transform their raw business data into actionable insights " },
  ];

  return (
    <>
      <div className='arrow-section desktop'>
        <div className='arrowbg'></div>

        <section className='whowr-section desktop' >
          {/* <div className='whowrbg'></div> */}
          <Container fluid>
            <Row className=' '>

              <Col lg={4} xl={4} xxl={4} className='col-md-4 offset-2 pt-5'>

                <div className='counter pt-5'>
                  <h2 className='count'  >
                    {count}
                    {/* <TextScramble texts={cn} letterSpeed={1000} nextLetterSpeed={1000} pauseTime={2500} /> */}
                  </h2>
                  <h4 className='counttext' >
                    {counttext}
                    {/* <TextScramble texts={ctext} letterSpeed={1600} nextLetterSpeed={1000}  pauseTime={2500}/> */}
                  </h4>
                </div>

              </Col>

              <Col lg={5} xl={5} xxl={5} className='col-md-5 pe-5'>
                <div className='content-box'>
                  <h2>Who</h2>
                  <div className="strok">We Are</div>
                  <div className="h1 anima">We <span className='anima-underline'>Are</span></div>

                  <p className='mt-3 holder' dangerouslySetInnerHTML={{ __html: sktext }}></p>
                  {/* <p className='mt-3 holder' > Preferred Square provides offshore management consulting and investment advisory support to family offices, fund managers and corporates across the globe. Through our long history of consulting projects with Family Offices and LPs, we've developed a unique vantage to enable our clients in critical areas of business ranging from business strategy to portfolio management to transaction advisory</p> */}
                  <NavLink to='/about' onClick={scrollToTop}><button className="findout-btn mt-2 ">Find out more about us</button></NavLink>
                </div>



              </Col>


            </Row>
          </Container>

        </section>

        {/* <section className='mobile' >
            <Container className='whowr-section mobile'>
            <div></div> 
            </Container>
              <Container>
                <Row>
                <p className='mobile-para' dangerouslySetInnerHTML={{__html: sktext}}></p>
                </Row>
              </Container>

        </section>   */}
        <section className='wherewd-section' >
          {/* <div className='wherewdbg'></div> */}
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
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    // pagination={{
                    //   clickable: false,
                    // }}
                    pagination={false}
                    navigation={true}
                    //modules={[ Pagination, Navigation]}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >

                    {sliderdata.map((d, i) => (
                      <SwiperSlide key={i}>
                        <div className="slide-box">
                          <img src={d.img} alt="" />
                          <NavLink to={`/${d.link}`} onClick={scrollToTop}>
                          <div className="text-box">
                            <div className="heading">{d.title} </div>
                            <div className="text">{d.text} </div>
                          </div></NavLink>
                        </div>

                      </SwiperSlide>
                    ))}


                  </Swiper>
                </div>

                <NavLink to='/about' onClick={scrollToTop}><button className="findout-btn mt-5 ms-20pr">Find out more about us</button></NavLink>


              </Col>


            </Row>
          </Container>
        </section>


      </div>
      <div className='arrow-section mobile'>
        <section className='arrow-section arrow-mobile' >
          <Container fluid>
            <div className='content-box mb-5'>
              <h2>Who</h2>
              <div className="strok">We Are</div>
              <div className="h1 anima">We <span className='anima-underline'>Are</span></div>
            </div>
          </Container>
          <Container className='mt-5 pt-4 arrow-section-bg'>
            <Row>
              <div className='counter'>
                <h2 className='count' >
                  {count}
                </h2>
                <h4 className='counttext'  >
                  {counttext}

                </h4>
            
            
              </div>
            </Row>
          </Container>
          <Container>
            <Row>
              <div className='paragraph-div mt-5'>
                <p className='mobile-para'>
                Preferred Square provides offshore management consulting, investment advisory and business analytics support to family offices, fund managers, advisors and corporates across the globe. Our unique vantage is built on years of enabling business decisions in areas ranging from business strategy to portfolio management to transaction advisory of CXOs managing multi-billion dollar portfolios.
                </p>
              </div>
             
            </Row>
            <Row>
            <div className='btn-div pt-4'>
            <NavLink to='/about' onClick={scrollToTop}><button className='findout-btn'>Find out more about us</button></NavLink>
              </div>
            </Row>

          </Container>

        </section>

        <section className='wherewd-section mobile' >
          {/* <div className='wherewdbg'></div> */}
          <Container fluid>
            <Row className='w-100 p-0 m-0 row'>

              <Col className='col-12'>        
                <div className='content-box'>
                  <h2>Where do we</h2>
                  <div className="strok">Create Impact</div>
                  <div className="h1 anima">Create  <span className='anima-underline'>Imp</span>act</div>
                </div>
              </Col>        

            

              <Col className='col-12 pt-5'>

                <div >

                  <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    centeredSlides={false}
                    loop={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    // pagination={{
                    //   clickable: false,
                    // }}
                    pagination={false}
                    navigation={true}
                    modules={[ Pagination, Navigation]}
                    //modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >

                    {sliderdata.map((d, i) => (
                      <SwiperSlide key={i}>
                        <div className="slide-box">
                          <img src={d.img} alt="" />
                          <NavLink to={`/${d.link}`} onClick={scrollToTop}>
                          <div className="text-box">
                            <div className="heading">{d.title} </div>
                            <div className="text">{d.text} </div>
                          </div>
                          </NavLink>
                        </div>

                      </SwiperSlide>
                    ))}


                  </Swiper>
                </div>

               <div className='btn-div'>
               <NavLink to='/about' onClick={scrollToTop}><button className="findout-btn">Find out more about us</button></NavLink>
               </div>


              </Col>


            </Row>
          </Container>
        </section>


      </div>
    </>
  )
}
