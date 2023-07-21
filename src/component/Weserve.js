import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './weserve.css'

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from 'react-router-dom';
//import { ScrollToPlugin } from "gsap/ScrollToPlugin"


import img1 from '../images/realEstate.webp';
import img2 from '../images/hedgeFunds.webp';
import img3 from '../images/investment.webp';
import img4 from '../images/FamilyOffices.webp';
import img5 from '../images/privateEquity.webp';
import img6 from '../images/sovereignFunds.webp';
import img7 from '../images/AssetManagers.webp';
import img8 from '../images/Endowment.webp';


gsap.registerPlugin(ScrollTrigger);

const data = [
  { id: 1, img: img1, title: 'Real Estate', },
  { id: 2, img: img2, title: "Hedge Funds" },
  { id: 3, img: img3, title: "Investment Banks & Advisors" },
  { id: 4, img: img4, title: "Family Offices" },
  { id: 5, img: img5, title: "Private Equity and Venture Capital" },
  { id: 6, img: img6, title: "Sovereign Wealth Funds" },
  { id: 7, img: img7, title: "Asset Managers" },
  { id: 8, img: img8, title: "Endowment Funds" },
];

const mobiledata1 = [
  { id: 1, img: img1, title: 'Real Estate', },
  { id: 2, img: img3, title: "Investment Banks & Advisors" },
  { id: 3, img: img5, title: "Private Equity and Venture Capital" },
  { id: 4, img: img7, title: "Asset Managers" }
]

const mobiledata2 = [
  { id: 1, img: img2, title: "Hedge Funds" },
  { id: 2, img: img4, title: "Family Offices" },
  { id: 3, img: img6, title: "Sovereign Wealth Funds" },
  { id: 4, img: img8, title: "Endowment Funds" },
]



