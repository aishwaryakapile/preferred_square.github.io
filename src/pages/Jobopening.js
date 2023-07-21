import React from 'react'
import JobOpeningheader from '../component/Jobopeningheader'
import Menu from '../component/Menu'
//import Getintouch2 from '../component/Getintouch2'
import Footer from '../component/Footer'
import Jobopeningbody from '../component/Jobopeningbody'

const Jobopening = () => {
  return (
    <>
      <Menu />
        <JobOpeningheader/>
        <Jobopeningbody/>
        <Footer/>

    </>
  )
}

export default Jobopening