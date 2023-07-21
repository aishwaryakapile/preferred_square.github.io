import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './knowledgebody.css';
import Insight from './Insight';
import CaseStudies from './CaseStudies';
import News from './News';

const Knowledgebody = () => {

  const [activeTab, setActiveTab] = useState("tab1");
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <section className='knowledge-section'  >
        <div className='tab-row'>
          <Container>
            <Row className='w-100'>
              <Col className='col-md-12'>
                <div className="tab">
                  <div className={activeTab === 'tab1' ? "tablinks active" : "tablinks"} onClick={() => { setActiveTab('tab1') }} >
                    {/* <svg width="70" height="78" viewBox="0 0 70 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M50.1094 41.2056C52.9289 41.214 55.6941 41.9821 58.1139 43.4293C60.5338 44.8764 62.5189 46.949 63.8604 49.429C65.2018 51.909 65.8501 54.7047 65.7369 57.522C65.6237 60.3393 64.7532 63.074 63.2171 65.4383L70 72.8299L65.3191 77.1029L58.7809 69.9122C56.7437 71.2811 54.4136 72.153 51.978 72.4575C49.5425 72.762 47.0695 72.4908 44.7579 71.6656C42.4462 70.8403 40.3605 69.4842 38.6684 67.7062C36.9763 65.9281 35.7251 63.7778 35.0153 61.4282C34.3056 59.0785 34.1571 56.5951 34.5818 54.1777C35.0065 51.7602 35.9926 49.4761 37.4608 47.5091C38.9289 45.5421 40.8382 43.9471 43.035 42.8523C45.2318 41.7575 47.6549 41.1935 50.1094 41.2056ZM11.9218 41.3688C11.4708 41.3444 11.0473 41.1441 10.7422 40.8109C10.4372 40.4777 10.275 40.0382 10.2904 39.5868C10.2795 39.3624 10.3131 39.1381 10.3893 38.9268C10.4656 38.7155 10.5829 38.5213 10.7346 38.3557C10.8863 38.19 11.0693 38.056 11.2731 37.9614C11.4769 37.8669 11.6974 37.8136 11.9218 37.8048H33.0109C33.4614 37.8307 33.884 38.0315 34.1887 38.3643C34.4934 38.6971 34.6562 39.1357 34.6423 39.5868C34.6533 39.8111 34.6197 40.0355 34.5434 40.2468C34.4672 40.4581 34.3498 40.6522 34.1982 40.8179C34.0465 40.9836 33.8634 41.1176 33.6597 41.2121C33.4559 41.3067 33.2354 41.3599 33.0109 41.3688H11.9218ZM52.3055 10.8363H58.1535C59.2592 10.8413 60.3183 11.2823 61.1007 12.0635C61.8832 12.8448 62.3258 13.9033 62.3324 15.009V34.3976C62.2069 35.709 59.0005 35.7216 58.7245 34.3976V15.009C58.7257 14.9311 58.7113 14.8538 58.6822 14.7816C58.6531 14.7094 58.6099 14.6438 58.555 14.5886C58.5002 14.5331 58.4347 14.4895 58.3624 14.4604C58.2901 14.4312 58.2126 14.4172 58.1346 14.4191H52.2804V34.3976C51.9729 35.5835 49.2999 35.7655 48.6976 34.3976V4.17892C48.6939 4.02475 48.6336 3.87732 48.5281 3.76479C48.4729 3.70994 48.4073 3.66669 48.3351 3.6376C48.2629 3.6085 48.1856 3.59415 48.1077 3.59537H4.18519C4.10736 3.59415 4.03007 3.6085 3.95787 3.6376C3.88567 3.66669 3.82002 3.70994 3.76479 3.76479C3.65645 3.88051 3.59592 4.03295 3.59537 4.19147V53.8302C3.59592 53.9888 3.65645 54.1412 3.76479 54.2569C3.82002 54.3118 3.88567 54.355 3.95787 54.3841C4.03007 54.4132 4.10736 54.4275 4.18519 54.4263H28.0728C29.8799 54.6083 29.9552 57.7331 28.0728 58.0091H13.5909V64.6665C13.5892 64.7445 13.6033 64.8219 13.6323 64.8943C13.6613 64.9666 13.7047 65.0323 13.7598 65.0874C13.8149 65.1425 13.8807 65.1859 13.953 65.215C14.0253 65.244 14.1028 65.2581 14.1807 65.2564H28.0728C29.3842 65.407 29.8046 68.3937 28.0728 68.8392H14.2058C13.6552 68.8386 13.1103 68.7271 12.6037 68.5115C12.097 68.2959 11.639 67.9806 11.2567 67.5843C10.8629 67.2001 10.5493 66.7416 10.3339 66.2354C10.1184 65.7292 10.0056 65.1853 10.0018 64.6352V58.0091H4.17892C3.07213 58.0042 2.01208 57.5623 1.22945 56.7797C0.44682 55.9971 0.00495216 54.937 0 53.8302L0 4.17892C0.00397751 3.63253 0.117031 3.09245 0.332527 2.59034C0.548024 2.08823 0.861624 1.63422 1.25493 1.25493C1.63868 0.860588 2.09705 0.546546 2.60336 0.331097C3.10967 0.115647 3.65378 0.0030958 4.20402 0L48.1266 0C48.6772 0.000626809 49.222 0.112056 49.7287 0.327652C50.2353 0.543249 50.6934 0.858602 51.0757 1.25493C51.4689 1.63952 51.7822 2.09806 51.9976 2.60418C52.2129 3.1103 52.3261 3.654 52.3306 4.20402V10.8363H52.3055ZM11.8779 16.5902C11.4274 16.5642 11.0048 16.3635 10.7001 16.0306C10.3954 15.6978 10.2327 15.2592 10.2465 14.8082C10.2356 14.5838 10.2692 14.3595 10.3454 14.1482C10.4217 13.9369 10.539 13.7428 10.6907 13.5771C10.8424 13.4114 11.0254 13.2774 11.2292 13.1828C11.433 13.0883 11.6534 13.035 11.8779 13.0262H40.0699C40.5216 13.049 40.946 13.2488 41.2514 13.5823C41.5568 13.9159 41.7184 14.3563 41.7013 14.8082C41.7123 15.0326 41.6787 15.2569 41.6024 15.4682C41.5262 15.6795 41.4088 15.8736 41.2571 16.0393C41.1054 16.205 40.9224 16.339 40.7187 16.4335C40.5149 16.5281 40.2944 16.5813 40.0699 16.5902H11.8779ZM11.8779 28.9763C11.428 28.952 11.0054 28.7526 10.7006 28.4207C10.3957 28.0889 10.2327 27.651 10.2465 27.2006C10.2356 26.9762 10.2692 26.7519 10.3454 26.5406C10.4217 26.3293 10.539 26.1352 10.6907 25.9695C10.8424 25.8038 11.0254 25.6698 11.2292 25.5753C11.433 25.4807 11.6534 25.4275 11.8779 25.4186H40.0699C40.5216 25.4414 40.946 25.6412 41.2514 25.9747C41.5568 26.3083 41.7184 26.7487 41.7013 27.2006C41.7123 27.4247 41.6786 27.6487 41.6023 27.8596C41.526 28.0706 41.4085 28.2643 41.2568 28.4294C41.105 28.5946 40.9219 28.7281 40.7182 28.8219C40.5145 28.9158 40.2941 28.9683 40.0699 28.9763H11.8779ZM47.4426 56.0201C47.1854 55.6122 46.6959 55.0475 46.6959 54.5644C46.7032 54.4071 46.7573 54.2557 46.8512 54.1294C46.9451 54.003 47.0746 53.9076 47.223 53.8553C47.223 53.4475 47.1791 53.0333 47.1791 52.6004C47.1791 52.3557 47.1791 52.111 47.1791 51.8725C47.1912 51.7463 47.2186 51.622 47.2607 51.5023C47.4495 50.8845 47.8639 50.3604 48.4215 50.0341C48.6177 49.9087 48.8284 49.8076 49.0489 49.7329C49.4442 49.5886 49.256 48.9548 49.6764 48.9486C50.9387 49.0882 52.1191 49.6421 53.0333 50.5235C53.4475 50.9523 53.6849 51.5213 53.6985 52.1172L53.6608 53.9055C53.7575 53.9261 53.8473 53.9708 53.9219 54.0356C53.9966 54.1003 54.0535 54.1829 54.0875 54.2757C54.2255 54.8342 53.642 55.5307 53.3722 55.9887C53.1024 56.4468 52.1612 57.5323 52.1612 57.5448C52.1661 57.6207 52.1946 57.6931 52.2427 57.7519C53.7361 59.7974 58.1095 58.2162 58.1095 62.2885H42.6676C42.6676 58.2162 47.0599 59.7786 48.5344 57.7519C48.5884 57.6916 48.6253 57.6179 48.6411 57.5385C48.6411 57.5385 47.5368 56.1581 47.4364 56.0013L47.4426 56.0201ZM50.1219 44.4747C52.586 44.4772 54.9941 45.2102 57.0417 46.581C59.0893 47.9517 60.6846 49.8988 61.6258 52.1761C62.5671 54.4533 62.8121 56.9585 62.3298 59.375C61.8476 61.7914 60.6598 64.0107 58.9165 65.7522C57.1732 67.4937 54.9528 68.6793 52.5359 69.1591C50.1189 69.6389 47.614 69.3914 45.3377 68.4479C43.0614 67.5043 41.1159 65.9071 39.7472 63.8581C38.3784 61.8091 37.6479 59.4003 37.6479 56.9362C37.6479 55.2987 37.9706 53.6772 38.5977 52.1645C39.2247 50.6518 40.1437 49.2775 41.3022 48.1202C42.4607 46.9628 43.8359 46.0452 45.3493 45.4197C46.8626 44.7942 48.4844 44.4731 50.1219 44.4747Z" fill="#F11576"/>
                      </svg> */}
                    <p>Case Studies</p>
                  </div>
                  <div className={activeTab === 'tab2' ? "tablinks active" : "tablinks"} onClick={() => { setActiveTab('tab2') }}>
                    <p>Insights</p>
                  </div>
                  <div className={activeTab === 'tab3' ? "tablinks active" : "tablinks"} onClick={() => { setActiveTab('tab3') }}>
                    <p>News</p>
                  </div>

                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row className='w-100 mt-5'>
            <Col className='col-md-12'>

              <div className={activeTab === 'tab1' ? "tabcontent active" : "tabcontent"}>
                <Row className='m-0 g-0 mobile'>
                  <Col className='col-md-6 mobile'>
                    <div className='sol-box white ser-box3'>
                      <div className='text-box'>
                        <p className='p-5 empty-para'>
                        </p>
                      </div>

                    </div>
                  </Col>

                  <Col className='col-md-6 mobile'>
                    <div className='sol-box white d-bg-box '>
                      <div className='p-5 mobilepadding'>
                        <h4>Case Studies</h4>
                        <p>We leverage cutting-edge data solutions, we unlock business intelligence, enable seamless cloud migration, and use statistical models to predict future outcomes that strengthen your business’s data arm. </p>
                        <p className='anima'><span className='anima-underline' > **** </span></p>
                        <div className='mob-align'>
                          <NavLink to="/about" onClick={scrollToTop}><button className="findout-btn mt-3 ">Find out more about us</button></NavLink>  </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className='desktop'>
                  <CaseStudies />
                </Row>
              </div>

              <div className={activeTab === 'tab2' ? "tabcontent active" : "tabcontent"}>
                <Row className=''>
                  {/* <Col className='col-md-6'>
                    <div className='sol-box white ser-box3'>
                      <div className='text-box'>
                        <p className='p-5 empty-para'>
                        </p>
                      </div>

                    </div>
                  </Col>

                  <Col className='col-md-6 '>
                    <div className='sol-box white d-bg-box '>
                      <div className='p-5 mobilepadding'>
                        <h4>Insights</h4>
                        <p>We leverage cutting-edge data solutions, we unlock business intelligence, enable seamless cloud migration, and use statistical models to predict future outcomes that strengthen your business’s data arm. </p>
                        <p className='anima'><span className='anima-underline' > **** </span></p>
                        <div className='mob-align'> <NavLink to="/about" onClick={scrollToTop}><button className="findout-btn mt-3 ">Find out more about us</button></NavLink> </div>
                      </div>
                    </div>
                  </Col> */}
                  <Insight />
                </Row>
              </div>

              <div className={activeTab === 'tab3' ? "tabcontent active" : "tabcontent"}>
                <Row className='m-0 g-0'>
                  {/* <Col className='col-md-6'>
                    <div className='sol-box white ser-box3'>
                      <div className='text-box'>
                        <p className='p-5 empty-para'>
                        </p>
                      </div>

                    </div>
                  </Col>

                  <Col className='col-md-6 '>
                    <div className='sol-box white d-bg-box '>
                      <div className='p-5 mobilepadding'>
                        <h4>News</h4>
                        <p>We leverage cutting-edge data solutions, we unlock business intelligence, enable seamless cloud migration, and use statistical models to predict future outcomes that strengthen your business’s data arm. </p>
                        <p className='anima'><span className='anima-underline' > **** </span></p>
                        <div className='mob-align'>
                          <NavLink to="/about" onClick={scrollToTop}><button className="findout-btn mt-3 ">Find out more about us</button></NavLink>
                        </div>
                      </div>
                    </div>
                  </Col> */}
                  <News/>
                </Row>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Knowledgebody
