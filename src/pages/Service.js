import React from 'react'
import Menu from '../component/Menu';
import HeaderService from '../component/HeaderService'
import Getintouch2 from '../component/Getintouch2'
import Servicebody from '../component/Servicebody'
import Footer from '../component/Footer' 
import { Helmet } from 'react-helmet';


const Service = () => {
  return (
    <>
    <Helmet>
      <title>Service-Preferred Square</title>
      <meta name='description' content=''/>
      <meta name='keywords' content=''/>
    </Helmet>
      <Menu />
      <HeaderService />
      <Servicebody />
      <Getintouch2 />
      <Footer />
    </>
  )
}

export default Service