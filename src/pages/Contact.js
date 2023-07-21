import React from 'react'
import Menu from '../component/Menu';
import Headercontact from '../component/Headercontact'
import Footer from '../component/Footer'
import Contactbody from '../component/Contactbody'
import { Helmet } from 'react-helmet';

const Contact = () => {

  return (
    <>
    <Helmet>
      <title>Contact-Preferred Square</title>
      <meta name='description' content=''/>
      <meta name='keywords' content=''/>
    </Helmet>
        <Menu />
        <Headercontact />
        <Contactbody />
        <Footer />
      
    </>
  )
}

export default Contact
