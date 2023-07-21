import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
// import { gsap } from "gsap";
import { NavLink } from 'react-router-dom';

import './solutionbox.css'



const SolutionBox = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  const handleSubmit = (values) => {
    console.log(values);
  };


   const [mbox1, setMbox1] = useState(false);
   const [mbox2, setMbox2] = useState(false);
   const [mbox3, setMbox3] = useState(false);
   const [mbox4, setMbox4] = useState(false);
   const [mbox5, setMbox5] = useState(false);
   const [mbox6, setMbox6] = useState(false);
   const [mbox7, setMbox7] = useState(false);
   const [mbox8, setMbox8] = useState(false);

  useEffect(() => {


    // let text = document.querySelector(".hover-box");

    // let animation = gsap.to(text, {
    //     toggleClass:"hover"
    // });

    // text.addEventListener("mouseenter", () => animation.play());
    // text.addEventListener("mouseleave", () => animation.reverse());

    // gsap.to(".wherewdbg", {
    //     left: 0,
    //     duration: 5,
    //     delay: 2,
    //     scrollTrigger: {
    //         ease: "power1.out",
    //         trigger: ".wherewdbg",
    //     // markers: true,
    //     start: "top bottom",
    //     end: "bottom bottom",
    //     scrub: 5
    //     }
    // });

  }, [])

  return (
    <section className='solutionbox-section w-100' >
      <Container fluid className='p-0 m-0 w-100'>
        <Row className='p-0 m-0 g-0'>
          {/* hover box 1*/}
          <Col className='col-md-6 hover-box hover'>
            <div className='sol-box white box1'>
              <Row className='justify-content-end'>
                <Col className='col-md-6 s-box'>
                  <div className='text-box'>
                    <h4>Real Estate</h4>
                    <p>We enable organizations across the real estate spectrum, including master developers, real estate-focused private equity funds, real estate investment funds and asset managers to make research and data-driven decisions on strategy, business planning, investment and development. </p>
                    
                    <p className= {mbox1 === true ? "seemore mobile d-none" : "seemore mobile"} onClick={()=>{setMbox1(true)}}>See More</p>
                  </div>

                </Col>

                
                <Col className= {mbox1 === true ? "col-md-6 e-box mb-block" : "col-md-6 e-box"} >
                  <div className='box-list'>

                    <ul className='list'>
                      <li>Mergers and acquisitions</li>
                      <li>Capital structure and analysis</li>
                      <li>Pitch decks</li>
                      <li>Exit strategy planning</li>
                      <li>Capital raising</li>
                      <li>Market and industry research</li>
                      <li>Term sheet avaluation</li>
                    </ul>

                    <div className="form-group pt-1 pb-5 text-center flex items-center justify-between">
                      <NavLink to="/contact" onClick={scrollToTop}> <button className="applynow-btn" type="submit" onClick={handleSubmit}>Talk to our Experts Now</button></NavLink>
                    </div>

                  </div>
                </Col>
              </Row>
             
            </div>
          </Col>

          {/* hover box 2*/}
          <Col className='col-md-6 hover-box hover'>
            <div className='sol-box white box2'>
              <Row className='justify-content-end'>
                <Col className='col-md-6 s-box'>
                  <div className='text-box'>
                    <h4>Investment Banks & Advisors</h4>
                    <p>With expertize in both - the buy and sell side - we work with bankers and advisors as their extended arm to create innovative strategies and solutions that enable them to achieve their financial objectives</p>
                    <p className= {mbox2 === true ? "seemore mobile d-none" : "seemore mobile"} onClick={()=>{setMbox2(true)}}>See More</p>
                  </div>

                </Col>
                <Col className= {mbox2 === true ? "col-md-6 e-box mb-block" : "col-md-6 e-box"} >

                  <div className='box-list'>

                    <ul className='list'>
                      <li>Mergers and acquisitions</li>
                      <li>Capital structure and analysis</li>
                      <li>Pitch decks</li>
                      <li>Exit strategy planning</li>
                      <li>Capital raising</li>
                      <li>Market and industry research</li>
                      <li>Term sheet avaluation</li>
                    </ul>

                    <div className="form-group pt-1 pb-5 text-center flex items-center justify-between">
                      <NavLink to="/contact" onClick={scrollToTop}> <button className="applynow-btn" type="submit" onClick={handleSubmit}>Talk to our Experts Now</button></NavLink>
                    </div>

                  </div>
                </Col>
              </Row>

            </div>
          </Col>

          {/* hover box 3*/}
          <Col className='col-md-6 hover-box hover'>
            <div className='sol-box white box3'>
              <Row className='justify-content-end'>
                <Col className='col-md-6 s-box'>
                  <div className='text-box'>
                    <h4>Sovereign Wealth Funds</h4>
                    <p>With our in-depth understanding of the global markets, we offer comprehensive support to our clients in optimizing portfolio performance, managing risks and driving long-term value creation</p>
                    <p className= {mbox3 === true ? "seemore mobile d-none" : "seemore mobile"} onClick={()=>{setMbox3(true)}}>See More</p>
                     </div>

                </Col>
                <Col className= {mbox3 === true ? "col-md-6 e-box mb-block" : "col-md-6 e-box"} >

                  <div className='box-list'>

                    <ul className='list'>
                      <li>Mergers and acquisitions</li>
                      <li>Capital structure and analysis</li>
                      <li>Pitch decks</li>
                      <li>Exit strategy planning</li> 
                      <li>Capital raising</li>
                      <li>Market and industry research</li>
                      <li>Term sheet avaluation</li>
                    </ul>

                    <div className="form-group pt-1 pb-5 text-center flex items-center justify-between">
                      <NavLink to="/contact" onClick={scrollToTop}> <button className="applynow-btn" type="submit" onClick={handleSubmit}>Talk to our Experts Now</button></NavLink>
                    </div>

                  </div>
                </Col>
              </Row>

            </div>
          </Col>

          {/* hover box 4*/}
          <Col className='col-md-6 hover-box hover'>
            <div className='sol-box white box4'>
              <Row className='justify-content-end'>
                <Col className='col-md-6 s-box'>
                  <div className='text-box'>
                    <h4>Hedge Funds</h4>
                    <p>From identifying optimal investment vehicles to managing risks, our consultants work in tandem with the in-house team to orchestrate effective strategies that are attuned to the highly dynamic investment landscape</p>
                    <p className= {mbox4 === true ? "seemore mobile d-none" : "seemore mobile"} onClick={()=>{setMbox4(true)}}>See More</p>
                   </div>

                </Col>
                <Col className= {mbox4 === true ? "col-md-6 e-box mb-block" : "col-md-6 e-box"} >

                  <div className='box-list'>

                    <ul className='list'>
                      <li>Mergers and acquisitions</li>
                      <li>Capital structure and analysis</li>
                      <li>Pitch decks</li>
                      <li>Exit strategy planning</li>
                      <li>Capital raising</li>
                      <li>Market and industry research</li>
                      <li>Term sheet avaluation</li>
                    </ul>

                    <div className="form-group pt-1 pb-5 text-center flex items-center justify-between">
                      <NavLink to="/contact" onClick={scrollToTop}><button className="applynow-btn" type="submit" onClick={handleSubmit}>Talk to our Experts Now</button></NavLink>
                    </div>

                  </div>
                </Col>
              </Row>

            </div>
          </Col>

          {/* hover box 5*/}
          <Col className='col-md-6 hover-box hover'>
            <div className='sol-box white box5'>
              <Row className='justify-content-end'>
                <Col className='col-md-6 s-box'>
                  <div className='text-box'>
                    <h4>Private Equity/Venture Capital</h4>
                    <p>
                      We assist private equity and venture capital firms with the flexibility to operate in a highly volatile environment by providing end-to-end support on the entire deal cycle - sourcing, due diligence, and execution</p>
                      <p className= {mbox5 === true ? "seemore mobile d-none" : "seemore mobile"} onClick={()=>{setMbox5(true)}}>See More</p>
                    </div>

                </Col>
                <Col className= {mbox5 === true ? "col-md-6 e-box mb-block" : "col-md-6 e-box"} >

                  <div className='box-list'>

                    <ul className='list'>
                      <li>Mergers and acquisitions</li>
                      <li>Capital structure and analysis</li>
                      <li>Pitch decks</li>
                      <li>Exit strategy planning</li>
                      <li>Capital raising</li>
                      <li>Market and industry research</li>
                      <li>Term sheet avaluation</li>
                    </ul>

                    <div className="form-group pt-1 pb-5 text-center flex items-center justify-between">
                    <NavLink to="/contact" onClick={scrollToTop}><button className="applynow-btn" type="submit" onClick={handleSubmit}>Talk to our Experts Now</button></NavLink>
                    </div>

                  </div>
                </Col>
              </Row>

            </div>
          </Col>

          {/* hover box 6*/}
          <Col className='col-md-6 hover-box hover'>
            <div className='sol-box black box6'>
              <Row className='justify-content-end'>
                <Col className='col-md-6 s-box'>
                  <div className='text-box'>
                    <h4>Asset Management Companies</h4>
                    <p>We offer tailored solutions to our clients that enable them to optimize portfolio performance, streamline operations and drive investor satisfaction</p>
                    <p className= {mbox6 === true ? "seemore mobile d-none" : "seemore mobile"} onClick={()=>{setMbox6(true)}}>See More</p>
                    </div>

                </Col>
                <Col className= {mbox6 === true ? "col-md-6 e-box mb-block" : "col-md-6 e-box"} >

                  <div className='box-list'>

                    <ul className='list'>
                      <li>Mergers and acquisitions</li>
                      <li>Capital structure and analysis</li>
                      <li>Pitch decks</li>
                      <li>Exit strategy planning</li>
                      <li>Capital raising</li>
                      <li>Market and industry research</li>
                      <li>Term sheet avaluation</li>
                    </ul>

                    <div className="form-group pt-1 pb-5 text-center flex items-center justify-between">
                    <NavLink to="/contact" onClick={scrollToTop}><button className="applynow-btn" type="submit" onClick={handleSubmit}>Talk to our Experts Now</button></NavLink>
                    </div>

                  </div>
                </Col>
              </Row>

            </div>
          </Col>

          {/* hover box 7*/}
          <Col className='col-md-6 hover-box hover'>
            <div className='sol-box black box7'>
              <Row className='justify-content-end'>
                <Col className='col-md-6 s-box'>
                  <div className='text-box'>
                    <h4>Endowment funds</h4>
                    <p>We recognize the challenges arising from the dynamic regulatory and investment landscape. We keep the fund's mission, risk tolerance, and long-term goals at the core while creating advisory solutions</p>
                    <p className= {mbox7 === true ? "seemore mobile d-none" : "seemore mobile"} onClick={()=>{setMbox7(true)}}>See More</p>
                    </div>

                </Col>
                <Col className= {mbox7 === true ? "col-md-6 e-box mb-block" : "col-md-6 e-box"} >

                  <div className='box-list'>

                    <ul className='list'>
                      <li>Mergers and acquisitions</li>
                      <li>Capital structure and analysis</li>
                      <li>Pitch decks</li>
                      <li>Exit strategy planning</li>
                      <li>Capital raising</li>
                      <li>Market and industry research</li>
                      <li>Term sheet avaluation</li>
                    </ul>

                    <div className="form-group pt-1 pb-5 text-center flex items-center justify-between">
                    <NavLink to="/contact" onClick={scrollToTop}><button className="applynow-btn" type="submit" onClick={handleSubmit}>Talk to our Experts Now</button></NavLink>
                    </div>

                  </div>
                </Col>
              </Row>

            </div>
          </Col>

          {/* hover box 8*/}
          <Col className='col-md-6 hover-box hover'>
            <div className='sol-box white box8'>
              <Row className='justify-content-end'>
                <Col className='col-md-6 s-box'>
                  <div className='text-box'>
                    <h4>Family Offices</h4>
                    <p>We understand that each family office is unique in its foundation, challenges, and goals. Be it a single-family office (SFO), multi-family office (MFO) or virtual family office (VFO), we customize our solutions to meet the goals, requirements and preferences of our clients. We act as the strategy management office (SMO) and provide support on both - direct and fund investments.  </p>
                    <p className= {mbox8 === true ? "seemore mobile d-none" : "seemore mobile"} onClick={()=>{setMbox8(true)}}>See More</p>
                      </div>

                </Col>
                <Col className= {mbox8 === true ? "col-md-6 e-box mb-block" : "col-md-6 e-box"} >
                  <div className='box-list'>

                    <ul className='list'>
                      <li>Mergers and acquisitions</li>
                      <li>Capital structure and analysis</li>
                      <li>Pitch decks</li>
                      <li>Exit strategy planning</li>
                      <li>Capital raising</li>
                      <li>Market and industry research</li>
                      <li>Term sheet avaluation</li>
                    </ul>

                    <div className="form-group pt-1 pb-5 text-center flex items-center justify-between">
                    <NavLink to="/contact" onClick={scrollToTop}> <button className="applynow-btn" type="submit" onClick={handleSubmit}>Talk to our Experts Now</button></NavLink>
                    </div>

                  </div>
                </Col>
              </Row>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default SolutionBox