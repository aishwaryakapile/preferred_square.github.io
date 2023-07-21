import React from 'react'
import Menu from '../component/Menu';
import Headercareer from '../component/Headercareer'
import Careerbody from '../component/Careerbody'
import Careerjob from '../component/Careerjob'
import Footer from '../component/Footer'
import { Helmet } from 'react-helmet';

const Career = () => {
  return (
    <>  
    <Helmet>
      <title>Career-Preferred Square</title>
      <meta name='description' content=''/>
      <meta name='keywords' content=''/>
    </Helmet>
        <Menu />
        <Headercareer />   
        <Careerbody />
        <Careerjob />
        <Footer />
    </>
      
  )
}

export default Career
