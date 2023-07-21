import React from 'react'
import Getintouch2 from '../component/Getintouch2'
import Menu from '../component/Menu';
import Footer from '../component/Footer' 
import Headerabout from '../component/Headerabout'
import Aboutus from '../component/Aboutus'
// import Aboutoverview from '../component/Aboutoverview'
// import Ourvalue from '../component/Ourvalue'
import Abouttteam from '../component/Abouttteam'
import Whoweserve from '../component/Whoweserve'
import { Helmet } from 'react-helmet';
const About = () => {
  return (
    <>
    <Helmet>
      <title>About Us-Preferred Square</title>
      <meta name='description' content=''/>
      <meta name='keywords' content=''/>
    </Helmet>
    <Menu />
    <Headerabout/>
    <Aboutus /> 
    {/* <Aboutoverview/>
    <Ourvalue/> */}
    <Abouttteam/>
    <Whoweserve/>
    <Getintouch2 />
    <Footer />
    </> 
  )
}

export default About