export const Weserve = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}


  useEffect(() => {

    // const w = '.scroll-page';
    // //const [x, xEnd] = (index % 2) ? ['100%', (w.scrollHeight - section.offsetHeight) * -1] : [w.scrollHeight * -1, 0];
    // const [x, xEnd] = [w.scrollHeight * -1, 0];

    // gsap.fromTo('.scroll-page', {  x  }, {
    //     x: xEnd,
    //     scrollTrigger: { 
    //     trigger: ".weserve-section",
    //     start: "top top",
    //     scrub: 0.5 
    //     }
    // });  

    // gsap.To('.weserve-section', {
    //     position: fix,
    //     scrollTrigger: { 
    //     trigger: ".weserve-section",
    //     start: "top top",
    //     scrub: 0.5 
    //     }
    // });  

    /*
    scroll script start
    gsap.from('.weserve-section', {
        scrollTrigger: {
          trigger: '.weserve-section',
          start: 'top top',
          end: 'bottom bottom',
          toggleClass: 'fixed',
          scrub:0.5,
        //   end: "+=100%",
        //   pin: true,
        }
      });

      
    gsap.utils.toArray('.scroll-section').forEach((section, index) => {
        const w = section.querySelector('.scroll-page');
        const [y, yEnd] = (index % 2) ? ['100%', (w.scrollHeight - section.offsetHeight) * -1] : [w.scrollHeight * -1, 0];
        const [x, xEnd] = ['100%', (w.scrollHeight - section.offsetHeight) * -1];
        //const [y, yEnd] = ['100%', (w.scrollHeight - section.offsetHeight) * -1];

        console.log('w.scrollHeight - '+ w.scrollHeight +" section.offsetHeight-"+ section.offsetHeight)    

        console.log('x:'+x+" xEnd:"+xEnd);
        console.log('y:'+y+" yEnd:"+yEnd);
        let y1 = y-200;
        y1 = xEnd+y;
        console.log('y1:'+y1);
        
        // gsap.fromTo(w, {  yEnd  }, {
        //   y: -xEnd,
        //   scrollTrigger: { 
        //     trigger: '.weserve-section',
        //     start:'top top', 
        //     end:'bottom bottom', 
        //     // markers:true, 
        //     scrub: 0.5
        //   }
        // });

        gsap.fromTo(w, {  yEnd  }, {
            y: -y1,
            scrollTrigger: { 
              trigger: '.weserve-section',
              start:'top top', 
              end:'bottom bottom', 
            //   end: "+=100%",
              scrub: 0.5, 
            }
          });
          

        // gsap.from('.weserve-section', {
        //     scrollTrigger: {
        //       trigger: '.scroll-page',
        //       toggleClass: 'fixed',
        //     //   start: y -xEnd,
        //       start:'top top', 
        //       end:'bottom bottom', 
        //       scrub:true,
        //       markers:true, 
        //     }
        //   });

   
      });
    scroll script start
   */



  }, [])

  return (
    <>
      <section className='weserve-section desktop' >
        <Container fluid>
          <Row className='w-80 g-0'>
            <Col className='col-md-5 offset-1 left-fixed'>
              <div className='content-box'>
                <h2>Who</h2>
                <div className="strok">Serve</div>
                <div className="h1 anima">We <span className='anima-underline'>Serve</span></div>
                <p className='mt-3'>Enabling and empowering organizations <br />
                  to unlock value with every decision they make
                </p>
                <NavLink to='/solution' onClick={scrollToTop}><button className="findout-btn mt-100 ms-3">Find out more about us</button></NavLink>
              </div>

            </Col>

            <Col className='col-md-5 right-scroll'>

              <div className='scroll-section'>

                <Row className="scroll-page px-4">

                  {data.map((d, i) => (

                    // <Col className= {`col-md-6 ${d.id % 2 === 0 ? "mt-5" : "mt-1"}`}> 
                    //     <div className='gredientbox'>
                    //         <div className='gredient-border'>
                    //             <img src={d.img} className="card-img" alt="..." />
                    //             <div className='overlay'></div>
                    //             <div className='overlay-text'>{d.title}</div>
                    //         </div>
                    //     </div>
                    // </Col>

                    <Col className={`col-md-6 ${d.id % 2 === 0 ? "mt-5" : "mt-1"}`} key={i}>
                      <div className='gredient-border'>
                        <div className='gredientbox'>
                        <NavLink to='/solution' onClick={scrollToTop}>
                          <img src={d.img} className="card-img" alt="..." />
                          <div className='overlay'></div>
                          <div className='overlay-text'>{d.title}</div>
                        </NavLink>  
                        </div>
                      </div>
                    </Col>
                  ))}

                </Row>

              </div>

            </Col>
          </Row>
        </Container>
      </section>
      <section className='weserve-section mobile' >
        <Container>
          <Row className='my-5'>
          <Col className='col-12'>
            <div className='content-box'>
              <div className="h3">Who </div>
              <div className="strok">We Serve</div>
              <div className="h1 anima">We <span className='anima-underline' > Serve</span></div>
            </div>
            <p className='paragraph'>Enabling and empowering organizations
                to unlock value with every decision they make
              </p>
            </Col>
          </Row>

          <Row className="mobileimg my-5 py-5 mx-auto">
            <Col className='col-md-6'>
              {
                mobiledata1.map((d) => (
                    
                  <div key={d.id} className='gredient-border'>
                    <div className='gredientbox'>
                    <NavLink to='/solution' onClick={scrollToTop}>
                      <img src={d.img} className="" alt="..." />
                      <div className='overlay'></div>
                      <div className='overlay-text'>{d.title}</div>
                    </NavLink>  
                    </div>
                  </div>

                ))
              }
            </Col>
            <Col className='col-md-6 mt-5'>
              {
                mobiledata2.map((d) => (

                  <div key={d.id} className='gredient-border'>
                    <div className='gredientbox'>
                    <NavLink to='/solution' onClick={scrollToTop}>
                      <img src={d.img} className="card-img" alt="..." />
                      <div className='overlay'></div>
                      <div className='overlay-text'>{d.title}</div>
                    </NavLink>
                    </div>
                  </div>

                ))
              }
            </Col>
          </Row>


         <Row>
            <div className='mobilebtn mb-5'>
            <NavLink to='/solution' onClick={scrollToTop}><button className="findout-btn">Find out more about us</button></NavLink>
            </div>
          </Row>
   
        </Container>

      </section>
    </>
  )
}
