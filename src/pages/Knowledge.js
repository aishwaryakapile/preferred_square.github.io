import React from 'react'
import Menu from '../component/Menu';
import Headerknowledge from '../component/Headerknowledge'
import Getintouch2 from '../component/Getintouch2'
import Footer from '../component/Footer'
import Knowledgebody from '../component/Knowledgebody'
import { Helmet } from 'react-helmet';

const Knowledge = () => {
  return (
    <>
    <Helmet>
      <title>Knowledge-Preferred Square</title>
      <meta name='description' content=''/>
      <meta name='keywords' content=''/>
    </Helmet>
        <Menu />
        <Headerknowledge />
        <Knowledgebody />
        <Getintouch2 />
        <Footer />
    </>
  )
}

export default Knowledge
